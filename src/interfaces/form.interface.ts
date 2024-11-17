import { ViewSchema } from "../abstracts";

export interface FormOptions {
    schema: new () => ViewSchema;
    output: string;
    generateHTML?: boolean;
    injectController?: boolean;
    useRPC?: boolean
}