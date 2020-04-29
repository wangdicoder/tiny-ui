import React, {
  useRef,
  useEffect,
  useState,
  ReactNode,
  MouseEvent,
  KeyboardEvent,
  ChangeEvent,
} from 'react';
import classNames from 'classnames';
import Icon from '../icon';
import { BaseProps } from '../_utils/props';
import { KeyCode } from '../_utils/enum';

export type InputSizes = 'sm' | 'md' | 'lg';

export interface InputProps
  extends BaseProps,
    Omit<React.PropsWithoutRef<JSX.IntrinsicElements['input']>, 'size' | 'prefix'> {
  clearable?: boolean;
  prefix?: ReactNode;
  suffix?: ReactNode;
  value?: string;
  defaultValue?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  onEnterPress?: (e: KeyboardEvent<HTMLInputElement>) => void;
  onKeyDown?: React.KeyboardEventHandler<HTMLInputElement>; // prevent covering keydown event by enter press
  size?: InputSizes;
  disabled?: boolean;
}

const DEFAULT_MARGIN = 16; // 8px * 2

const Input = (props: InputProps): React.ReactElement => {
  const {
    prefixCls = 'ty-input',
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
    ...otherProps
  } = props;
  const cls = classNames(prefixCls, className, `${prefixCls}_${size}`, {
    [`${prefixCls}_disabled`]: disabled,
  });
  const prefixRef = useRef<HTMLDivElement | null>(null);
  const suffixRef = useRef<HTMLDivElement | null>(null);
  const [value, setValue] = useState('value' in props ? props.value : defaultValue);
  const [inputPadding, setInputPadding] = useState({ paddingLeft: '7px', paddingRight: '7px' });

  const inputOnChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const val = e.currentTarget.value;
    !('value' in props) && setValue(val);
    onChange && onChange(e);
  };

  const inputOnKeydown = (e: KeyboardEvent<HTMLInputElement>): void => {
    if (e.keyCode === KeyCode.ENTER) {
      onEnterPress && onEnterPress(e);
    }
    onKeyDown && onKeyDown(e);
  };

  const clearBtnOnClick = (e: MouseEvent<HTMLSpanElement>): void => {
    setValue('');
  };

  const renderClearButton = (): React.ReactElement | null => {
    if (clearable && value && value.length > 0) {
      return (
        <span className={`${prefixCls}__clear-btn`} onClick={clearBtnOnClick}>
          <Icon name="close-fill" />
        </span>
      );
    }
    return null;
  };

  useEffect(() => {
    const prefixWidth = prefixRef.current && prefixRef.current!.offsetWidth;
    const suffixWidth = suffixRef.current && suffixRef.current!.offsetWidth;
    const padding = { ...inputPadding };
    if (prefixWidth) {
      padding.paddingLeft = prefixWidth + DEFAULT_MARGIN + 'px';
    }
    if (suffixWidth) {
      padding.paddingRight = suffixWidth + DEFAULT_MARGIN + 'px';
    }
    setInputPadding(padding);

    'value' in props && setValue(props.value);
  }, [props.value]);

  return (
    <div className={cls} style={style}>
      {prefix && (
        <div ref={prefixRef} className={`${prefixCls}__prefix`}>
          {prefix}
        </div>
      )}
      <input
        value={value}
        disabled={disabled}
        className={`${prefixCls}__input`}
        style={{ paddingLeft: inputPadding.paddingLeft, paddingRight: inputPadding.paddingRight }}
        onChange={inputOnChange}
        onKeyDown={inputOnKeydown}
        {...otherProps}
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
