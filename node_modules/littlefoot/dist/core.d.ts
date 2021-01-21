interface ActionCallback<T> {
    (popover: T, button: T): void;
}
export declare type CoreSettings<T> = Readonly<{
    activateCallback?: ActionCallback<T>;
    activateDelay: number;
    activateOnHover: boolean;
    allowMultiple: boolean;
    dismissCallback?: ActionCallback<T>;
    dismissDelay: number;
    dismissOnUnhover: boolean;
    hoverDelay: number;
}>;
export declare type Footnote<T> = Readonly<{
    id: string;
    activate: (onActivate?: ActionCallback<T>) => void;
    destroy: () => void;
    dismiss: (onDeactivate?: ActionCallback<T>) => void;
    isActive: () => boolean;
    isHovered: () => boolean;
    isReady: () => boolean;
    ready: () => void;
    remove: () => void;
    reposition: () => void;
    resize: () => void;
    startHovering: () => void;
    stopHovering: () => void;
}>;
export declare type FootnoteAction = (id: string) => void;
declare type DelayedFootnoteAction = (id: string, delay: number) => void;
export declare type Core = Readonly<{
    activate: DelayedFootnoteAction;
    dismiss: DelayedFootnoteAction;
    dismissAll: () => void;
    hover: FootnoteAction;
    repositionAll: () => void;
    resizeAll: () => void;
    toggle: FootnoteAction;
    unhover: FootnoteAction;
    unmount: () => void;
}>;
export interface Adapter<T> {
    readonly footnotes: readonly Footnote<T>[];
    readonly unmount: () => void;
}
export declare function createCore<T>({ footnotes, unmount }: Adapter<T>, settings: CoreSettings<T>): Core;
export {};
