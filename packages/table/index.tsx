import './index.scss';

import { Col, Row, Space, Table } from 'antd';

import type { IProps } from './index.d';

const RatsTableTitle = ({ title, extra }: IProps) => {
  return (
    <Row align="middle" className="vats-wrap">
      <Col flex={1}>{!!title && <Space>{title}</Space>}</Col>
      <Col>{!!extra && <Space>{extra}</Space>}</Col>
    </Row>
  );
};

const RatsTable = ({ children, extra, title, ...otherProps }: IProps) => {
  return (
    <Table title={() => <RatsTableTitle title={title} extra={extra} />} {...otherProps}>
      {children}
    </Table>
  );
};

export default RatsTable;
