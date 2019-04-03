import * as React from 'react';
import classnames from 'classnames';

export type TextareaProps = {
    defaultValue?: string,
    value?: string,
    rows?: number,
    onChange?: (value: any, event: React.FormEvent<HTMLTextAreaElement>) => void,
    disabled?: boolean,
    prefixCls?: string,
    className?: string,
    style?: React.CSSProperties,
} & typeof defaultProps;

const defaultProps = {
    prefixCls: 'ty-textarea',
    disabled: false,
    rows: 3,
};

const Textarea = (props: TextareaProps) => {
    const { defaultValue, value, rows, onChange, disabled, prefixCls, className, style } = props;
    const cls = classnames(prefixCls, className, {
        [`${prefixCls}_disabled`]: disabled,
    });

    const inputOnChange = (e: React.FormEvent<HTMLTextAreaElement>) => {
        onChange && onChange(e.currentTarget.value, e);
    };

    return (
        <textarea
            rows={rows}
            value={value}
            defaultValue={defaultValue}
            className={cls} style={style}
            onChange={inputOnChange}
        />
    );
};

Textarea.defaultProps = defaultProps;

export default Textarea;
