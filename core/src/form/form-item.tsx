import React, { useState, useEffect, useCallback } from 'react';
import classnames from 'classnames';
import FormStoreContext from './form-store-context';

export type FormItemProps = {
    name: string,
    label?: string,
    helpDesc?: string,
    notice?: string,
    /** Validate value when field is on change state */
    validateOnChange?: boolean,
    /** Validate value when field is on blur state */
    validateOnBlur?: boolean,
    prefixCls?: string,
    className?: string,
    style?: React.CSSProperties,
    children?: React.ReactNode,
} & typeof defaultProps;

const defaultProps = {
    prefixCls: 'ty-form-item',
    validateOnChange: true,
    validateOnBlur: false,
};

const FormItem = (props: FormItemProps) => {
    const { name, label, validateOnChange, validateOnBlur, prefixCls, className, style, children } = props;
    const cls = classnames(prefixCls, className);
    const store = React.useContext(FormStoreContext);
    const [value, setValue] = useState(name && store ? store.getFieldValue(name) : undefined);
    const [error, setError] = useState(name && store ? store.getFieldError(name) : undefined);

    // Delegate onChange event
    const onChange = useCallback((val: any) => {
        store && store.setFieldValue(name, val);
    }, [store]);

    // Delegate onBlur event
    const onBlur = () => {
        validateOnBlur && validateAndUpdateError();
    };

    // Delegate onFocus event
    const onFocus = () => {
        setError('');
    };

    const validateAndUpdateError = useCallback(() => {
        store!.validateField(name);
        setError(store!.getFieldError(name));
    }, [store]);

    useEffect(() => {
        if (store) {
            store.setFieldValue(name, value);

            // unmount
            return store.subscribe(name, (isOnChange: boolean) => {
                setValue(store.getFieldValue(name));
                (!isOnChange || validateOnChange) && validateAndUpdateError();
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
                        onFocus,
                    };
                    return React.cloneElement(child, childProps);
                }
            })}
            {!!error && <div>{error}</div>}
        </div>
    );
};

FormItem.defaultProps = defaultProps;

export default FormItem;
