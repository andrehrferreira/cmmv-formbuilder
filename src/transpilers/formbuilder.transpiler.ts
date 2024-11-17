import * as path from 'node:path'; 

import { 
    Config, ITranspile, 
    Logger, Scope 
} from '@cmmv/core';

import { AbstractView } from '../abstracts';

import {
    VIEW_OUTPUT,
    VIEW_SCHEMA,
    VIEW_GENERATEHTML,
    VIEW_INJECTCONTROLLER,
    VIEW_USERPC
} from "../decorators";

export class FormBuilderTranspile implements ITranspile {
    private logger: Logger = new Logger('FormBuilderTranspile');

    run(): void {
        const env = Config.get<string>('env');
        
        if (env === 'dev' || env === 'development' || env === 'build') 
            this.processViews();
    }

    processViews(){
        const contracts = Scope.getArray<any>('__contracts');

        contracts?.forEach((contract: any) => {
            if(contract.viewForm){
                const parsedView = this.getViewMetadata(contract.viewForm);
                const viewParsed = parsedView.schema.parser(parsedView.components, parsedView.tabs);
                parsedView.schema.generateOutput(path.resolve(parsedView.output), viewParsed);
            }
        });
    }

    private getViewMetadata(view: new () => AbstractView) {
        const viewInstance = new view();
        
        const output = Reflect.getMetadata(
            VIEW_OUTPUT,
            viewInstance.constructor,
        );

        const schema = Reflect.getMetadata(
            VIEW_SCHEMA,
            viewInstance.constructor,
        );

        const generateHTML = Reflect.getMetadata(
            VIEW_GENERATEHTML,
            viewInstance.constructor,
        );

        const injectController = Reflect.getMetadata(
            VIEW_INJECTCONTROLLER,
            viewInstance.constructor,
        );

        const useRPC = Reflect.getMetadata(
            VIEW_USERPC,
            viewInstance.constructor,
        );

        return { 
            components: viewInstance.components, 
            tabs: viewInstance.tabs,
            output,
            schema: new schema(),
            generateHTML,
            injectController,
            useRPC
        };
    }
}
