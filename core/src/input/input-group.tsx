import React from 'react';
import classnames from 'classnames';
import { InputSizes } from '.';

export type InputGroupProps = {
    inside?: boolean,
    size?: InputSizes,
    disabled?: boolean,
    prefixCls?: string,
    className?: string,
    style?: React.CSSProperties,
    children: React.ReactNode,
} & typeof defaultProps;

const defaultProps = {
    inside: false,
    prefixCls: 'ty-input-group',
    disabled: false,
    size: 'md',
};

const InputGroup = (props: InputGroupProps) => {
    const { inside, disabled, size, prefixCls, className, style, children } = props;
    const cls = classnames(prefixCls, className);

    return (
        <div className={cls} style={style}>
            {React.Children.map(children, (child: any) => {
                const childProps = {
                    ...child.props,
                    disabled,
                    size,
                    inside,
                };
                return React.cloneElement(child, childProps);
            })}
        </div>
    );
};

InputGroup.defaultProps = defaultProps;

export default InputGroup;
