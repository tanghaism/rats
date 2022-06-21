import { PageHeader, Result } from 'antd';
import { useContext } from 'react';

import { usePermission } from '../permission';
import { I18nContext } from '../utils/context';
import type { IProps } from './index.d';

const RatsPage = ({
  showPageHeader,
  desc,
  title,
  hasPermission,
  permission,
  permissionType = 'all',
  breadcrumb,
  children,
}: IProps) => {
  const i18nContext = useContext<{ message: Record<string, string> }>(I18nContext);

  return (
    <>
      {(permission && usePermission(permission, permissionType)) || hasPermission ? (
        <div>
          {showPageHeader && (
            <div className="rats-page-breadcrumb-wrap">
              <PageHeader title={title} ghost={false} breadcrumb={breadcrumb}>
                {desc}
              </PageHeader>
            </div>
          )}
          <div className="rats-page-wrap">{children}</div>
        </div>
      ) : (
        <Result
          status="403"
          title="403"
          className="rats-error"
          subTitle={i18nContext.message?.noPermission}
        />
      )}
    </>
  );
};

export default RatsPage;
