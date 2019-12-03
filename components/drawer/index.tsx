import React, { useEffect, useState } from 'react';
import classNames from 'classnames';
import { BaseProps } from '../_utils/props';
import Overlay from '../overlay';

export type DrawerPlacement = 'top' | 'bottom' | 'left' | 'right';

export interface DrawerProps extends BaseProps {
  closable?: boolean;
  onClose?: () => void;
  placement?: DrawerPlacement;
  zIndex?: number;
  size?: number | string;
  visible?: boolean;
  defaultVisible?: boolean;
  keyboard?: boolean;
  children?: React.ReactNode;
}

const Drawer = (props: DrawerProps): React.ReactElement => {
  const { defaultVisible = true, prefixCls = 'ty-drawer', className, style, children } = props;
  const [visible, setVisible] = useState('visible' in props ? props.visible : defaultVisible);
  const cls = classNames(prefixCls, className);

  useEffect(() => {
    console.log(setVisible);
  }, []);

  return (
    <Overlay isShow={visible}>
      <div className={cls} style={style}>
        {children}
      </div>
    </Overlay>
  );
};

export default Drawer;
