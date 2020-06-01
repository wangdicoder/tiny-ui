import React, { useContext } from 'react';
import classNames from 'classnames';
import { ConfigContext } from '../config-provider/config-context';
import { getPrefixCls } from '../_utils/general';
import { InputGroupAddonProps, InputProps } from './types';
import { SizeType } from '../_utils/props';

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
  const inputSize = props.size || configContext.componentSize || size;
  const cls = classNames(prefixCls, className, `${prefixCls}_${inputSize}`, {
    [`${prefixCls}_no-border`]: noBorder,
  });

  if (React.isValidElement(children)) {
    return (
      <div className={cls} style={style}>
        {React.Children.map(children, (child: React.ReactElement) => {
          const childProps: Partial<InputProps> = {
            disabled,
            size: inputSize as SizeType,
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
