import React, { useContext, useState, useRef } from 'react';
import classNames from 'classnames';
import { MenuContext } from './menu-context';
import { ArrowDown } from '../_utils/components';
import { ConfigContext } from '../config-provider/config-context';
import { getPrefixCls } from '../_utils/general';
import { MenuItemProps, SubMenuProps } from './types';
import Popup from '../popup';
import CollapseTransition from '../collapse-transition';

const SubMenu = (props: SubMenuProps): JSX.Element => {
  const { index, title, className, children, prefixCls: customisedCls, ...otherProps } = props;
  const context = useContext(MenuContext);
  const { mode } = context;
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const configContext = useContext(ConfigContext);
  const prefixCls = getPrefixCls('menu-sub', configContext.prefixCls, customisedCls);
  const cls = classNames('ty-menu-item', prefixCls, className, {
    [`${prefixCls}_active`]: index ? context.index.startsWith(index) : false,
  });
  const subMenuCls = classNames(`${prefixCls}__list`, {
    [`${prefixCls}__list_open`]: menuOpen,
  });
  const nonRootSubMenu = index?.includes('-');
  const rightPopupMenu = mode === 'vertical' || (mode === 'horizontal' && nonRootSubMenu);
  const arrowCls = rightPopupMenu
    ? `${prefixCls}__arrow ${prefixCls}__arrow_right`
    : classNames(`${prefixCls}__arrow`, {
        [`${prefixCls}__arrow_reverse`]: menuOpen,
      });
  const titleCls = classNames(`${prefixCls}__title`, {
    [`${prefixCls}__title_popup`]: nonRootSubMenu,
  });

  const handleOnClick = (e: React.MouseEvent): void => {
    e.preventDefault();
    mode === 'inline' && setMenuOpen(!menuOpen);
  };

  const timerRef = useRef<number | null>(null);
  const handleMouse = (e: React.MouseEvent, toggle: boolean): void => {
    e.preventDefault();
    const timer = timerRef.current;
    timer && window.clearTimeout(timer);
    timerRef.current = window.setTimeout(() => {
      setMenuOpen(toggle);
    }, 200);
  };

  const handleOnMouseEnter = (e: React.MouseEvent): void => {
    mode !== 'inline' && handleMouse(e, true);
  };

  const handleOnMouseLeave = (e: React.MouseEvent): void => {
    mode !== 'inline' && handleMouse(e, false);
  };

  const renderChildrenList = () => (
    <ul className={subMenuCls}>
      {React.Children.map(children, (child, idx) => {
        const childElement = child as React.FunctionComponentElement<MenuItemProps>;
        const { displayName } = childElement.type;
        const childProps: Partial<MenuItemProps> = {
          index: `${index}-${idx}`,
        };
        if (
          displayName === 'MenuItem' ||
          displayName === 'MenuItemGroup' ||
          displayName === 'MenuDivider'
        ) {
          return React.cloneElement(childElement, childProps);
        } else if (displayName === 'SubMenu') {
          return (
            <SubMenu
              {...childElement.props}
              title={childElement.props.title}
              index={`${index}-${idx}`}
            />
          );
        } else {
          console.warn('Menu has a child that is not a MenuItem component.');
          return null;
        }
      })}
    </ul>
  );

  if (mode === 'inline') {
    return (
      <li {...otherProps} role="menuitem" key={index} className={cls}>
        <div className={`${prefixCls}__title`} onClick={handleOnClick}>
          <span>{title}</span>
          <span className={arrowCls}>
            <ArrowDown size={10} />
          </span>
        </div>
        <CollapseTransition isShow={menuOpen}>{renderChildrenList()}</CollapseTransition>
      </li>
    );
  } else {
    return (
      <li
        {...otherProps}
        role="menuitem"
        key={index}
        className={cls}
        onMouseEnter={handleOnMouseEnter}
        onMouseLeave={handleOnMouseLeave}>
        <Popup
          flip={false}
          arrow={false}
          trigger="manual"
          visible={menuOpen}
          placement={rightPopupMenu ? 'right-start' : 'bottom-start'}
          content={
            <ul className={`${prefixCls}__list ${prefixCls}__list_popup`}>
              {renderChildrenList()}
            </ul>
          }>
          <div className={titleCls} onClick={handleOnClick}>
            <span>{title}</span>
            <span className={arrowCls}>
              <ArrowDown size={10} />
            </span>
          </div>
        </Popup>
      </li>
    );
  }
};

SubMenu.displayName = 'SubMenu';

export default SubMenu;
