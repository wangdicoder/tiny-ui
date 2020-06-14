import React, { useContext, useState } from 'react';
import classNames from 'classnames';
import { MenuContext } from './menu-context';
import { ConfigContext } from '../config-provider/config-context';
import { getPrefixCls } from '../_utils/general';
import { MenuItemProps, MenuProps } from './types';

const Menu = (props: MenuProps): JSX.Element => {
  const {
    defaultIndex = '0',
    mode = 'horizontal',
    theme = 'light',
    onSelect,
    className,
    style,
    children,
    prefixCls: customisedCls,
    ...otherProps
  } = props;
  const configContext = useContext(ConfigContext);
  const prefixCls = getPrefixCls('menu', configContext.prefixCls, customisedCls);
  const cls = classNames(
    prefixCls,
    className,
    `${prefixCls}_root`,
    `${prefixCls}_${theme}`,
    `${prefixCls}_${mode}`
  );
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
          if (
            displayName === 'MenuItem' ||
            displayName === 'SubMenu' ||
            (displayName === 'MenuDivider' && mode !== 'horizontal')
          ) {
            const childProps: Partial<MenuItemProps> = {
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
