import * as path from 'node:path'; 

import { 
    Config, ITranspile, 
    Logger, Scope 
} from '@cmmv/core';

import { AbstractPage, AbstractView } from '../abstracts';

import { ParsedContract } from "../interfaces";

import {
    FORM_OUTPUT,
    FORM_SCHEMA,
    FORM_GENERATEHTML,
    FORM_INJECTCONTROLLER,
    FORM_USERPC,
    PAGE_ROUTER,
    PAGE_FORM,
    PAGE_OUTPUT,
    PAGE_TITLE,
    PAGE_SHOWTITLE,
    PAGE_SHOWBREADCRUMB,
    PAGE_DATATABLE,
    PAGE_AUTH,
    PAGE_ROLE,
    PAGE_ACTIONS,
    PAGE_SCHEMA
} from "../decorators";

export class FormBuilderTranspile implements ITranspile {
    private logger: Logger = new Logger('FormBuilderTranspile');

    run(): void {
        const env = Config.get<string>('env');
        
        if (env === 'dev' || env === 'development' || env === 'build') 
            this.processViews();
    }

    processViews(){
        const contracts = Scope.getArray<ParsedContract>('__contracts');

        contracts?.forEach((contract: ParsedContract) => {
            if(contract.viewForm){
                const parsedView = this.getFormMetadata(contract.viewForm);
                
                const viewParsed = parsedView.schema.parser(
                    contract, 
                    parsedView.components, 
                    parsedView.tabs
                );

                parsedView.schema.generateOutput(
                    path.resolve(parsedView.output), 
                    viewParsed
                );
            }

            if(contract.viewPage){
                const parsedPage = this.getPageMetadata(contract.viewPage);
                console.log(parsedPage);
            }
        });
    }

    private getFormMetadata(view: new () => AbstractView) {
        const viewInstance = new view();
        
        const output = Reflect.getMetadata(
            FORM_OUTPUT,
            viewInstance.constructor,
        );

        const schema = Reflect.getMetadata(
            FORM_SCHEMA,
            viewInstance.constructor,
        );

        const generateHTML = Reflect.getMetadata(
            FORM_GENERATEHTML,
            viewInstance.constructor,
        );

        const injectController = Reflect.getMetadata(
            FORM_INJECTCONTROLLER,
            viewInstance.constructor,
        );

        const useRPC = Reflect.getMetadata(
            FORM_USERPC,
            viewInstance.constructor,
        );

        return { 
            schema: new schema(),
            components: viewInstance.components, 
            tabs: viewInstance.tabs,
            output,            
            generateHTML,
            injectController,
            useRPC
        };
    }

    private getPageMetadata(page: new () => AbstractPage){
        const pageInstance = new page();

        const schema = Reflect.getMetadata(
            PAGE_SCHEMA,
            pageInstance.constructor,
        );

        const router = Reflect.getMetadata(PAGE_ROUTER, pageInstance.constructor);
        const form = Reflect.getMetadata(PAGE_FORM, pageInstance.constructor);
        const output = Reflect.getMetadata(PAGE_OUTPUT, pageInstance.constructor);
        const title = Reflect.getMetadata(PAGE_TITLE, pageInstance.constructor);
        const showTitle = Reflect.getMetadata(PAGE_SHOWTITLE, pageInstance.constructor);
        const showBreadcrumb = Reflect.getMetadata(PAGE_SHOWBREADCRUMB, pageInstance.constructor);
        const dataTable = Reflect.getMetadata(PAGE_DATATABLE, pageInstance.constructor);
        const auth = Reflect.getMetadata(PAGE_AUTH, pageInstance.constructor);
        const role = Reflect.getMetadata(PAGE_ROLE, pageInstance.constructor);
        const actions = Reflect.getMetadata(PAGE_ACTIONS, pageInstance.constructor);

        return {
            schema: new schema(),
            router,
            form,
            output,
            title,
            showTitle,
            showBreadcrumb,
            dataTable: (dataTable) ? pageInstance.dataTable : null,
            auth,
            role,
            actions,
        };
    }
}
