import React, { useContext } from 'react';
import classNames from 'classnames';
import FormStoreContext from './form-store-context';
import FormStore from './form-store';
import { BaseProps } from '../_utils/props';
import { ConfigContext } from '../config-provider/config-context';
import { getPrefixCls } from '../_utils/general';

export interface FormProps extends BaseProps {
  store?: FormStore;
  onSubmit?: React.FormEventHandler<HTMLFormElement>;
  children?: React.ReactNode;
}

const Form = (props: FormProps): JSX.Element => {
  const { prefixCls: customisedCls, store, onSubmit, className, style, children } = props;
  const configContext = useContext(ConfigContext);
  const prefixCls = getPrefixCls('form', configContext.prefixCls, customisedCls);
  const cls = classNames(prefixCls, className);

  return (
    <FormStoreContext.Provider value={store}>
      <form className={cls} style={style} onSubmit={onSubmit}>
        {children}
      </form>
    </FormStoreContext.Provider>
  );
};

Form.displayName = 'Form';

export default Form;
