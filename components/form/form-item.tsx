import React, { useState, useEffect, useContext, useCallback } from 'react';
import classNames from 'classnames';
import { FormStoreContext } from './form-store-context';
import { ConfigContext } from '../config-provider/config-context';
import { getPrefixCls } from '../_utils/general';
import { FormItemProps } from './types';
import { getPropName, getValueFromEvent } from './form-helper';
import Transition from '../transition';

const FormItem = (props: FormItemProps): JSX.Element => {
  const {
    colon = true,
    valueGetter = getValueFromEvent,
    valuePropName = 'value',
    validateTrigger = 'onChange',
    required,
    name,
    label,
    helper,
    notice,
    rules,
    className,
    style,
    children,
    prefixCls: customisedCls,
  } = props;
  const configContext = useContext(ConfigContext);
  const prefixCls = getPrefixCls('form-item', configContext.prefixCls, customisedCls);
  const cls = classNames(prefixCls, className);
  const store = React.useContext(FormStoreContext);
  const [value, setValue] = useState(store ? store.getFieldValue(name) : undefined);
  const [error, setError] = useState<string | undefined>(
    store ? store.getFieldError(name) : undefined
  );
  const isRequired = (rules && rules.some((rule) => rule.required)) || required;

  const onChange = useCallback(
    (...args: any[]) => {
      if (store) {
        store.setFieldValue(name, valueGetter(...args));
        validateTrigger === 'onChange' && store.validateField(name);
      }
    },
    [name, store, valueGetter, validateTrigger]
  );

  let child: any = children;
  const prop = getPropName(valuePropName, child && child.type);
  const childProps = { [prop]: value, onChange };
  child = React.cloneElement(child, childProps);

  const labelCls = classNames({
    [`${prefixCls}__label_required`]: isRequired,
    [`${prefixCls}__label_colon`]: colon,
  });

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

  return (
    <div className={cls} style={style}>
      <div className={`${prefixCls}__label`}>
        <label
          htmlFor={name}
          title={typeof label === 'string' ? label : undefined}
          className={labelCls}>
          {label}
        </label>
      </div>
      <div className={`${prefixCls}__controls`}>
        {child}
        <div className={`${prefixCls}__addon`}>
          {notice && <div className={`${prefixCls}__notice`}>{notice}</div>}
          {helper && <div className={`${prefixCls}__helper`}>{helper}</div>}
          <Transition in={!!error} animation="slide-down">
            <div className={`${prefixCls}__error`}>{error}</div>
          </Transition>
        </div>
      </div>
    </div>
  );
};

FormItem.displayName = 'FormItem';

export default FormItem;
