import { CoreSettings } from './core';
import { HTMLAdapterSettings } from './dom/document';
export declare type Settings = HTMLAdapterSettings & CoreSettings<HTMLElement>;
export declare const DEFAULT_SETTINGS: Settings;
