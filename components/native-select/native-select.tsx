import React, { useContext } from 'react';
import classNames from 'classnames';
import { ConfigContext } from '../config-provider/config-context';
import { getPrefixCls } from '../_utils/general';
import { NativeSelectProps } from './types';

const NativeSelect = React.forwardRef<HTMLSelectElement, NativeSelectProps>(
  (props: NativeSelectProps, ref) => {
    const {
      size = 'md',
      disabled = false,
      className,
      children,
      prefixCls: customisedCls,
      ...otherProps
    } = props;
    const configContext = useContext(ConfigContext);
    const prefixCls = getPrefixCls('select-native', configContext.prefixCls, customisedCls);
    const cls = classNames(prefixCls, className, {
      [`${prefixCls}_${size}`]: size,
      [`${prefixCls}_disabled`]: disabled,
    });

    return (
      <select ref={ref} {...otherProps} className={cls}>
        {React.Children.map(children, (child: React.ReactElement) => {
          return React.cloneElement(child, { ...child.props, disabled });
        })}
      </select>
    );
  }
);

NativeSelect.displayName = 'NativeSelect';

export default NativeSelect;
