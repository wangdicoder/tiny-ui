import React, { useState, useEffect, useCallback } from 'react';
import classNames from 'classnames';
import { CSSTransition } from 'react-transition-group';
import FormStoreContext from './form-store-context';
import { BaseProps } from '../_utils/props';

export interface FormItemProps extends BaseProps {
  name: string;
  label?: React.ReactNode;
  helper?: React.ReactNode;
  notice?: React.ReactNode;
  /** Validate value when field is on change state */
  validateOnChange?: boolean;
  /** Validate value when field is on blur state */
  validateOnBlur?: boolean;
  children?: React.ReactNode;
}

const FormItem = (props: FormItemProps) => {
  const {
    prefixCls = 'ty-form-item',
    validateOnChange = true,
    validateOnBlur = false,
    name,
    label,
    helper,
    notice,
    className,
    style,
    children,
  } = props;
  const cls = classNames(prefixCls, className);
  const store = React.useContext(FormStoreContext);
  const [value, setValue] = useState(name && store ? store.getFieldValue(name) : undefined);
  const [error, setError] = useState(name && store ? store.getFieldError(name) : undefined);
  // Control the animation display
  const [showError, setShowError] = useState(false);

  // Delegate onChange event
  const onChange = useCallback(
    (val: any) => {
      store && store.setFieldValue(name, val);
    },
    [store]
  );

  const validateAndUpdateError = useCallback(() => {
    store!.validateField(name);
    const err = store!.getFieldError(name);
    setError(err);
    setShowError(!!err);
  }, [store]);

  // Delegate onBlur event
  const onBlur = (): void => {
    validateOnBlur && validateAndUpdateError();
  };

  // Delegate onFocus event
  // If the form field in on focus status, remove the error info
  const onFocus = () => {
    setShowError(false);
  };

  useEffect(() => {
    if (store) {
      store.setFieldValue(name, value);

      // unmount!
      return store.subscribe(name, (isOnChange: boolean) => {
        // When the field is updated, this subscription function will be invoked
        // In this function, update the input value and do the validation work
        setValue(store.getFieldValue(name));
        (!isOnChange || validateOnChange) && validateAndUpdateError();
      });
    }

    return () => {};
  }, []);

  return (
    <div className={cls} style={style}>
      {label &&
        (React.isValidElement(label) ? (
          label
        ) : (
          <label className={`${prefixCls}__label`}>{label}</label>
        ))}
      <div className={`${prefixCls}__controls`}>
        {React.Children.map(children, child => {
          if (React.isValidElement(child)) {
            const childProps = {
              ...child.props,
              value,
              onChange,
              onBlur,
              onFocus,
            };
            return React.cloneElement(child, childProps);
          }
          return null;
        })}
        <div className={`${prefixCls}__addon`}>
          {notice && <div className={`${prefixCls}__notice`}>{notice}</div>}
          {helper && <div className={`${prefixCls}__helper`}>{helper}</div>}
          <CSSTransition timeout={0} in={showError} classNames={`${prefixCls}__error_slide`}>
            <div className={`${prefixCls}__error`}>{error}</div>
          </CSSTransition>
        </div>
      </div>
    </div>
  );
};

export default FormItem;
