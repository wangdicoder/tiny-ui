import React, { useState, useEffect, useContext, useCallback } from 'react';
import classNames from 'classnames';
import { FormInstanceContext } from './form-instance-context';
import { FormOptionsContext } from './form-options-context';
import { ConfigContext } from '../config-provider/config-context';
import { getPrefixCls } from '../_utils/general';
import { FormItemProps } from './types';
import { getPropName, getValueFromEvent } from './form-helper';
import Row from '../grid/row';
import Col from '../grid/col';
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
  const form = React.useContext(FormInstanceContext);
  const { wrapperCol, labelCol } = React.useContext(FormOptionsContext);
  const [value, setValue] = useState(form.getFieldValue(name));
  const [error, setError] = useState<string | undefined>(form.getFieldError(name));
  const isRequired = (rules && rules.some((rule) => rule.required)) || required;

  // get onChange event from all components which support onChange callback
  const onChange = useCallback(
    (...args: any[]) => {
      if (form) {
        form.setFieldValue(name, valueGetter(...args));
        validateTrigger === 'onChange' && form.validateField(name);
      }
    },
    [name, form, valueGetter, validateTrigger]
  );

  // get onBlur event from input
  const onBlur = useCallback(() => {
    if (form) {
      validateTrigger === 'onBlur' && form.validateField(name);
    }
  }, [name, form, validateTrigger]);

  let child: any = children;
  const prop = getPropName(valuePropName, child && child.type);
  const childProps = { [prop]: value, onChange, onBlur };
  child = React.cloneElement(child, childProps);

  const labelCls = classNames({
    [`${prefixCls}__label_required`]: isRequired,
    [`${prefixCls}__label_colon`]: colon,
  });

  useEffect(() => {
    if (form) {
      rules && form.setFiledRules(name, rules);

      return form.subscribe((n) => {
        if (name === '*' || n === name || n === '*') {
          setValue(form.getFieldValue(name));
          setError(form.getFieldError(name));
        }
      });
    }
    return () => undefined;
  }, [form, name, rules]);

  const labelSpan = typeof labelCol === 'number' ? labelCol : labelCol.span;
  const labelOffset = typeof labelCol === 'number' ? 0 : labelCol.offset;
  const wrapperSpan = typeof wrapperCol === 'number' ? wrapperCol : wrapperCol.span;
  const wrapperOffset = typeof wrapperCol === 'number' ? 0 : wrapperCol.offset;

  return (
    <Row className={cls} style={style}>
      <Col span={labelSpan} offset={labelOffset} className={`${prefixCls}__label`}>
        <label
          htmlFor={name}
          title={typeof label === 'string' ? label : undefined}
          className={labelCls}>
          {label}
        </label>
      </Col>
      <Col span={wrapperSpan} offset={wrapperOffset} className={`${prefixCls}__controls`}>
        {child}
        <div className={`${prefixCls}__addon`}>
          {notice && <div className={`${prefixCls}__notice`}>{notice}</div>}
          {helper && <div className={`${prefixCls}__helper`}>{helper}</div>}
          <Transition in={!!error} animation="slide-down">
            <div className={`${prefixCls}__error`}>{error}</div>
          </Transition>
        </div>
      </Col>
    </Row>
  );
};

FormItem.displayName = 'FormItem';

export default FormItem;
