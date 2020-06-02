import React, { useContext, useRef } from 'react';
import classNames from 'classnames';
import { FormStoreContext } from './form-store-context';
import FormStore, { FormValues } from './form-store';
import { BaseProps } from '../_utils/props';
import { ConfigContext } from '../config-provider/config-context';
import { getPrefixCls } from '../_utils/general';

export interface FormProps extends BaseProps, React.PropsWithRef<JSX.IntrinsicElements['form']> {
  initialValues?: FormValues;
  onSubmit?: React.FormEventHandler<HTMLFormElement>;
}

const Form = (props: FormProps): JSX.Element => {
  const {
    initialValues = {},
    onSubmit,
    className,
    children,
    prefixCls: customisedCls,
    ...otherProps
  } = props;
  const configContext = useContext(ConfigContext);
  const prefixCls = getPrefixCls('form', configContext.prefixCls, customisedCls);
  const cls = classNames(prefixCls, className);
  const store = useRef(new FormStore(initialValues));

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
