import type { ButtonProps } from 'antd';

export type ButtonType = 'primary' | 'ghost' | 'dashed' | 'link' | 'text' | 'default' | undefined;

export interface IProps extends ButtonProps {
  success?: boolean;
  warning?: boolean;
  info?: boolean;
}
