import { useEffect, useState } from 'react';

import EN from './lang/en';
import JA from './lang/ja';
import ZH from './lang/zh';

export type Lang = 'zh-cn' | 'en' | 'ja' | string;

export interface IGlobalLocal {
  message: any;
}

export interface ILocale {
  locale: Lang;

  [props: string]: any;
}

export const langMap: any = {
  'zh-cn': ZH,
  en: EN,
  ja: JA,
};

export function useI18n(lang: Lang) {
  const [locale, setLocale] = useState({
    message: langMap[lang],
  });

  useEffect(() => {
    setLocale({
      message: langMap[lang],
    });
  }, [lang]);

  return locale;
}

export function getI18nText(
  globalRatsLocale: IGlobalLocal,
  key: string,
  value?: { [props: string]: string | number },
) {
  let message = globalRatsLocale?.message[key];
  if (message) {
    if (value) {
      const reg = /(\{).*?(\})/g;
      const keyArray = message.match(reg);
      keyArray.forEach((key: string) => {
        const realKey = key.replace(/\{|\}|\s|\n|\t/g, '');
        const reg1 = new RegExp(`${key}`, 'g');
        message = message.replace(reg1, value[realKey]);
      });
    }
    return message;
  } else {
    console.warn('未匹配到文案key');
    return key;
  }
}
