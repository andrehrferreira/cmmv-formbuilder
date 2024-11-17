import * as fs from 'node:fs';
import * as path from 'node:path';

import { 
    ViewElement, ViewTab,
    ParsedContract 
} from "../interfaces";

export abstract class ViewSchema {
    public name: string = "";
    public ext: string = "";
    public imports: Array<string> = [];

    public components: Record<
        string,
        {
            tag: string;
            docs?: string;
            props?: Record<string, string>;
        }
    > = {}

    public genericAttrs: Record<string, string>;

    public parser(
        contract: ParsedContract,
        components: Record<string, ViewElement>, 
        tabs? :Array<ViewTab>
    ){ }   

    public generateOutput(outputPath: string, vueTemplate: string): void {
        if(!fs.existsSync(path.dirname(outputPath)))
            fs.mkdirSync(path.dirname(outputPath), { recursive: true });
        //if(!fs.existsSync(outputPath))
        fs.writeFileSync(outputPath, vueTemplate, 'utf-8');
    }

    public validateProp(propKey: string, propValue: any, expectedType: string): boolean {
        const typeCheckers: Record<string, (value: any) => boolean> = {
            string: (value) => typeof value === "string",
            number: (value) => typeof value === "number",
            boolean: (value) => typeof value === "boolean",
            object: (value) => typeof value === "object" && value !== null && !Array.isArray(value),
            array: (value) => Array.isArray(value),
            function: (value) => typeof value === "function",
        };
    
        const types = expectedType.split("|");

        for (const type of types) {
            if (typeCheckers[type.trim()]?.(propValue)) 
                return true;
        }
    
        throw new Error(`Invalid type for prop "${propKey}". Expected "${expectedType}", but received "${typeof propValue}".`);
    }
}