import React, { useState } from 'react';
import classnames from 'classnames';
import Input from '../input';
import Icon from '../icon';

export type InputPasswordProps = {
    prefixCls?: string,
    className?: string,
    style?: React.CSSProperties,
    children?: React.ReactNode,
} & typeof defaultProps;

const defaultProps = {
    prefixCls: 'ty-input-pwd',
};

const InputPassword = (props: InputPasswordProps) => {
    const { prefixCls, className, style, ...restProps } = props;
    const cls = classnames(prefixCls, className);
    const [visible, setVisible] = useState(false);

    const suffix = () => (
        <div className={`${prefixCls}__suffix`} onClick={() => setVisible(!visible)}>
            {visible ? <Icon type="eye"/> : <Icon type="eye-close"/>}
        </div>
    );

    return (
        <Input
            className={cls}
            style={style}
            type={visible ? 'text' : 'password'}
            suffix={suffix()}
            {...restProps}
        />
    );
};

InputPassword.defaultProps = defaultProps;

export default InputPassword;
