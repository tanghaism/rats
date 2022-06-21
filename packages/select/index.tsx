import { Select, SelectProps, Spin } from 'antd';
import type { ReactNode } from 'react';
import { useCallback } from 'react';

const LoadingTemplate = ({
  loading,
  notFoundContent,
}: {
  loading?: boolean;
  notFoundContent?: ReactNode;
}) => {
  if (loading) {
    return <div>{notFoundContent ?? <Spin />}</div>;
  }
  return null;
};

const RatsSelect = ({
  loading,
  notFoundContent,
  children,
  ...otherProps
}: SelectProps) => {
  const getPopupContainer = useCallback(
    (node: HTMLElement) => node?.parentNode as HTMLElement,
    [],
  );

  return (
    <Select
      notFoundContent={
        <LoadingTemplate loading={loading} notFoundContent={notFoundContent} />
      }
      getPopupContainer={getPopupContainer}
      {...otherProps}
    >
      {children}
    </Select>
  );
};

export default RatsSelect;
