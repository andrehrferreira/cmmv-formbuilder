export interface IAbstractView {
    components: { 
        [key: string]: ViewElement; 
    };
}

export interface ViewElement {
    type: string,
    props: {
        [key: string]: any
    }
}

export interface ViewTab {
    name: string,
    label: string,
    elements: Array<string>
}