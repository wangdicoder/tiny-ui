import React, { ReactNode, CSSProperties } from 'react';
import classNames from 'classnames';
import { BaseProps } from '../_utils/props';
import CardContent, { CardContentProps } from './card-content';

export interface CardProps extends BaseProps {
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

const Card: React.FC<CardProps> & { Content?: any } = (props: CardProps) => {
  const {
    prefixCls = 'ty-card',
    bordered = true,
    active = false,
    hoverable = false,
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
      return React.Children.map(children, child => {
        if (!React.isValidElement(child)) {
          return child;
        }

        // Pass prefixCls attribute to child if it is a CardContent instance
        if (child.type === CardContent) {
          return React.cloneElement(child, { prefixCls });
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

export default Card;
