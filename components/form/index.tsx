import React from 'react';
import classnames from 'classnames';

import FormItem from './form-item';
import FormStoreContext from './form-store-context';
import FormStore from './form-store';

export type FormProps = {
    store?: FormStore,
    onSubmit?: React.FormEventHandler<HTMLFormElement>,
    prefixCls?: string,
    className?: string,
    style?: React.CSSProperties,
    children?: React.ReactNode,
} & typeof defaultProps;

const defaultProps = {
    prefixCls: 'ty-form',
};

const Form = (props: FormProps) => {
    const { store, onSubmit, prefixCls, className, style, children } = props;
    const cls = classnames(prefixCls, className);

    return (
        <FormStoreContext.Provider value={store}>
            <form className={cls} style={style} onSubmit={onSubmit}>{children}</form>
        </FormStoreContext.Provider>
    );
};

Form.defaultProps = defaultProps;

Form.Item = FormItem;
Form.FormStore = FormStore;

export default Form;
