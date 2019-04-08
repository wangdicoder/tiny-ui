import React, { useState, useEffect, useCallback } from 'react';
import classnames from 'classnames';
import FormStoreContext from './form-store-context';

export type FormItemProps = {
    name: string,
    label?: string,
    helpDesc?: string,
    notice?: string,
    defaultValue?: any,
    prefixCls?: string,
    className?: string,
    style?: React.CSSProperties,
    children?: React.ReactNode,
} & typeof defaultProps;

const defaultProps = {
    prefixCls: 'ty-form-item',
};

const FormItem = (props: FormItemProps) => {
    const { name, defaultValue, prefixCls, className, style, children } = props;
    const cls = classnames(prefixCls, className);
    const store = React.useContext(FormStoreContext);
    const [value, setValue] = useState(name && store ? store.get(name) : undefined);

    const onChange = useCallback((val: any) => {
        store && store.set(name, val);
    }, [store]);

    const onBlur = useCallback(() => {
        console.log('blur');
    }, [store]);

    useEffect(() => {
        if (store) {
            store.setDefaultValues(name, defaultValue);

            // unmount
            return store.subscribe(() => {
                setValue(store.get(name));
            });
        }
    }, []);

    return (
        <div className={cls} style={style}>
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
        </div>
    );
};

FormItem.defaultProps = defaultProps;

export default FormItem;
