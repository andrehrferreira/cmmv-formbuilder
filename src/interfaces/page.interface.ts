import { ViewSchema } from "../abstracts";

export interface PageOptions {
    schema: new () => ViewSchema;
    router: string,
    form: string;
    output: string;
    title?: string;
    showTitle?: boolean;
    showBreadcrumb?: boolean;
    dataTable?: boolean;
    auth?: boolean;
    role?: string;
    actions?: Array<"insert"|"update"|"delete"|"export">
}