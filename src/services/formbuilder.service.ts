import {
    Application,
    Config,
    Logger,
    Scope,
    Service,
    Singleton,
} from '@cmmv/core';

@Service()
export class FormBuilderService extends Singleton {
    public logger: Logger = new Logger('FormBuilderService');

    
}
