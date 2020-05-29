import React, { useRef, useEffect, useState, ReactNode, useContext } from 'react';
import classNames from 'classnames';
import { BaseProps, SizeType } from '../_utils/props';
import { KeyCode } from '../_utils/enum';
import { ConfigContext } from '../config-provider/config-context';
import { getPrefixCls } from '../_utils/general';
import { CloseCircle } from '../_utils/components';

export interface InputProps
  extends BaseProps,
    Omit<React.PropsWithoutRef<JSX.IntrinsicElements['input']>, 'size' | 'prefix'> {
  clearable?: boolean;
  prefix?: ReactNode;
  suffix?: ReactNode;
  value?: string;
  defaultValue?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onEnterPress?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  onKeyDown?: React.KeyboardEventHandler<HTMLInputElement>; // prevent covering keydown event by enter press
  size?: SizeType;
  disabled?: boolean;
  onClearClick?: (e: React.MouseEvent<HTMLSpanElement>) => void;
}

const DEFAULT_MARGIN = 16; // 8px * 2

const Input = (props: InputProps): JSX.Element => {
  const {
    size = 'md',
    disabled = false,
    clearable = false,
    defaultValue = '',
    prefix,
    suffix,
    onChange,
    onEnterPress,
    onKeyDown,
    className,
    style,
    onClearClick,
    prefixCls: customisedCls,
    ...otherProps
  } = props;
  const configContext = useContext(ConfigContext);
  const prefixCls = getPrefixCls('input', configContext.prefixCls, customisedCls);
  const inputSize = props.size || configContext.componentSize || size;
  const cls = classNames(prefixCls, className, `${prefixCls}_${inputSize}`, {
    [`${prefixCls}_disabled`]: disabled,
  });
  const prefixRef = useRef<HTMLDivElement | null>(null);
  const suffixRef = useRef<HTMLDivElement | null>(null);
  const [value, setValue] = useState<string>(
    'value' in props ? (props.value as string) : defaultValue
  );
  const [inputPadding, setInputPadding] = useState({ paddingLeft: '7px', paddingRight: '7px' });

  const inputOnChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const val = e.currentTarget.value;
    !('value' in props) && setValue(val);
    onChange && onChange(e);
  };

  const inputOnKeydown = (e: React.KeyboardEvent<HTMLInputElement>): void => {
    if (e.keyCode === KeyCode.ENTER) {
      onEnterPress && onEnterPress(e);
    }
    onKeyDown && onKeyDown(e);
  };

  const clearBtnOnClick = (e: React.MouseEvent<HTMLSpanElement>): void => {
    !('value' in props) && setValue('');
    onClearClick && onClearClick(e);
  };

  const renderClearButton = (): ReactNode => {
    if (clearable && value && value.length > 0) {
      return (
        <span className={`${prefixCls}__clear-btn`} onClick={clearBtnOnClick}>
          <CloseCircle size={16} color="#BFBFBF" />
        </span>
      );
    }
    return null;
  };

  useEffect(() => {
    const prefixNode = prefixRef.current;
    const suffixNode = suffixRef.current;

    const prefixWidth = prefixNode && prefixNode.offsetWidth;
    const suffixWidth = suffixNode && suffixNode.offsetWidth;
    const padding = { ...inputPadding };

    if (prefixWidth) {
      padding.paddingLeft = prefixWidth + DEFAULT_MARGIN + 'px';
    }
    if (suffixWidth) {
      padding.paddingRight = suffixWidth + DEFAULT_MARGIN + 'px';
    }

    if (
      padding.paddingLeft !== inputPadding.paddingLeft ||
      padding.paddingRight !== inputPadding.paddingRight
    ) {
      setInputPadding(padding);
    }
  }, [inputPadding]);

  useEffect(() => {
    'value' in props && setValue(props.value as string);
  }, [props]);

  return (
    <div className={cls} style={style}>
      {prefix && (
        <div ref={prefixRef} className={`${prefixCls}__prefix`}>
          {prefix}
        </div>
      )}
      <input
        {...otherProps}
        value={value}
        disabled={disabled}
        className={`${prefixCls}__input`}
        style={{ paddingLeft: inputPadding.paddingLeft, paddingRight: inputPadding.paddingRight }}
        onChange={inputOnChange}
        onKeyDown={inputOnKeydown}
      />
      {(suffix || clearable) && (
        <div ref={suffixRef} className={`${prefixCls}__suffix`}>
          {renderClearButton()}
          {suffix}
        </div>
      )}
    </div>
  );
};

Input.displayName = 'Input';

export default Input;
