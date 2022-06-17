import type { ConfigProviderProps } from 'antd/lib/config-provider/index.d';

export interface IProps extends ConfigProviderProps {
  permissionMap: Record<string, number | boolean>
}
