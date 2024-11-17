import { AbstractView } from "../abstracts";
import { Form } from "../decorators";
import { VueformSchema } from "../schemas";

@Form({
    output: "public/components/localeForm.vue",
    useRPC: true,
    schema: VueformSchema
})
export class LocaleViewForm extends AbstractView {
    public tabs = [
        { name: "code", "label": "Code", elements: ["code", "code3"] },
        { name: "names", "label": "Names", elements: ["name", "nameOriginal"] }
    ]

    public components = {
        title: { 
            type: "static", 
            props: {
                content: "Locale",
                tag: "h1"
            } 
        },

        code: { 
            type: "input", 
            props: {
                "input-type": "text",
                mask: { mask: 'AA', overwrite: true },
                placeholder: "$i18n.code|Code",
                rules: ["required", "max:2", "min:2"]
            } 
        },

        code3: { 
            type: "input", 
            props: {
                "input-type": "text",
                mask: { mask: 'AAA', overwrite: true },
                placeholder: "$i18n.code3|Code A3C",
                rules: ["required", "max:3", "min:3"]
            } 
        },

        codeNum: { 
            type: "input", 
            props: {
                "input-type": "number",
                mask: { mask: '000', overwrite: true },
                placeholder: "$i18n.numeric|Numeric",
                rules: ["required"]
            } 
        },

        name: { 
            type: "input", 
            props: {
                "input-type": "text",
                placeholder: "$i18n.name|Name"
            } 
        },

        nameOriginal: { 
            type: "input", 
            props: {
                "input-type": "text",
                placeholder: "$i18n.nameOriginal|Original Name"
            } 
        },

        submit: { 
            type: "button", 
            props: {
                "button-label": "Submit",
                "button-type": "submit",
                submits: true,
                full: true
            } 
        }
    }
}