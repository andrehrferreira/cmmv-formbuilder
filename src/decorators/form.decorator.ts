 import { FormOptions } from "../interfaces";

export const FORM_SCHEMA = Symbol('form_schema');
export const FORM_OUTPUT = Symbol('form_output');
export const FORM_GENERATEHTML = Symbol('form_generateHTML');
export const FORM_INJECTCONTROLLER = Symbol('form_injectController');
export const FORM_USERPC = Symbol('form_useRPC');

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
        Reflect.defineMetadata(FORM_SCHEMA, schema, target);
        Reflect.defineMetadata(FORM_OUTPUT, output, target);
        Reflect.defineMetadata(FORM_GENERATEHTML, generateHTML, target);
        Reflect.defineMetadata(FORM_INJECTCONTROLLER, injectController, target);
        Reflect.defineMetadata(FORM_USERPC, useRPC, target);
    };
}