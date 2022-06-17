import { ConfigProvider } from 'antd';
import { createContext } from 'react';

import { useI18n } from '../../locale';
import type { IProps } from './index.d';

// 用户权限
export const PermissionContext = createContext({});
// rats组件国际化
export const I18nContext = createContext({
  message: {},
});

const RatsProvider = ({ permissionMap, locale, children, ...otherProps }: IProps) => {
  const ratsLocale = useI18n(locale?.locale || 'zh-cn');

  return (
    <ConfigProvider locale={locale} {...otherProps}>
      <I18nContext.Provider value={ratsLocale}>
        <PermissionContext.Provider value={permissionMap}>
          {children}
        </PermissionContext.Provider>
      </I18nContext.Provider>
    </ConfigProvider>
  );
};

export default RatsProvider;
