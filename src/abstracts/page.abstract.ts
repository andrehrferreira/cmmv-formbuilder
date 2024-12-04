import { ViewSchema } from '../abstracts';
import { DataTable } from '../interfaces';

export abstract class AbstractPage {
    public schema: ViewSchema;
    public router: string;
    public form: string;
    public output: string;
    public title?: string;
    public showTitle?: boolean;
    public showBreadcrumb?: boolean;
    public dataTable: DataTable | null;
    public auth?: string;
    public role?: string;
    public actions?: Array<string>;
}
