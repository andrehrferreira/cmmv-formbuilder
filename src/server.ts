import { Application } from '@cmmv/core';
import { DefaultAdapter, DefaultHTTPModule } from '@cmmv/http';
import { ProtobufModule } from '@cmmv/protobuf';
import { WSModule, WSAdapter } from '@cmmv/ws';
import { ViewModule, VueTranspile } from '@cmmv/view';
import { RepositoryModule, Repository } from '@cmmv/repository';
import { ViteModule } from '@cmmv/vite';

//Contracts
import { FormBuilderModule } from './modules/formbuilder.module';
import { LocalesContract } from './contracts/locale.contract';

Application.create({
    httpAdapter: DefaultAdapter,
    wsAdapter: WSAdapter,
    modules: [
        DefaultHTTPModule,
        FormBuilderModule,
        ProtobufModule,
        WSModule,
        ViewModule,
        RepositoryModule,
        ViteModule,
    ],
    services: [Repository],
    transpilers: [VueTranspile],
    contracts: [LocalesContract],
});