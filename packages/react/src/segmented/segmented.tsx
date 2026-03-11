import React, { useState, useEffect, useContext } from 'react';
import classNames from 'classnames';
import { ConfigContext } from '../config-provider/config-context';
import { getPrefixCls } from '../_utils/general';
import { SegmentedProps, SegmentedOption, SegmentedValue } from './types';

const normalizeOptions = (
  options: (string | number | SegmentedOption)[]
): SegmentedOption[] => {
  return options.map((opt) => {
    if (typeof opt === 'string' || typeof opt === 'number') {
      return { label: String(opt), value: opt };
    }
    return opt;
  });
};

const Segmented = React.forwardRef<HTMLDivElement, SegmentedProps>((props, ref) => {
  const {
    options,
    defaultValue,
    block = false,
    disabled = false,
    size,
    prefixCls: customisedCls,
    className,
    style,
    onChange,
    ...otherProps
  } = props;

  const configContext = useContext(ConfigContext);
  const prefixCls = getPrefixCls('segmented', configContext.prefixCls, customisedCls);
  const segSize = size || configContext.componentSize || 'md';

  const normalizedOptions = normalizeOptions(options);
  const [selected, setSelected] = useState<SegmentedValue>(
    'value' in props
      ? (props.value as SegmentedValue)
      : defaultValue ?? normalizedOptions[0]?.value
  );

  useEffect(() => {
    if ('value' in props) {
      setSelected(props.value as SegmentedValue);
    }
  }, [props.value]);

  const cls = classNames(prefixCls, className, {
    [`${prefixCls}_${segSize}`]: segSize,
    [`${prefixCls}_block`]: block,
    [`${prefixCls}_disabled`]: disabled,
  });

  const handleClick = (value: SegmentedValue, optDisabled?: boolean) => {
    if (disabled || optDisabled) return;
    if (!('value' in props)) {
      setSelected(value);
    }
    onChange?.(value);
  };

  return (
    <div
      {...otherProps}
      ref={ref}
      className={cls}
      style={style}
      role="radiogroup"
    >
      {normalizedOptions.map((opt) => {
        const isActive = opt.value === selected;
        const itemCls = classNames(`${prefixCls}__item`, {
          [`${prefixCls}__item_active`]: isActive,
          [`${prefixCls}__item_disabled`]: opt.disabled,
        });
        return (
          <label
            key={opt.value}
            className={itemCls}
            onClick={() => handleClick(opt.value, opt.disabled)}
          >
            <input
              type="radio"
              className={`${prefixCls}__input`}
              checked={isActive}
              disabled={disabled || opt.disabled}
              onChange={() => handleClick(opt.value, opt.disabled)}
              value={opt.value}
            />
            {opt.icon && <span className={`${prefixCls}__icon`}>{opt.icon}</span>}
            <span className={`${prefixCls}__label`}>{opt.label}</span>
          </label>
        );
      })}
    </div>
  );
});

Segmented.displayName = 'Segmented';
export default Segmented;
