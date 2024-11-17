import { IAbstractView, ViewTab } from "../interfaces";

export abstract class AbstractForm implements IAbstractView {
    public components = {};
    public tabs?: Array<ViewTab>;
}