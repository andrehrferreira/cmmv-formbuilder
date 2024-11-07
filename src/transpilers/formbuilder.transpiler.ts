import * as fs from 'node:fs';
import * as path from 'node:path';

import { Application, Config, ITranspile, Logger, Module } from '@cmmv/core';

export class FormBuilderTranspile implements ITranspile {
    private logger: Logger = new Logger('AuthTraFormBuilderTranspilenspile');

    run(): void {
        const hasWs = Module.hasModule('ws');

    }

    
}
