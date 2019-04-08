import React from 'react';
import classnames from 'classnames';

import FormItem from './form-item';
import FormStoreContext from './form-store-context';
import FormStore from './form-store';
import createForm from './createForm';

export type FormProps = {
    store?: FormStore,
    prefixCls?: string,
    className?: string,
    style?: React.CSSProperties,
    children?: React.ReactNode,
} & typeof defaultProps;

const defaultProps = {
    prefixCls: 'ty-form',
};

const Form = (props: FormProps) => {
    const { store, prefixCls, className, style, children } = props;
    const cls = classnames(prefixCls, className);

    return (
        <FormStoreContext.Provider value={store}>
            <form className={cls} style={style}>{children}</form>
        </FormStoreContext.Provider>
    );
};

Form.defaultProps = defaultProps;

Form.Item = FormItem;
Form.FormStore = FormStore;
Form.createForm = createForm;

export default Form;
