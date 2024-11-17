import { Module } from '@cmmv/core';

import { FormBuilderTranspile } from "../transpilers/formbuilder.transpiler";

export let FormBuilderModule = new Module('formbuilder', {
    transpilers: [FormBuilderTranspile]
});
