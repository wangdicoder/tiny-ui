import React, { useContext } from 'react';
import classNames from 'classnames';
import Popup, { PopupProps, Placement } from '../popup';
import { ConfigContext } from '../config-provider/config-context';
import { getPrefixCls } from '../_utils/general';

export interface TooltipProps extends Omit<PopupProps, 'title' | 'content'> {
  title?: React.ReactNode;
}

const Tooltip = (props: TooltipProps): React.ReactElement => {
  const {
    trigger = 'hover',
    prefixCls: customisedCls,
    title,
    className,
    children,
    ...otherProps
  } = props;
  const configContext = useContext(ConfigContext);
  const prefixCls = getPrefixCls('tooltip', configContext.prefixCls, customisedCls);
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

Tooltip.displayName = 'Tooltip';

export { Placement };
export default Tooltip;
