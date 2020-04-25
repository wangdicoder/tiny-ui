import React, { useContext, useState } from 'react';
import classNames from 'classnames';
import { BaseProps } from '../_utils/props';
import { MenuContext } from './menu-context';
import { MenuItemProps } from './menu-item';

export interface SubMenuProps
  extends BaseProps,
    Omit<React.PropsWithoutRef<JSX.IntrinsicElements['li']>, 'title'> {
  title: React.ReactNode;
  index?: string;
  children?: React.ReactNode;
}

const SubMenu = (props: SubMenuProps): React.ReactElement => {
  const { prefixCls = 'ty-menu-sub', index, title, className, children } = props;
  const context = useContext(MenuContext);
  const { mode } = context;
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const cls = classNames('ty-menu-item', prefixCls, className, {
    [`${prefixCls}_active`]: index ? context.index.startsWith(index) : false,
  });
  const subMenuCls = classNames(`${prefixCls}__list`, {
    [`${prefixCls}__list_open`]: menuOpen,
  });
  const arrowCls = classNames(`${prefixCls}__arrow`, {
    [`${prefixCls}__arrow_reverse`]: menuOpen,
  });

  const handleOnClick = (e: React.MouseEvent): void => {
    e.preventDefault();
    mode === 'vertical' && setMenuOpen(!menuOpen);
  };

  let timer: ReturnType<typeof setTimeout>;
  const handleMouse = (e: React.MouseEvent, toggle: boolean): void => {
    e.preventDefault();
    clearTimeout(timer);
    timer = setTimeout(() => {
      setMenuOpen(toggle);
    }, 200);
  };

  const handleOnMouseEnter = (e: React.MouseEvent): void => {
    mode === 'horizontal' && handleMouse(e, true);
  };

  const handleOnMouseLeave = (e: React.MouseEvent): void => {
    mode === 'horizontal' && handleMouse(e, false);
  };

  return (
    <li
      role="menuitem"
      key={index}
      className={cls}
      onMouseEnter={handleOnMouseEnter}
      onMouseLeave={handleOnMouseLeave}>
      <div className={`${prefixCls}__title`} onClick={handleOnClick}>
        <span>{title}</span>
        <span className={arrowCls} />
      </div>
      <ul className={subMenuCls}>
        {React.Children.map(children, (child, idx) => {
          const childElement = child as React.FunctionComponentElement<MenuItemProps>;
          if (
            childElement.type.displayName === 'MenuItem' ||
            childElement.type.displayName === 'MenuItemGroup'
          ) {
            const childProps = {
              ...childElement.props,
              index: `${index}-${idx}`,
            };
            return React.cloneElement(childElement, childProps);
          } else {
            console.warn('Menu has a child that is not a MenuItem component.');
            return null;
          }
        })}
      </ul>
    </li>
  );
};

SubMenu.displayName = 'SubMenu';

export default SubMenu;
