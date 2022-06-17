import './index.scss';

import { Button } from 'antd';
import { useEffect, useState } from 'react';

import type { ButtonType, IProps } from './index.d';

function computedClass(
  type: ButtonType,
  success?: boolean,
  warning?: boolean,
  info?: boolean,
) {
  let classStr = type === 'link' ? 'rats-px-0 ' : '';
  if (success) {
    classStr += ' rats-btn-success';
  } else if (warning) {
    classStr += ' rats-btn-warning';
  } else if (info) {
    classStr += ' rats-btn-info';
  }
  return classStr;
}

const RatsButton = ({ success, warning, info, type, children, ...baseProps }: IProps) => {
  const [className, setClassName] = useState(computedClass(type, success, warning, info));

  // const ftLocale = useContext(I18nContext);
  //
  // const $t = useCallback(
  //   (key: string, value?: { [props: string]: string | number }) => {
  //     return getI18nText(ftLocale, key, value);
  //   },
  //   [ftLocale],
  // );

  useEffect(() => {
    setClassName(computedClass(type, success, warning, info));
  }, [success, warning, info, type]);

  return (
    <Button className={className} type={type} {...baseProps}>
      {children}
    </Button>
  );
};

export default RatsButton;
