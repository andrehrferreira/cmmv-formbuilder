import { ViewSchema } from "../abstracts/viewSchema.abstract";

export interface FormOptions {
    schema: new () => ViewSchema;
    output: string;
    generateHTML?: boolean;
    injectController?: boolean;
    useRPC?: boolean
}