import React, { useState, useEffect, useContext } from 'react';
import classNames from 'classnames';
import { ConfigContext } from '../config-provider/config-context';
import { getPrefixCls } from '../_utils/general';
import { SwitchProps } from './types';

const Switch = React.forwardRef<HTMLLabelElement, SwitchProps>(
  (props: SwitchProps, ref): JSX.Element => {
    const {
      size = 'md',
      defaultChecked = true,
      disabled,
      loading,
      onChange,
      checkedText,
      uncheckedText,
      className,
      onClick,
      prefixCls: customisedCls,
      ...otherProps
    } = props;
    const [checked, setChecked] = useState<boolean>(
      'checked' in props ? (props.checked as boolean) : defaultChecked
    );
    const configContext = useContext(ConfigContext);
    const prefixCls = getPrefixCls('switch', configContext.prefixCls, customisedCls);
    const switchSize = props.size || configContext.componentSize || size;
    const cls = classNames(prefixCls, className, `${prefixCls}_${switchSize}`, {
      [`${prefixCls}_checked`]: checked,
      [`${prefixCls}_loading`]: loading,
      [`${prefixCls}_disabled`]: loading || disabled,
    });

    const labelOnClick = (e: React.MouseEvent<HTMLLabelElement>): void => {
      const val = !checked;
      onClick && onClick(val, e);
      if (!(disabled || loading)) {
        onChange && onChange(val, e);
        !('checked' in props) && setChecked(val);
      }
    };

    useEffect(() => {
      'checked' in props && setChecked(props.checked as boolean);
    }, [props]);

    return (
      <label {...otherProps} ref={ref} className={cls} onClick={labelOnClick}>
        <span className={`${prefixCls}__bg`}>
          <span className={`${prefixCls}__thumb`} />
          <span className={`${prefixCls}__label`}>{checked ? checkedText : uncheckedText}</span>
        </span>
      </label>
    );
  }
);

Switch.displayName = 'Switch';

export default Switch;
