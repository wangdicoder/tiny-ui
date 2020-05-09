import React, { useContext } from 'react';
import classNames from 'classnames';
import { BaseProps, SizeType } from '../_utils/props';
import { ButtonProps, ButtonType } from './button';
import { ConfigContext } from '../config-provider/config-context';
import { getPrefixCls } from '../_utils/general';

export interface ButtonGroupProps
  extends BaseProps,
    React.PropsWithRef<JSX.IntrinsicElements['div']> {
  btnType?: ButtonType;
  size?: SizeType;
  round?: boolean;
  disabled?: boolean;
  children: React.ReactNode;
}

const ButtonGroup = React.forwardRef<HTMLDivElement, ButtonGroupProps>(
  (props: ButtonGroupProps, ref) => {
    const {
      size = 'md',
      btnType = 'default',
      disabled = false,
      round = false,
      prefixCls: customisedCls,
      className,
      children,
      ...otherProps
    } = props;
    const configContext = useContext(ConfigContext);
    const prefixCls = getPrefixCls('btn-group', configContext.prefixCls, customisedCls);
    const btnSize = props.size || configContext.componentSize || size;
    const cls = classNames(prefixCls, className, {
      [`${prefixCls}_round`]: round,
      [`${prefixCls}_${btnType}`]: btnType,
    });
    return (
      <div {...otherProps} className={cls} ref={ref}>
        {React.Children.map(children, (child) => {
          const childElement = child as React.FunctionComponentElement<ButtonProps>;
          const { displayName } = childElement.type;
          if (displayName === 'Button') {
            const childProps = {
              ...childElement.props,
              btnType,
              size: btnSize,
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
