import React from 'react';
import classnames from 'classnames';
import Button from '../button';

export type InputGroupButtonProps = {
    inside?: boolean,
    prefixCls?: string,
    className?: string,
    children?: React.ReactNode,
} & typeof defaultProps;

const defaultProps = {
    prefixCls: 'ty-input-group-btn',
    disabled: false,
};

const InputGroupButton = (props: InputGroupButtonProps) => {
    const { inside, prefixCls, className, children, ...btnProps } = props;
    const cls = classnames(prefixCls, className, {
        [`${prefixCls}_inside`]: inside,
    });

    return (
        <div className={cls}>
            <Button {...btnProps} block className={`${prefixCls}__btn`}>{children}</Button>
        </div>
    );
};

InputGroupButton.defaultProps = defaultProps;

export default InputGroupButton;
