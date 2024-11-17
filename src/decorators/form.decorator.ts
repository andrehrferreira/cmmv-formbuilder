 import { FormOptions } from "../interfaces";

export const VIEW_SCHEMA = Symbol('view_schema');
export const VIEW_OUTPUT = Symbol('view_output');
export const VIEW_GENERATEHTML = Symbol('view_generateHTML');
export const VIEW_INJECTCONTROLLER = Symbol('view_injectController');
export const VIEW_USERPC = Symbol('view_useRPC');

export function Form(options?: FormOptions): ClassDecorator{
    const isValidClass = (value: any) => {
        return typeof value === 'function' && value.prototype;
    };

    if (options?.schema && !isValidClass(options.schema)) {
        throw new Error(`Invalid schema provided: ${options.schema}`);
    }

    const defaultSchema = null;
    const defaultOutput = "";
    const defaultGenerateHTML = false;
    const defaultInjectController = false;
    const defaultUseRPC = false;

    const [
        schema,
        output,
        generateHTML,
        injectController,
        useRPC
    ] = !options
        ? [
            defaultSchema,
            defaultOutput,
            defaultGenerateHTML,
            defaultInjectController,
            defaultUseRPC
          ]
        : [
              options.schema || defaultSchema,
              options.output || defaultOutput,
              options.generateHTML || defaultGenerateHTML,
              options.injectController || defaultInjectController,
              options.useRPC || defaultUseRPC
          ];

    return (target: object) => {
        Reflect.defineMetadata(VIEW_SCHEMA, schema, target);
        Reflect.defineMetadata(VIEW_OUTPUT, output, target);
        Reflect.defineMetadata(VIEW_GENERATEHTML, generateHTML, target);
        Reflect.defineMetadata(VIEW_INJECTCONTROLLER, injectController, target);
        Reflect.defineMetadata(VIEW_USERPC, useRPC, target);
    };
}