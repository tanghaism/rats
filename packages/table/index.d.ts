import type { TableProps } from 'antd';
import type { ReactNode } from 'react';

export interface IProps extends TableProps<Record<string, unknown>> {
  extra?: ReactNode;
  title?: ReactNode;
}
