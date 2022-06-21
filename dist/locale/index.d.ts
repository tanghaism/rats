export declare type Lang = 'zh-cn' | 'en' | 'ja' | string;
export interface IGlobalLocal {
    message: any;
}
export interface ILocale {
    locale: Lang;
    [props: string]: any;
}
export declare const langMap: any;
export declare function useI18n(lang: Lang): {
    message: any;
};
export declare function getI18nText(globalRatsLocale: IGlobalLocal, key: string, value?: {
    [props: string]: string | number;
}): any;
