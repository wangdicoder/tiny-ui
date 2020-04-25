import React from 'react';
import classNames from 'classnames';
import { InputSizes } from './index';
import { BaseProps } from '../_utils/props';

export interface InputGroupProps
  extends BaseProps,
    React.PropsWithoutRef<JSX.IntrinsicElements['div']> {
  size?: InputSizes;
  disabled?: boolean;
  children: React.ReactElement;
}

const InputGroup = (props: InputGroupProps): React.ReactElement => {
  const {
    prefixCls = 'ty-input-group',
    disabled = false,
    size = 'md',
    className,
    style,
    children,
    ...otherProps
  } = props;
  const cls = classNames(prefixCls, className);

  return (
    <div {...otherProps} className={cls} style={style}>
      {React.Children.map(children, (child: React.ReactElement) => {
        const childProps = {
          ...child.props,
          disabled,
          size,
        };
        return React.cloneElement(child, childProps);
      })}
    </div>
  );
};

InputGroup.displayName = 'InputGroup';

export default InputGroup;
