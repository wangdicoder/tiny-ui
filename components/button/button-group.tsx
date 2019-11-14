import React from 'react';
import classNames from 'classnames';
import { BaseProps } from '../_utils/props';
import { ButtonProps, ButtonSize, ButtonColor } from './button';

export interface ButtonGroupProps extends BaseProps {
  children: React.ReactElement<ButtonProps>;
  size?: ButtonSize;
  color?: ButtonColor;
  round?: boolean;
  disabled?: boolean;
}

const defaultProps = {
  prefixCls: 'ty-btn-group',
  size: 'md' as ButtonSize,
  disabled: false,
  round: false,
} as Partial<ButtonGroupProps>;

const ButtonGroup = (props: ButtonGroupProps) => {
  const { size, color, round, disabled, className, prefixCls, style, children } = props;
  const cls = classNames(prefixCls, className, {
    [`${prefixCls}_round`]: round,
    [`${prefixCls}_${color}`]: color,
  });
  return (
    <div className={cls} style={style}>
      {React.Children.map(children, child => {
        const btnProps = {
          ...child.props,
          size,
          color,
          disabled: 'disabled' in child.props ? child.props.disabled : disabled,
        };
        return React.cloneElement(child, btnProps);
      })}
    </div>
  );
};

ButtonGroup.defaultProps = defaultProps;

export default ButtonGroup;
