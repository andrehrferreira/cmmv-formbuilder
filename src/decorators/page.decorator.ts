import { PageOptions } from "../interfaces";

export const PAGE_SCHEMA = Symbol('page_schema');
export const PAGE_ROUTER = Symbol('page_router');
export const PAGE_FORM = Symbol('page_form');
export const PAGE_OUTPUT = Symbol('page_output');
export const PAGE_TITLE = Symbol('page_title');
export const PAGE_SHOWTITLE = Symbol('page_showTitle');
export const PAGE_SHOWBREADCRUMB = Symbol('page_showBreadcrumb');
export const PAGE_DATATABLE = Symbol('page_dataTable');
export const PAGE_AUTH = Symbol('page_auth');
export const PAGE_ROLE = Symbol('page_role');
export const PAGE_ACTIONS = Symbol('page_actions');

export function Page(options?: PageOptions): ClassDecorator {
    const isValidClass = (value: any) => {
        return typeof value === 'function' && value.prototype;
    };

    if (options?.schema && !isValidClass(options.schema)) {
        throw new Error(`Invalid schema provided: ${options.schema}`);
    }

    const defaultSchema = null;
    const defaultRouter = "";
    const defaultForm = "";
    const defaultOutput = "";
    const defaultTitle = "";
    const defaultShowTitle = true;
    const defaultShowBreadcrumb = true;
    const defaultDataTable = true;
    const defaultAuth = true;
    const defaultRole = "";
    const defaultActions = [
        "insert", "update", "delete",
        "export"
    ];

    const [
        schema,
        router,
        form,
        output,
        title,
        showTitle,
        showBreadcrumb,
        dataTable,
        auth,
        role,
        actions
    ] = !options
        ? [
            defaultSchema,
            defaultRouter,
            defaultForm,
            defaultOutput,
            defaultTitle,
            defaultShowTitle,
            defaultShowBreadcrumb,
            defaultDataTable,
            defaultAuth,
            defaultRole,
            defaultActions
        ]
        : [
            options.schema || defaultSchema,
            options.router || defaultRouter,
            options.form || defaultForm,
            options.output || defaultOutput,
            options.title || defaultTitle,
            options.showTitle ?? defaultShowTitle,
            options.showBreadcrumb ?? defaultShowBreadcrumb,
            options.dataTable ?? defaultDataTable,
            options.auth ?? defaultAuth,
            options.role || defaultRole,
            options.actions || defaultActions
        ];

    return (target: object) => {
        Reflect.defineMetadata(PAGE_SCHEMA, schema, target);
        Reflect.defineMetadata(PAGE_ROUTER, router, target);
        Reflect.defineMetadata(PAGE_FORM, form, target);
        Reflect.defineMetadata(PAGE_OUTPUT, output, target);
        Reflect.defineMetadata(PAGE_TITLE, title, target);
        Reflect.defineMetadata(PAGE_SHOWTITLE, showTitle, target);
        Reflect.defineMetadata(PAGE_SHOWBREADCRUMB, showBreadcrumb, target);
        Reflect.defineMetadata(PAGE_DATATABLE, dataTable, target);
        Reflect.defineMetadata(PAGE_AUTH, auth, target);
        Reflect.defineMetadata(PAGE_ROLE, role, target);
        Reflect.defineMetadata(PAGE_ACTIONS, actions, target);
    };
}
