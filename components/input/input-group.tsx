import React, { useContext } from 'react';
import classNames from 'classnames';
import { InputSizes } from './index';
import { BaseProps } from '../_utils/props';
import { ConfigContext } from '../config-provider/config-context';
import { getPrefixCls } from '../_utils/general';

export interface InputGroupProps
  extends BaseProps,
    React.PropsWithoutRef<JSX.IntrinsicElements['div']> {
  size?: InputSizes;
  disabled?: boolean;
  children: React.ReactElement;
}

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
        const childProps = {
          ...child.props,
          disabled,
          size: inputSize,
        };
        return React.cloneElement(child, childProps);
      })}
    </div>
  );
};

InputGroup.displayName = 'InputGroup';

export default InputGroup;
