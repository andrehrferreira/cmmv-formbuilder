import { Application } from '@cmmv/core';
import { DefaultAdapter, DefaultHTTPModule } from '@cmmv/http';

//Contracts
import { FormBuilderModule } from './modules/formbuilder.module';
import { LocalesContract } from './contracts/locale.contract';

Application.create({
    httpAdapter: DefaultAdapter,
    modules: [
        DefaultHTTPModule,
        FormBuilderModule
    ],
    services: [],
    contracts: [LocalesContract],
});