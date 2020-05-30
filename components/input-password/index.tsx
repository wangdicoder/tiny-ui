import React, { useContext, useState } from 'react';
import classNames from 'classnames';
import Input from '../input';
import Icon from '../icon';
import { ConfigContext } from '../config-provider/config-context';
import { getPrefixCls } from '../_utils/general';
import { InputPasswordProps } from './types';

const InputPassword = (props: InputPasswordProps): JSX.Element => {
  const {
    suffix = true,
    visibleOnClick,
    className,
    prefixCls: customisedCls,
    ...otherProps
  } = props;
  const configContext = useContext(ConfigContext);
  const prefixCls = getPrefixCls('input-pwd', configContext.prefixCls, customisedCls);
  const cls = classNames(prefixCls, className);
  const [visible, setVisible] = useState(false);

  const renderSuffix = (): React.ReactElement => (
    <div
      className={`${prefixCls}__suffix`}
      onClick={(): void => {
        setVisible(!visible);
        visibleOnClick && visibleOnClick();
      }}>
      {visible ? <Icon name="eye" /> : <Icon name="eye-close" />}
    </div>
  );

  return (
    <Input
      {...otherProps}
      className={cls}
      type={visible ? 'text' : 'password'}
      suffix={suffix ? renderSuffix() : null}
    />
  );
};

export default InputPassword;
