export declare enum FunctionalityTag {
    STANDARD = "STANDARD",
    CUSTOM = "CUSTOM",
    METHOD = "METHOD",
    RESOLVER = "RESOLVER",
    CONTROLLER = "CONTROLLER",
    MODULE = "MODULE",
    PARENT = "PARENT"
}
export declare class FunctionalityModel {
    constructor(any: any);
    name: string;
    key: string;
    description?: string;
    tags?: FunctionalityTag[];
    children?: FunctionalityModel[];
}
