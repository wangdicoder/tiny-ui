import React, { useContext, useRef } from 'react';
import classNames from 'classnames';
import { FormStoreContext } from './form-store-context';
import { ConfigContext } from '../config-provider/config-context';
import { getPrefixCls } from '../_utils/general';
import useForm from './use-form';
import { FormProps } from './types';

const Form = (props: FormProps): JSX.Element => {
  const {
    initialValues = {},
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
  const formStore = form ? form : localForm;
  formStore.setFieldValues(initialValues);
  const store = useRef(formStore);

  return (
    <FormStoreContext.Provider value={store.current}>
      <form {...otherProps} className={cls} onSubmit={onSubmit}>
        {children}
      </form>
    </FormStoreContext.Provider>
  );
};

Form.displayName = 'Form';

export default Form;
