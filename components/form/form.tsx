import React from 'react';
import classNames from 'classnames';
import FormStoreContext from './form-store-context';
import FormStore from './form-store';
import { BaseProps } from '../_utils/props';

export interface FormProps extends BaseProps {
  store?: FormStore;
  onSubmit?: React.FormEventHandler<HTMLFormElement>;
  children?: React.ReactNode;
}

const Form: React.FC<FormProps> & { Item?: any; FormStore?: any } = ({
  prefixCls = 'ty-form',
  ...restProps
}: FormProps) => {
  const { store, onSubmit, className, style, children } = restProps;
  const cls = classNames(prefixCls, className);

  return (
    <FormStoreContext.Provider value={store}>
      <form className={cls} style={style} onSubmit={onSubmit}>
        {children}
      </form>
    </FormStoreContext.Provider>
  );
};

export default Form;
