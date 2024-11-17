import { ViewSchema } from "../abstracts";
import { ViewElement, ViewTab } from "../interfaces";

export class VueformSchema extends ViewSchema {
    public override name = "vueform";

    public override ext = "vue";

    public override components = {
        "input": {
            tag: "TextElement",
            docs: "https://vueform.com/reference/text-element",
            props: {                
                "input-type": "string",                
                mask: "string|object|array|function",
                autocomplete: "string|number",
                loading: "boolean",                
                placeholder: "string|object",                               
                "force-numbers": "boolean",                          
            }
        },
        "textarea": {
            tag: "TextareaElement",
            docs: "https://vueform.com/reference/textarea-element",
            props: { 
                autogrow: "boolean",
                rows: "number"
            }
        },
        "editor": {
            tag: "EditorElement",
            docs: "https://vueform.com/reference/editor-element",
            props: { 
                accept: "array",
                "accept-mimes": "array",
                endpoint: "string|function|promise",
                method: "string",
                "hide-tools": "array"
            }
        },
        "phone": {
            tag: "PhoneElement",
            docs: "https://vueform.com/reference/phone-element",
            props: { 
                include: "array",
                exclude: "array",
                unmask: "boolean",
                "allow-incomplete": "boolean",
                autocomplete: "string|number",
                loading: "boolean"
            }
        },
        "checkbox": {
            tag: "CheckboxElement",
            docs: "https://vueform.com/reference/checkbox-element",
            props: { 
                text: "string|object",
                "true-value": "boolean|string|number",
                "false-value": "boolean|string|number",
                align: "string",
                standalone: "boolean"
            }
        },
        "checkboxgroup": {
            tag: "CheckboxgroupElement",
            docs: "https://vueform.com/reference/checkboxgroup-element",
            props: { 
                items: "object|array|function|string",
                disables: "array",
                "clear-on-refetch": "boolean"
            }
        },
        "radio": {
            tag: "RadioElement",
            docs: "https://vueform.com/reference/radio-element",
            props: { 
                "radio-name": "string",
                "radio-value": "boolean|string|number",
                text: "string|object",
                align: "string",
                standalone: "boolean"
            }
        },
        "radiogroup": {
            tag: "RadiogroupElement",
            docs: "https://vueform.com/reference/radiogroup-element",
            props: { 
                items: "object|array|function|string",
                disables: "array",
                "clear-on-refetch": "boolean"
            }
        },
        "toggle": {
            tag: "ToggleElement",
            docs: "https://vueform.com/reference/toggle-element",
            props: { 
                text: "string|object",
                labels: "object",
                "true-value": "boolean|string|number",
                "false-value": "boolean|string|number",
                "extend-options": "object",
                align: "string",
                standalone: "boolean"
            }
        },
        "select": {
            tag: "SelectElement",
            docs: "https://vueform.com/reference/select-element",
            props: { 
                native: "boolean",
                items: "object|array|function|string",
                "label-prop": "string",
                "value-prop": "string",
                "data-key": "string",
                "search-param": "string",
                search: "boolean",
                "track-by": "string|array",
                strict: "boolean",
                create: "boolean",
                "append-new-option": "boolean",
                "add-option-on": "array",
                "allow-absent": "boolean",
                object: "boolean",
                limit: "number",
                groups: "boolean",
                "group-label": "string",
                "group-options": "string",
                "group-hide-empty": "boolean",
                "open-direction": "string",
                "append-to-body": "boolean",
                "append-to": "string",
                "can-deselect": "boolean",
                "can-clear": "boolean",
                "close-on-select": "boolean",
                "close-on-deselect": "boolean",
                "clear-on-refetch": "boolean",
                delay: "number",
                "min-chars": "number",
                "resolve-on-load": "boolean",
                "filter-results": "boolean",
                "clear-on-search": "boolean",
                caret: "boolean",
                truncate: "boolean",
                loading: "boolean",
                "no-options-text": "string|object",
                "no-results-text": "string|object",
                autocomplete: "string",
                "input-type": "string",
                "extend-options": "string"
            }
        },
        "button": {
            tag: "ButtonElement",
            docs: "https://vueform.com/reference/button-element",
            props: { 
                "button-label": "string|object|function",
                "button-type": "string",
                "button-class": "string|array|object",
                loading: "function|boolean",
                href: "string",
                target: "string",
                resets: "boolean",
                submits: "boolean",
                secondary: "boolean",
                danger: "boolean",
                full: "boolean",
                align: "string"
            }
        },
        "static": {
            tag: "StaticElement ",
            docs: "https://vueform.com/reference/static-element",
            props: { 
                "content": "string|object|function",
                "wrap": "boolean",
                "tag": "string",
                "allowHtml": "boolean",
                "href": "string",
                "target": "string",
                "src": "string",
                "alt": "string",
                "title": "string",
                "width": "string",
                "height": "string",
                "align": "string",
                "top": "string|number",
                "bottom": "string|number"
            }
        },
        "multiselect": {
            tag: "MultiselectElement",
            docs: "https://vueform.com/reference/multiselect-element",
            props: {
                "items": "object|array|function|string",
                "label-prop": "string",
                "value-prop": "string",
                "search-param": "string",
                "track-by": "string|array",
                "autocomplete": "boolean",
                "can-remove": "boolean",
                "can-create": "boolean",
                "can-clear": "boolean",
                "strict": "boolean",
                "max-items": "number",
                "groups": "boolean",
                "group-label": "string",
                "group-options": "string",
                "append-to-body": "boolean",
                "open-direction": "string",
                "delay": "number",
                "min-chars": "number",
                "resolve-on-load": "boolean",
                "filter-results": "boolean",
                "clear-on-search": "boolean",
                "loading": "boolean",
                "no-options-text": "string|object",
                "no-results-text": "string|object",
                "placeholder": "string|object"
            }
        },
        "tags": {
            tag: "TagsElement",
            docs: "https://vueform.com/reference/tags-element",
            props: { 
                "items": "object|array|function|string",
                "label-prop": "string",
                "value-prop": "string",
                "add-option-on": "array",
                "autocomplete": "boolean",
                "search-param": "string",
                "can-remove": "boolean",
                "can-create": "boolean",
                "can-clear": "boolean",
                "strict": "boolean",
                "max-items": "number",
                "native": "boolean",
                "append-to-body": "boolean",
                "groups": "boolean",
                "group-label": "string",
                "group-options": "string",
                "clear-on-search": "boolean",
                "loading": "boolean",
                "no-options-text": "string|object",
                "no-results-text": "string|object",
                "input-type": "string",
                "placeholder": "string|object"
            }
        },
        "date": {
            tag: "DateElement",
            docs: "https://vueform.com/reference/date-element",
            props: {
                "value": "string|object|array",
                "format": "string",
                "display-format": "string",
                "min-date": "string|object",
                "max-date": "string|object",
                "start-week-on": "string|number",
                "locale": "string|object",
                "inline": "boolean",
                "range": "boolean",
                "multiple": "boolean",
                "week-numbers": "boolean",
                "disabled-dates": "array",
                "highlighted-dates": "array",
                "time": "boolean",
                "time-format": "string",
                "time-interval": "number",
                "time-disabled": "array",
                "time-min": "string",
                "time-max": "string",
                "placeholder": "string|object"
            }
        },
        "dates": {
            tag: "DatesElement",
            docs: "https://vueform.com/reference/dates-element",
            props: {
                "values": "array",
                "format": "string",
                "display-format": "string",
                "min-date": "string|object",
                "max-date": "string|object",
                "start-week-on": "string|number",
                "locale": "string|object",
                "inline": "boolean",
                "range": "boolean",
                "multiple": "boolean",
                "week-numbers": "boolean",
                "disabled-dates": "array",
                "highlighted-dates": "array",
                "time": "boolean",
                "time-format": "string",
                "time-interval": "number",
                "time-disabled": "array",
                "time-min": "string",
                "time-max": "string",
                "placeholder": "string|object"
            }
        },
        "slider": {
            tag: "SliderElement",
            docs: "https://vueform.com/reference/slider-element",
            props: {
                "value": "number|array",
                "min": "number",
                "max": "number",
                "step": "number",
                "format": "function",
                "tooltip": "boolean",
                "tooltip-format": "function",
                "range": "boolean",
                "vertical": "boolean",
                "ticks": "boolean",
                "ticks-values": "array",
                "ticks-labels": "array",
                "ticks-tooltip": "boolean",
                "ticks-tooltip-format": "function",
                "snap-to-ticks": "boolean",
                "track": "boolean",
                "track-style": "object",
                "track-class": "string",
                "disabled": "boolean",
                "placeholder": "string|object"
            }
        },
        "file": {
            tag: "FileElement",
            docs: "https://vueform.com/reference/file-element",
            props: {
                "value": "array|object",
                "endpoint": "string|function|promise",
                "method": "string",
                "accept": "string|array",
                "multiple": "boolean",
                "max-files": "number",
                "max-size": "number",
                "auto-upload": "boolean",
                "chunk-size": "number",
                "headers": "object|function",
                "params": "object|function",
                "response-parse": "function",
                "response-file-url": "string|function",
                "response-error": "function",
                "disabled": "boolean",
                "loading": "boolean",
                "placeholder": "string|object"
            }
        },
        "multifile": {
            tag: "MultiFileElement",
            docs: "https://vueform.com/reference/multifile-element",
            props: {
                "value": "array",
                "endpoint": "string|function|promise",
                "method": "string",
                "accept": "string|array",
                "multiple": "boolean",
                "max-files": "number",
                "max-size": "number",
                "auto-upload": "boolean",
                "chunk-size": "number",
                "headers": "object|function",
                "params": "object|function",
                "response-parse": "function",
                "response-file-url": "string|function",
                "response-error": "function",
                "disabled": "boolean",
                "loading": "boolean",
                "placeholder": "string|object"
            }
        },
        "location": {
            tag: "LocationElement",
            docs: "https://vueform.com/reference/location-element",
            props: {
                "value": "object",
                "provider": "string|function",
                "provider-options": "object",
                "search-options": "object",
                "marker-options": "object",
                "map-options": "object",
                "autocomplete": "boolean",
                "loading": "boolean",
                "placeholder": "string|object",
                "disabled": "boolean",
                "readonly": "boolean",
                "geolocation": "boolean",
                "geolocation-options": "object",
                "center": "object|array",
                "zoom": "number",
                "bounds": "object",
                "height": "string",
                "width": "string",
                "language": "string",
                "regions": "array",
                "types": "array",
                "enable-geocoding": "boolean"
            }
        },
        "group": {
            tag: "GroupElement",
            docs: "https://vueform.com/reference/group-element",
            props: {
                "name": "string",
                "label": "string|object|function",
                "description": "string|object",
                "inline": "boolean",
                "columns": "object|string|number",
                "collapsible": "boolean",
                "collapsed": "boolean",
                "collapsible-icon": "string|object|boolean",
                "collapsible-toggle-position": "string",
                "collapsible-toggle-alignment": "string",
                "slots": "object",
                "add-classes": "object|function",
                "add-class": "array|object|string|function",
                "remove-classes": "object|function",
                "remove-class": "array|object|function",
                "replace-classes": "object|function",
                "replace-class": "object|function",
                "override-classes": "object|function",
                "override-class": "object|function"
            }
        },
        "object": {
            tag: "ObjectElement",
            docs: "https://vueform.com/reference/object-element",
            props: {
                "name": "string",
                "label": "string|object|function",
                "description": "string|object",
                "inline": "boolean",
                "columns": "object|string|number",
                "collapsible": "boolean",
                "collapsed": "boolean",
                "collapsible-icon": "string|object|boolean",
                "collapsible-toggle-position": "string",
                "collapsible-toggle-alignment": "string",
                "value": "object",
                "slots": "object",
                "add-classes": "object|function",
                "add-class": "array|object|string|function",
                "remove-classes": "object|function",
                "remove-class": "array|object|function",
                "replace-classes": "object|function",
                "replace-class": "object|function",
                "override-classes": "object|function",
                "override-class": "object|function"
            }
        },
        "list": {
            tag: "ListElement",
            docs: "https://vueform.com/reference/list-element",
            props: {
                "name": "string",
                "label": "string|object|function",
                "description": "string|object",
                "inline": "boolean",
                "columns": "object|string|number",
                "collapsible": "boolean",
                "collapsed": "boolean",
                "collapsible-icon": "string|object|boolean",
                "collapsible-toggle-position": "string",
                "collapsible-toggle-alignment": "string",
                "items": "array|object|function",
                "item-label-prop": "string",
                "item-value-prop": "string",
                "sortable": "boolean",
                "removable": "boolean",
                "addable": "boolean",
                "value": "array",
                "slots": "object",
                "add-classes": "object|function",
                "add-class": "array|object|string|function",
                "remove-classes": "object|function",
                "remove-class": "array|object|function",
                "replace-classes": "object|function",
                "replace-class": "object|function",
                "override-classes": "object|function",
                "override-class": "object|function"
            }
        },
        "hidden": {
            tag: "HiddenElement",
            docs: "https://vueform.com/reference/hidden-element",
            props: {
                "name": "string",
                "value": "string|number|boolean|object|array",
                "id": "string"
            }
        },
        "captcha": {
            tag: "CaptchaElement",
            docs: "https://vueform.com/reference/captcha-element",
            props: {
                "sitekey": "string",
                "theme": "string",
                "size": "string",
                "tabindex": "number",
                "callback": "function",
                "expiredCallback": "function",
                "errorCallback": "function"
            }
        },
        "signature": {
            tag: "SignatureElement",
            docs: "https://vueform.com/reference/signature-element",
            props: {
                "background-color": "string",
                "pen-color": "string",
                "pen-width": "number",
                "height": "string|number",
                "width": "string|number",
                "save-button": "boolean",
                "clear-button": "boolean",
                "save-button-label": "string|object",
                "clear-button-label": "string|object"
            }
        },
        "generic": {
            tag: "GenericElement",
            docs: "https://vueform.com/reference/generic-element",
            props: {
                tag: "string",
                text: "string|object|function",
                html: "string|object|function",
                classes: "string|array|object",
                attrs: "object"
            }
        }
    }

    public override genericAttrs = {
        id: "string",
        name: "string",
        maxlength: "number",
        addons: "object",
        label: "string|object|function",
        readonly: "boolean|function|array|object",
        disabled: "boolean|function|array|object",
        attrs: "object",
        floating: "string|boolean|object",
        info: "string|object",
        infoPosition: "string",
        description: "string|object", 
        before: "object|string|number",
        between: "object|string|number",
        after: "object|string|number",
        default: "string|number|object",
        formatData: "function",
        formatLoad: "function",
        submit: "boolean",     
        rules: "array|string|object",
        fieldName: "string",
        debounce: "number",
        messages: "object",
        displayErrors: "boolean",
        conditions: "array",
        columns: "object|string|number",
        inline: "boolean",
        size: "string",
        view: "string",
        views: "object",
        addClasses: "object|function",
        addClass: "array|object|string|function",
        removeClasses: "object|function",
        removeClass: "array|object|function",
        replaceClasses: "object|function",
        replaceClass: "object|function",
        overrideClasses: "object|function",
        overrideClass: "object|function",
        templates: "object",
        presets: "array",
        slots: "object"
    }

    public parser(components: Record<string, ViewElement>, tabs? :Array<ViewTab>): string {
        let vueTemplate = `<!-- Generated automatically by CMMV -->

<template>\n    <Vueform ref="form$">\n`;
        let spaces = "        "

        if(tabs && tabs.length > 0){
            spaces = "                "
            vueTemplate += `        <template #empty>\n            <FormTabs>\n`

            for(const tab of tabs){
                vueTemplate += `                <FormTab
                    name="${tab.name}"
                    label="${tab.label}"
                    :elements="['${tab.elements.join('\',\'')}']"
                />\n`
            }

            vueTemplate += `            </FormTabs>\n`
            vueTemplate += `            <FormElements>\n`
        }

        for (const [key, component] of Object.entries(components)) {
            const schemaComponent = this.components[component.type];

            if (!schemaComponent) 
                throw new Error(`Component type "${component.type}" not found in schema.`);
            
            const { tag, props } = schemaComponent;
            vueTemplate += `${spaces}<${tag} name="${key}" `;   

            for (const [propKey, propValue] of Object.entries(component.props)) {
                if(propKey === "name")      
                    throw new Error(`Prop "name" property must not be set to prop.`);
                
                if (props && props[propKey]) {
                    this.validateProp(propKey, propValue, props[propKey]);
                }
                else if (this.genericAttrs && this.genericAttrs[propKey]) {
                    this.validateProp(propKey, propValue, this.genericAttrs[propKey]);
                }
                else {
                    throw new Error(`Prop "${propKey}" is not valid for component type "${component.type}".`);
                }

                if (typeof propValue === "string") {
                    const i18nMatch = propValue.match(/^\$i18n\.(\w+)\|(.+)/);

                    if (i18nMatch) {
                        const [, key, defaultValue] = i18nMatch;
                        vueTemplate += `:placeholder="$t('${key}', '${defaultValue}')" `;
                    } else {
                        vueTemplate += `${propKey}="${propValue}" `;
                    }
                } 
                else if (typeof propValue === "object") {
                    vueTemplate += `:${propKey}="${JSON.stringify(propValue).replace(/"/g, "'")}" `;
                }
                else if (typeof propValue === "number" || typeof propValue === "boolean") {
                    vueTemplate += `:${propKey}="${propValue}" `;
                }
                else {
                    vueTemplate += `${propKey}="${propValue}" `;
                }             
            }

            vueTemplate += `></${tag}>\n`;
        }

        if(tabs && tabs.length > 0)
            vueTemplate += `            </FormElements>\n        </template>\n`
        
        vueTemplate += `    </Vueform>\n 
    <div class="flex-grow flex justify-center items-center">        
        <div class="text-zinc-50">
            <pre>{{ form$?.data }}</pre>
        </div>
    </div>
</template>\n\n`;

        vueTemplate += `<style scoped>\n/* Add your styles here */\n</style>\n\n`;

        vueTemplate += `<script setup>
import { ref, onMounted } from 'vue';
const form$ = ref(null);

onMounted(async () => {

});
</script>`;

        return vueTemplate;
    }
}