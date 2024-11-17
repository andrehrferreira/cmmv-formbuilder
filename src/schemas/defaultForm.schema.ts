import { ViewSchema } from "../abstracts";

export class DefaultFormSchema extends ViewSchema {
    public override name = "default";
    public override ext = "html";
    public override components = {
        "input": {
            tag: "input"
        }
    }
}