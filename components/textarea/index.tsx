import React, { useState } from 'react';
import classnames from 'classnames';

export type TextareaProps = {
    rows?: number,
    limit?: number,
    counter?: (count: number) => React.ReactNode,
    defaultValue?: string,
    value?: string,
    onChange?: (value: any, event: React.FormEvent<HTMLTextAreaElement>) => void,
    disabled?: boolean,
    prefixCls?: string,
    className?: string,
    style?: React.CSSProperties,
} & typeof defaultProps;

const defaultProps = {
    prefixCls: 'ty-textarea',
    disabled: false,
};

const Textarea = (props: TextareaProps) => {
    const {
        limit, counter, defaultValue, value, rows, onChange,
        disabled, prefixCls, className, style, ...restProps
    } = props;
    const cls = classnames(prefixCls, className, {
        [`${prefixCls}_disabled`]: disabled,
    });
    const [count, setCount] = useState(0);

    const _inputOnChange = (e: React.FormEvent<HTMLTextAreaElement>) => {
        setCount(e.currentTarget.value.length);
        onChange && onChange(e.currentTarget.value, e);
    };

    if (limit || counter) {
        return (
            <span className={`${prefixCls}-container`}>
                <textarea
                    maxLength={limit}
                    rows={rows}
                    value={value}
                    defaultValue={defaultValue}
                    disabled={disabled}
                    className={cls}
                    style={style}
                    {...restProps}
                    onChange={_inputOnChange}
                />
                <span className={`${prefixCls}__counter`}>
                    {counter && (typeof counter === 'function') ? counter(count) : `${count}/${limit}`}
                </span>
            </span>
        );
    } else {
        return (
            <textarea
                rows={rows}
                value={value}
                defaultValue={defaultValue}
                disabled={disabled}
                className={cls}
                style={style}
                onChange={_inputOnChange}
                {...restProps}
            />
        );
    }
};

Textarea.defaultProps = defaultProps;

export default Textarea;
