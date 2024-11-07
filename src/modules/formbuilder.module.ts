import { Module } from '@cmmv/core';

import { FormBuilderService } from "../services/formbuilder.service";
import { FormBuilderTranspile } from "../transpilers/formbuilder.transpiler";

export let FormBuilderModule = new Module('formbuilder', {
    providers: [FormBuilderService],
    transpilers: [FormBuilderTranspile]
});
