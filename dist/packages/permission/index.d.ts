/// <reference types="react" />
import type { IProps, type } from './index.d';
export declare function usePermission(permission: string | string[], type?: type): boolean;
declare const RatsPermission: ({ permission, type, children }: IProps) => JSX.Element | null;
export default RatsPermission;
