import React from 'react';
import classNames from 'classnames';
import { InputSizes } from './index';
import { BaseProps } from '../_utils/props';

export interface InputGroupProps extends BaseProps {
  size?: InputSizes;
  disabled?: boolean;
  children: React.ReactElement;
}

const InputGroup = (props: InputGroupProps) => {
  const {
    prefixCls = 'ty-input-group',
    disabled = false,
    size = 'md',
    className,
    style,
    children,
  } = props;
  const cls = classNames(prefixCls, className);

  return (
    <div className={cls} style={style}>
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

export default InputGroup;
