import React from 'react';
import classNames from 'classnames';
import Popup, { PopupProps } from '../popup';

export interface PopoverProps extends Omit<PopupProps, 'title'> {
  role?: string;
  title?: React.ReactNode;
  children: React.ReactElement;
}

const Popover = (props: PopoverProps): JSX.Element => {
  const {
    prefixCls = 'ty-popover',
    theme = 'light',
    role = 'tooltip',
    title,
    content,
    className,
    children,
    ...otherProps
  } = props;
  const cls = classNames(className, prefixCls, `${prefixCls}_${theme}`);

  const renderContent = (): React.ReactElement => (
    <div role={role} className={`${prefixCls}__inner`}>
      {title && <div className={`${prefixCls}__title`}>{title}</div>}
      {content && <div className={`${prefixCls}__content`}>{content}</div>}
    </div>
  );

  return (
    <Popup {...otherProps} className={cls} theme={theme} content={renderContent()}>
      {children}
    </Popup>
  );
};

export default Popover;
