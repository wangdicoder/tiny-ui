import React from 'react';
import classNames from 'classnames';
import { BaseProps, SizeType } from '../_utils/props';
import { ButtonProps, ButtonType, ButtonColor } from './button';

export interface ButtonGroupProps
  extends BaseProps,
    React.PropsWithRef<JSX.IntrinsicElements['div']> {
  btnType?: ButtonType;
  size?: SizeType;
  color?: ButtonColor;
  round?: boolean;
  disabled?: boolean;
  children: React.ReactNode;
}

const ButtonGroup = React.forwardRef<HTMLDivElement, ButtonGroupProps>(
  (props: ButtonGroupProps, ref) => {
    const {
      prefixCls = 'ty-btn-group',
      size = 'md',
      btnType = 'solid',
      disabled = false,
      round = false,
      color,
      className,
      style,
      children,
    } = props;
    const cls = classNames(prefixCls, className, {
      [`${prefixCls}_round`]: round,
      [`${prefixCls}_${color}`]: color,
    });
    return (
      <div className={cls} style={style} ref={ref}>
        {React.Children.map(children, child => {
          const childElement = child as React.FunctionComponentElement<ButtonProps>;
          const { displayName } = childElement.type;
          if (displayName === 'Button') {
            const childProps = {
              ...childElement.props,
              size,
              btnType,
              color,
              disabled: 'disabled' in childElement.props ? childElement.props.disabled : disabled,
            };
            return React.cloneElement(childElement, childProps);
          } else {
            return child;
          }
        })}
      </div>
    );
  }
);

ButtonGroup.displayName = 'ButtonGroup';

export default ButtonGroup;
