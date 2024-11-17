// Generated automatically by CMMV

import 'reflect-metadata';
import { Module, ApplicationTranspile } from '@cmmv/core';
import { LocalesController } from './controllers/locales.controller';
import { LocalesService } from './services/locales.service';
import { LocalesGateway } from './gateways/locales.gateway';

export let ApplicationModule = new Module("app", {
    controllers: [LocalesController],
    providers: [LocalesService, LocalesGateway],
    transpilers: [ApplicationTranspile]
});