import React, { useState } from 'react';
import classNames from 'classnames';
import Input from '../input';
import Icon from '../icon';
import { BaseProps } from '../_utils/props';

export interface InputPasswordProps extends BaseProps {
  suffix?: boolean;
  visibleOnClick?: () => void;
  children?: React.ReactNode;
}

const InputPassword = ({
  suffix = true,
  visibleOnClick = () => {},
  prefixCls = 'ty-input-pwd',
  ...restProps
}: InputPasswordProps) => {
  const { className, style, ...otherProps } = restProps;
  const cls = classNames(prefixCls, className);
  const [visible, setVisible] = useState(false);

  const renderSuffix = () => (
    <div
      className={`${prefixCls}__suffix`}
      onClick={() => {
        setVisible(!visible);
        visibleOnClick();
      }}>
      {visible ? <Icon type="eye" /> : <Icon type="eye-close" />}
    </div>
  );

  return (
    <Input
      className={cls}
      style={style}
      type={visible ? 'text' : 'password'}
      suffix={suffix ? renderSuffix() : null}
      {...otherProps}
    />
  );
};

export default InputPassword;
