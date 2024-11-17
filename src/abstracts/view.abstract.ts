import { IAbstractView, ViewTab } from "../interfaces";

export abstract class AbstractView implements IAbstractView {
    public components = {};
    public tabs?: Array<ViewTab>;
}