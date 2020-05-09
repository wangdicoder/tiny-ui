import React, { useContext, useState } from 'react';
import classNames from 'classnames';
import { BaseProps } from '../_utils/props';
import { MenuContext } from './menu-context';
import { MenuItemProps } from './menu-item';
import { ConfigContext } from '../config-provider/config-context';
import { getPrefixCls } from '../_utils/general';

export type MenuMode = 'horizontal' | 'vertical';

export interface MenuProps
  extends BaseProps,
    Omit<React.PropsWithoutRef<JSX.IntrinsicElements['ul']>, 'onSelect'> {
  defaultIndex?: string;
  mode?: MenuMode;
  onSelect?: (selectedIndex: string) => void;
  children?: React.ReactNode;
}

const Menu = (props: MenuProps): React.ReactElement => {
  const {
    defaultIndex = '0',
    mode = 'horizontal',
    onSelect,
    className,
    style,
    children,
    prefixCls: customisedCls,
    ...otherProps
  } = props;
  const configContext = useContext(ConfigContext);
  const prefixCls = getPrefixCls('menu', configContext.prefixCls, customisedCls);
  const cls = classNames(prefixCls, className, {
    [`${prefixCls}_${mode}`]: mode,
  });
  const [activeIndex, setActiveIndex] = useState<string>(defaultIndex);
  const contextValue = {
    mode,
    index: activeIndex,
    onSelect: (index: string): void => {
      setActiveIndex(index);
      onSelect && onSelect(index);
    },
  };

  return (
    <ul {...otherProps} role="menu" className={cls} style={style}>
      <MenuContext.Provider value={contextValue}>
        {React.Children.map(children, (child, index) => {
          const childElement = child as React.FunctionComponentElement<MenuItemProps>;
          const { displayName } = childElement.type;
          if (displayName === 'MenuItem' || displayName === 'SubMenu') {
            const childProps = {
              ...childElement.props,
              index: `${index}`,
            };
            return React.cloneElement(childElement, childProps);
          } else {
            console.warn('Menu has a child that is not a MenuItem component.');
            return null;
          }
        })}
      </MenuContext.Provider>
    </ul>
  );
};

Menu.displayName = 'Menu';

export default Menu;
