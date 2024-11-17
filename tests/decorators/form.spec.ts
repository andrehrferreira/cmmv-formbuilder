import { describe, it, expect } from 'vitest';

import 'reflect-metadata';

import { Form } from '../../src/decorators'; 
import { DefaultFormSchema } from '../../src/schemas'; 

import {
    FORM_SCHEMA,
    FORM_OUTPUT,
    FORM_GENERATEHTML,
    FORM_INJECTCONTROLLER,
    FORM_USERPC,
} from '../../src/decorators';

describe('Form Decorator', () => {
    it('should define default metadata when no options are provided', () => {
        @Form()
        class TestForm {}

        expect(Reflect.getMetadata(FORM_SCHEMA, TestForm)).toBe(null);
        expect(Reflect.getMetadata(FORM_OUTPUT, TestForm)).toBe('');
        expect(Reflect.getMetadata(FORM_GENERATEHTML, TestForm)).toBe(false);
        expect(Reflect.getMetadata(FORM_INJECTCONTROLLER, TestForm)).toBe(false);
        expect(Reflect.getMetadata(FORM_USERPC, TestForm)).toBe(false);
    });

    it('should define metadata based on provided options', () => {
        @Form({
            schema: DefaultFormSchema,
            output: 'path/to/output.vue',
            generateHTML: true,
            injectController: true,
            useRPC: true,
        })
        class TestForm {}

        expect(Reflect.getMetadata(FORM_OUTPUT, TestForm)).toBe('path/to/output.vue');
        expect(Reflect.getMetadata(FORM_GENERATEHTML, TestForm)).toBe(true);
        expect(Reflect.getMetadata(FORM_INJECTCONTROLLER, TestForm)).toBe(true);
        expect(Reflect.getMetadata(FORM_USERPC, TestForm)).toBe(true);
    });

    it('should throw an error for invalid schema', () => {
        expect(() => {
            @Form({ schema: {} as any, output: "" }) 
            class InvalidForm {}
        }).toThrowError('Invalid schema provided: [object Object]');
    });

    it('should override defaults only for specified options', () => {
        @Form({
            schema: DefaultFormSchema,
            output: 'path/to/output.vue',
        })
        class TestForm {}

        expect(Reflect.getMetadata(FORM_OUTPUT, TestForm)).toBe('path/to/output.vue');
        expect(Reflect.getMetadata(FORM_GENERATEHTML, TestForm)).toBe(false);
        expect(Reflect.getMetadata(FORM_INJECTCONTROLLER, TestForm)).toBe(false);
        expect(Reflect.getMetadata(FORM_USERPC, TestForm)).toBe(false);
    });

    it('should set schema to null if no schema is provided in options', () => {
        @Form({ output: 'test/output.vue' })
        class TestForm {}

        expect(Reflect.getMetadata(FORM_SCHEMA, TestForm)).toBe(null);
    });

    it('should handle a mix of valid and default options', () => {
        @Form({ generateHTML: true, useRPC: false })
        class MixedForm {}

        expect(Reflect.getMetadata(FORM_GENERATEHTML, MixedForm)).toBe(true);
        expect(Reflect.getMetadata(FORM_USERPC, MixedForm)).toBe(false);
        expect(Reflect.getMetadata(FORM_OUTPUT, MixedForm)).toBe('');
    });

    it('should define metadata when only schema is provided', () => {
        @Form({ schema: DefaultFormSchema })
        class SchemaOnlyForm {}

        expect(Reflect.getMetadata(FORM_SCHEMA, SchemaOnlyForm)).toBe(DefaultFormSchema);
        expect(Reflect.getMetadata(FORM_OUTPUT, SchemaOnlyForm)).toBe('');
        expect(Reflect.getMetadata(FORM_GENERATEHTML, SchemaOnlyForm)).toBe(false);
    });

    it('should not alter metadata of unrelated classes', () => {
        class UnrelatedClass {}

        expect(Reflect.getMetadata(FORM_SCHEMA, UnrelatedClass)).toBeUndefined();
        expect(Reflect.getMetadata(FORM_OUTPUT, UnrelatedClass)).toBeUndefined();
    });

    it('should handle nested classes with different metadata', () => {
        @Form({ schema: DefaultFormSchema, output: 'nested/parent.vue' })
        class ParentForm {}

        @Form({ output: 'nested/child.vue' })
        class ChildForm {}

        expect(Reflect.getMetadata(FORM_SCHEMA, ParentForm)).toBe(DefaultFormSchema);
        expect(Reflect.getMetadata(FORM_OUTPUT, ParentForm)).toBe('nested/parent.vue');
        expect(Reflect.getMetadata(FORM_SCHEMA, ChildForm)).toBe(null);
        expect(Reflect.getMetadata(FORM_OUTPUT, ChildForm)).toBe('nested/child.vue');
    });
    
    it('should handle a schema defined as a function class', () => {
        class CustomSchema {}

        @Form({ schema: CustomSchema, output: 'function/schema.vue' })
        class FunctionSchemaForm {}

        expect(Reflect.getMetadata(FORM_SCHEMA, FunctionSchemaForm)).toBe(CustomSchema);
    });
});
