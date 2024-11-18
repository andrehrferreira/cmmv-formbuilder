import { 
    AbstractForm,
    AbstractPage 
} from "../abstracts";

export interface ParsedContract {
    controllerName: string;
    controllerCustomPath: string;
    protoPath: string;
    protoPackage: string;
    directMessage: boolean;
    generateController: boolean;
    generateEntities: boolean;
    auth: boolean;
    imports: Array<string>,
    cache: object,
    customProto: string|undefined,
    customTypes: string|undefined,
    viewForm: new () => AbstractForm|null|undefined,
    viewPage: new () => AbstractPage|null|undefined,
}