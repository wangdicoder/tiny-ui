import React from 'react';
import classnames from 'classnames';
import { InputSizes } from '.';

export type InputGroupProps = {
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
    const { disabled, size, prefixCls, className, style, children } = props;
    const cls = classnames(prefixCls, className);

    return (
        <div className={cls} style={style}>
            {React.Children.map(children, (child: React.ReactElement) => {
                const childProps = {
                    ...child.props,
                    disabled: ('disabled' in child.props) ? child.props.disabled : disabled,
                    size,
                };
                return React.cloneElement(child, childProps);
            })}
        </div>
    );
};

InputGroup.defaultProps = defaultProps;

export default InputGroup;
