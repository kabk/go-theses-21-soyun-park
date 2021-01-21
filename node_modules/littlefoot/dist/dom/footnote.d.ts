import { Footnote } from '../core';
export declare type FootnoteElements = Readonly<{
    id: string;
    host: HTMLElement;
    button: HTMLElement;
    popover: HTMLElement;
    content: HTMLElement;
    wrapper: HTMLElement;
}>;
export declare function createFootnote({ id, button, content, host, popover, wrapper, }: FootnoteElements): Footnote<HTMLElement>;
