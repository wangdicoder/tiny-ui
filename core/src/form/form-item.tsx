import React, { useState, useEffect, useCallback } from 'react';
import classnames from 'classnames';
import FormStoreContext from './form-store-context';

export type FormItemProps = {
    name: string,
    label?: string,
    helpDesc?: string,
    notice?: string,
    defaultValue?: any,
    validator?: (val: any) => boolean | string
    prefixCls?: string,
    className?: string,
    style?: React.CSSProperties,
    children?: React.ReactNode,
} & typeof defaultProps;

const defaultProps = {
    prefixCls: 'ty-form-item',
};

const FormItem = (props: FormItemProps) => {
    const { name, label, validator, defaultValue, prefixCls, className, style, children } = props;
    const cls = classnames(prefixCls, className);
    const store = React.useContext(FormStoreContext);
    const [value, setValue] = useState(name && store ? store.getFieldValue(name) : undefined);
    const [error, setError] = useState(name && store ? store.getFieldError(name) : undefined);

    const onChange = useCallback((val: any) => {
        store && store.setFieldValue(name, val);
    }, [store]);

    const onBlur = useCallback(() => {
        // console.log('blur');
    }, [store]);

    useEffect(() => {
        if (store) {
            store.setFieldDefaultValue(name, defaultValue);
            store.setFieldValue(name, value);
            store.setFieldValidator(name, validator ? validator : () => true);

            // unmount
            return store.subscribe(name, () => {
                setValue(store.getFieldValue(name));
                setError(store.getFieldError(name));
            });
        }
    }, []);

    return (
        <div className={cls} style={style}>
            {label && <label>{label}</label>}
            {React.Children.map(children, (child) => {
                if (React.isValidElement(child)) {
                    const childProps = {
                        ...child.props,
                        value,
                        onChange,
                        onBlur,
                        defaultValue,
                    };
                    return React.cloneElement(child, childProps);
                }
            })}
            <div>{error}</div>
        </div>
    );
};

FormItem.defaultProps = defaultProps;

export default FormItem;
