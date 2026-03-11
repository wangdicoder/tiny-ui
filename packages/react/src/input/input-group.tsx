import React, { useContext } from 'react';
import classNames from 'classnames';
import { ConfigContext } from '../config-provider/config-context';
import { getPrefixCls } from '../_utils/general';
import { InputGroupProps, InputProps } from './types';
import { SizeType } from '../_utils/props';

const InputGroup = (props: InputGroupProps): React.ReactElement => {
  const {
    disabled = false,
    size = 'md',
    className,
    children,
    prefixCls: customisedCls,
    ...otherProps
  } = props;
  const configContext = useContext(ConfigContext);
  const prefixCls = getPrefixCls('input-group', configContext.prefixCls, customisedCls);
  const cls = classNames(prefixCls, className);
  const inputSize = props.size || configContext.componentSize || size;

  return (
    <div {...otherProps} className={cls}>
      {React.Children.map(children, (child: React.ReactElement) => {
        const childProps: Partial<InputProps> = {
          disabled,
          size: inputSize as SizeType,
        };
        return React.cloneElement(child, childProps);
      })}
    </div>
  );
};

InputGroup.displayName = 'InputGroup';

export default InputGroup;
