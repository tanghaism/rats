import type { PageHeaderProps } from 'antd';
import type { ReactNode } from 'react';

export interface IProps extends PageHeaderProps {
  showPageHeader?: boolean;
  desc?: ReactNode;
  hasPermission?: boolean;
  permission?: string;
  permissionType?: 'all' | 'in';
  children?: ReactNode;
}
