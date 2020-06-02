import React, { useState, useEffect, useContext, useCallback } from 'react';
import classNames from 'classnames';
import { CSSTransition } from 'react-transition-group';
import { FormStoreContext } from './form-store-context';
import { BaseProps } from '../_utils/props';
import { ConfigContext } from '../config-provider/config-context';
import { getPrefixCls } from '../_utils/general';
import { Rule } from './form-store';

export interface FormItemProps extends BaseProps {
  name: string;
  label?: React.ReactNode;
  rules?: Rule[];
  helper?: React.ReactNode;
  notice?: React.ReactNode;
  valuePropName?: string;
  valueGetter?: (...args: any[]) => any;
  /** Validate value when field is on change state */
  validateOnChange?: boolean;
  /** Validate value when field is on blur state */
  validateOnBlur?: boolean;
  children?: React.ReactNode;
}

function getPropName(valueProp: string | ((type: any) => string), type: any) {
  return typeof valueProp === 'function' ? valueProp(type) : valueProp;
}

function getValueFromEvent(...args: any[]): any {
  const e = args[0] as React.ChangeEvent<any>;
  return e && e.target ? (e.target.type === 'checkbox' ? e.target.checked : e.target.value) : e;
}

const FormItem = (props: FormItemProps): JSX.Element => {
  const {
    // validateOnChange = true,
    // validateOnBlur = false,
    prefixCls: customisedCls,
    valueGetter = getValueFromEvent,
    valuePropName = 'value',
    name,
    label,
    helper,
    notice,
    rules,
    className,
    style,
    children,
  } = props;
  const configContext = useContext(ConfigContext);
  const prefixCls = getPrefixCls('form-item', configContext.prefixCls, customisedCls);
  const cls = classNames(prefixCls, className);
  const store = React.useContext(FormStoreContext);
  const [value, setValue] = useState(store ? store.getFieldValue(name) : undefined);
  const [error, setError] = useState<string[] | undefined>(
    store ? store.getFieldError(name) : undefined
  );
  // Control the animation display
  const [showError] = useState(false);

  const onChange = useCallback(
    (...args: any[]) => store && store.setFieldValue(name, valueGetter(...args)),
    [name, store, valueGetter]
  );

  useEffect(() => {
    if (store) {
      rules && store.setFiledRules(name, rules);

      return store.subscribe((n) => {
        if (name === '*' || n === name || n === '*') {
          setValue(store.getFieldValue(name));
          setError(store.getFieldError(name));
        }
      });
    }
    return () => undefined;
  }, [store, name, rules]);

  let child: any = children;
  const prop = getPropName(valuePropName, child && child.type);
  const childProps = { [prop]: value, onChange };
  child = React.cloneElement(child, childProps);

  return (
    <div className={cls} style={style}>
      {label &&
        (React.isValidElement(label) ? (
          label
        ) : (
          <label className={`${prefixCls}__label`}>{label}</label>
        ))}
      <div className={`${prefixCls}__controls`}>
        {child}
        <div className={`${prefixCls}__addon`}>
          {notice && <div className={`${prefixCls}__notice`}>{notice}</div>}
          {helper && <div className={`${prefixCls}__helper`}>{helper}</div>}
          <CSSTransition timeout={0} in={showError} classNames={`${prefixCls}__error_slide`}>
            <div className={`${prefixCls}__error`}>{error && error.length > 0 ? error[0] : ''}</div>
          </CSSTransition>
        </div>
      </div>
    </div>
  );
};

FormItem.displayName = 'FormItem';

export default FormItem;
