import { Adapter } from '../core';
export declare const CLASS_CONTENT = "littlefoot-footnote__content";
export declare const CLASS_WRAPPER = "littlefoot-footnote__wrapper";
export declare type HTMLAdapterSettings = Readonly<{
    allowDuplicates: boolean;
    anchorParentSelector: string;
    anchorPattern: RegExp;
    buttonTemplate: string;
    contentTemplate: string;
    footnoteSelector: string;
    numberResetSelector: string;
    scope: string;
}>;
export declare function setup(settings: HTMLAdapterSettings): Adapter<HTMLElement>;
