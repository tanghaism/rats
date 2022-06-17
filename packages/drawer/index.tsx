import './index.scss';

import { type DrawerProps, Drawer } from 'antd';

const DrawerFooter = ({ footer, footerStyle }: DrawerProps) => {
  if (footer) {
    return (
      <div className="rats-drawer-footer" style={footerStyle}>
        {footer}
      </div>
    );
  }
  return null;
};

const RatsDrawer = ({
  bodyStyle,
  footer,
  footerStyle,
  width = '500px',
  children,
  ...drawerOptions
}: DrawerProps) => {
  return (
    <Drawer
      width={width}
      bodyStyle={{ ...bodyStyle, ...(footer ? { paddingBottom: '55px' } : {}) }}
      footer={<DrawerFooter footer={footer} footerStyle={footerStyle} />}
      {...drawerOptions}
    >
      {children}
    </Drawer>
  );
};

export default RatsDrawer;
