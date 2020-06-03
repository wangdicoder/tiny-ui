import React, { useContext, useRef } from 'react';
import classNames from 'classnames';
import { FormInstanceContext } from './form-instance-context';
import { FormOptionsContext } from './form-options-context';
import { ConfigContext } from '../config-provider/config-context';
import { getPrefixCls } from '../_utils/general';
import { FormProps } from './types';
import useForm from './use-form';

const Form = (props: FormProps): JSX.Element => {
  const {
    initialValues = {},
    labelCol = { span: 8, offset: 0 },
    wrapperCol = { span: 16, offset: 0 },
    form,
    onSubmit,
    className,
    children,
    prefixCls: customisedCls,
    ...otherProps
  } = props;
  const configContext = useContext(ConfigContext);
  const prefixCls = getPrefixCls('form', configContext.prefixCls, customisedCls);
  const cls = classNames(prefixCls, className);
  const localForm = useForm();
  // If you want to control the form outside, namely get the form instance, just pass a form store.
  // Otherwise, the form component will manage the state internally.
  const formInstance = form ? form : localForm;
  formInstance.setFieldValues(initialValues);
  const instance = useRef(formInstance);

  return (
    <FormInstanceContext.Provider value={instance.current}>
      <FormOptionsContext.Provider value={{ labelCol, wrapperCol }}>
        <form {...otherProps} className={cls} onSubmit={onSubmit}>
          {children}
        </form>
      </FormOptionsContext.Provider>
    </FormInstanceContext.Provider>
  );
};

Form.displayName = 'Form';

export default Form;
