import React, { ReactNode, CSSProperties, useContext } from 'react';
import classNames from 'classnames';
import { BaseProps } from '../_utils/props';
import { CardContentProps } from './card-content';
import { ConfigContext } from '../config-provider/config-context';
import { getPrefixCls } from '../_utils/general';

export interface CardProps
  extends BaseProps,
    Omit<React.PropsWithoutRef<JSX.IntrinsicElements['div']>, 'title'> {
  title?: ReactNode;
  extra?: ReactNode;
  hoverable?: boolean;
  active?: boolean;
  bordered?: boolean;
  actions?: ReactNode[];
  header?: ReactNode;
  footer?: ReactNode;
  headerStyle?: CSSProperties;
  bodyStyle?: CSSProperties;
  footerStyle?: CSSProperties;
  children?: ReactNode | React.ReactElement<CardContentProps>;
}

const Card = (props: CardProps): JSX.Element => {
  const {
    bordered = true,
    active = false,
    hoverable = false,
    prefixCls: customisedCls,
    title,
    extra,
    header,
    headerStyle,
    actions,
    footer,
    footerStyle,
    className,
    style,
    children,
  } = props;
  const configContext = useContext(ConfigContext);
  const prefixCls = getPrefixCls('card', configContext.prefixCls, customisedCls);
  const cls = classNames(prefixCls, className, {
    [`${prefixCls}_bordered`]: bordered,
    [`${prefixCls}_active`]: active,
    [`${prefixCls}_hoverable`]: hoverable,
  });

  const renderHeader = (): ReactNode => {
    if (header) {
      return header;
    } else if (title || extra) {
      return (
        <div className={`${prefixCls}__header`} style={headerStyle}>
          {title}
          {extra}
        </div>
      );
    } else {
      return null;
    }
  };

  const renderFooter = (): ReactNode => {
    if (footer) {
      return footer;
    } else if (actions) {
      return (
        <div className={`${prefixCls}__footer`} style={footerStyle}>
          {actions}
        </div>
      );
    } else {
      return null;
    }
  };

  const renderChildren = (): ReactNode => {
    if (children) {
      return React.Children.map(children, (child) => {
        if (!React.isValidElement(child)) {
          return child;
        }

        // Pass prefixCls attribute to child if it is a CardContent instance
        const childElement = child as React.FunctionComponentElement<CardContentProps>;
        if (childElement.type.displayName === 'CardContent') {
          const childProps = {
            ...childElement.props,
            prefixCls,
          };
          return React.cloneElement(childElement, childProps);
        } else {
          return child;
        }
      });
    }
    return null;
  };

  return (
    <div className={cls} style={style}>
      {renderHeader()}
      {renderChildren()}
      {renderFooter()}
    </div>
  );
};

Card.displayName = 'Card';

export default Card;
