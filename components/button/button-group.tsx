import React from 'react';
import classNames from 'classnames';
import { BaseProps, Size, Color } from '../_utils/props';
import { ButtonProps } from './button';

export { Size, Color };

export interface ButtonGroupProps extends React.PropsWithRef<BaseProps> {
  size?: Size;
  color?: Color;
  round?: boolean;
  disabled?: boolean;
  children: React.ReactElement<ButtonProps>[];
}

const ButtonGroup = React.forwardRef<HTMLDivElement, ButtonGroupProps>(
  (props: ButtonGroupProps, ref) => {
    const {
      prefixCls = 'ty-btn-group',
      size = 'md',
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
        {React.Children.map(children, (child: React.ReactElement<ButtonProps>) => {
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
  }
);

export default ButtonGroup;
