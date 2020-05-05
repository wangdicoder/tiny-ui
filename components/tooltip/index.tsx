import React from 'react';
import classNames from 'classnames';
import Popup, { PopupProps } from '../popup';

export interface TooltipProps extends Omit<PopupProps, 'title' | 'content'> {
  title?: React.ReactNode;
}

const Tooltip = (props: TooltipProps): React.ReactElement => {
  const {
    prefixCls = 'ty-tooltip',
    trigger = 'hover',
    title,
    className,
    children,
    ...otherProps
  } = props;
  const cls = classNames(prefixCls, className);

  const renderContent = (): React.ReactElement => (
    <div role="tooltip" className={`${prefixCls}__inner`}>
      {title}
    </div>
  );

  return (
    <Popup {...otherProps} className={cls} theme="dark" trigger={trigger} content={renderContent()}>
      {children}
    </Popup>
  );
};

export default Tooltip;
