import { ConfigProvider } from 'antd';

import { useI18n } from '../../locale';
import { I18nContext, PermissionContext } from '../utils/context';
import type { IProps } from './index.d';

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
