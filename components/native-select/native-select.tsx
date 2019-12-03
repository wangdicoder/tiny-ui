import React from 'react';
import classNames from 'classnames';
import { BaseProps } from '../_utils/props';
import { NativeSelectGroupProps } from './group';
import { NativeSelectOptionProps } from './option';

export type NativeSelectSize = 'sm' | 'md' | 'lg';

export interface NativeSelectProps extends BaseProps {
  size?: NativeSelectSize;
  disabled?: boolean;
  children: React.ReactElement<NativeSelectGroupProps | NativeSelectOptionProps>;
}

const NativeSelect: React.FC<NativeSelectProps> & { Group?: any; Option?: any } = (
  props: NativeSelectProps
) => {
  const {
    prefixCls = 'ty-select-native',
    size = 'md',
    disabled = false,
    className,
    style,
    children,
    ...otherProps
  } = props;
  const cls = classNames(prefixCls, className, {
    [`${prefixCls}_${size}`]: size,
    [`${prefixCls}_disabled`]: disabled,
  });

  return (
    <select className={cls} style={style} {...otherProps}>
      {React.Children.map(children, (child: React.ReactElement) => {
        return React.cloneElement(child, { ...child.props, disabled });
      })}
    </select>
  );
};

export default NativeSelect;
