import React, { useContext } from 'react';
import classNames from 'classnames';
import { InputSizes } from './index';
import { BaseProps } from '../_utils/props';
import { ConfigContext } from '../config-provider/config-context';
import { getPrefixCls } from '../_utils/general';

export interface InputGroupAddonProps
  extends BaseProps,
    React.PropsWithoutRef<JSX.IntrinsicElements['div']> {
  noBorder: boolean;
  disabled?: boolean;
  size?: InputSizes;
  children: React.ReactElement;
}

const InputGroupAddon = (props: InputGroupAddonProps): React.ReactElement => {
  const {
    disabled = false,
    size = 'md',
    noBorder,
    className,
    style,
    children,
    prefixCls: customisedCls,
    ...otherProps
  } = props;
  const configContext = useContext(ConfigContext);
  const prefixCls = getPrefixCls('input-group-addon', configContext.prefixCls, customisedCls);
  const cls = classNames(prefixCls, className, `${prefixCls}_${size}`, {
    [`${prefixCls}_no-border`]: noBorder,
  });

  if (React.isValidElement(children)) {
    return (
      <div className={cls} style={style}>
        {React.Children.map(children, (child: React.ReactElement) => {
          const childProps = {
            ...child.props,
            size,
            disabled,
          };
          return React.cloneElement(child, childProps);
        })}
      </div>
    );
  }
  return (
    <div {...otherProps} className={cls} style={style}>
      {children}
    </div>
  );
};

InputGroupAddon.displayName = 'InputGroupAddon';

export default InputGroupAddon;
