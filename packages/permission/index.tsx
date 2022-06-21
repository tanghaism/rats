import { useContext } from 'react';

import { PermissionContext } from '../utils/context';
import type { IProps, type } from './index.d';

// @param permission: 需要校验的权限点，可传入单一权限或多个权限
// @param type: 权限点校验条件，仅当permission为数组时有效，如果传all，则用户必须拥有数组内的所有权限点，如果传in，用户拥有数组内某一个权限点即可
export function usePermission(
  permission: string | string[],
  type: type = 'all',
): boolean {
  const permissionMap = useContext<Record<string, number | boolean>>(PermissionContext);
  if (Array.isArray(permission)) {
    if (type === 'all') {
      return permission.every((key: string) => !!permissionMap[key]);
    } else if (type === 'in') {
      return permission.some((key: string) => !!permissionMap[key]);
    } else {
      console.warn(`【${permission}】传入的type有误，权限校验失败！`);
      return false;
    }
  } else {
    return !!permissionMap[permission];
  }
}

const RatsPermission = ({ permission, type, children }: IProps) => {
  if (usePermission(permission, type)) {
    return <>{children}</>;
  }
  return null;
};

export default RatsPermission;
