import React from 'react';
import classNames from 'classnames';
import { InputSizes } from './index';
import { BaseProps } from '../_utils/props';

export interface InputGroupAddonProps extends BaseProps {
  noBorder: boolean;
  disabled?: boolean;
  size?: InputSizes;
  children: React.ReactNode;
}

const InputGroupAddon = ({
  prefixCls = 'ty-input-group-addon',
  disabled = false,
  size = 'md',
  ...restProps
}: InputGroupAddonProps) => {
  const { noBorder, className, style, children } = restProps;
  const cls = classNames(prefixCls, className, `${prefixCls}_${size}`, {
    [`${prefixCls}_no-border`]: noBorder,
  });

  if (React.isValidElement(children)) {
    return (
      <div className={cls} style={style}>
        {React.Children.map(children, child => {
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
    <div className={cls} style={style}>
      {children}
    </div>
  );
};

export default InputGroupAddon;
