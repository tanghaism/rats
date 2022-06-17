export type type = 'all' | 'in'

export interface IProps {
  permission: string | string[];
  type?: type;
  children?: React.ReactNode;
}
