import React, { useContext } from 'react';
import classNames from 'classnames';
import { BaseProps } from '../_utils/props';
import { NativeSelectGroupProps } from './native-opt-group';
import { NativeSelectOptionProps } from './native-option';
import { ConfigContext } from '../config-provider/config-context';
import { getPrefixCls } from '../_utils/general';

export type NativeSelectSize = 'sm' | 'md' | 'lg';

export interface NativeSelectProps
  extends BaseProps,
    Omit<React.PropsWithRef<JSX.IntrinsicElements['select']>, 'size'> {
  size?: NativeSelectSize;
  children: React.ReactElement<NativeSelectGroupProps | NativeSelectOptionProps>;
}

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
