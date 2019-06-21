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
    children: React.ReactElement,
} & typeof defaultProps;

const defaultProps = {
    prefixCls: 'ty-input-group',
    disabled: false,
    size: 'md',
};

const InputGroup = (props: InputGroupProps) => {
    const { inside, disabled, size, prefixCls, className, style, children } = props;
    const cls = classnames(prefixCls, className, {
        [`${prefixCls}_inside`]: inside,
    });

    return (
        <div className={cls} style={style}>
            {React.Children.map(children, (child: React.ReactElement) => {
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
