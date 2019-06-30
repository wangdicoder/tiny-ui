import React from 'react';
import { ButtonProps, ButtonSizes, ButtonColors } from '.';
import classnames from 'classnames';

type ButtonGroupProps = {
    children: React.ReactElement<ButtonProps>,
    size?: ButtonSizes,
    color?: ButtonColors,
    round?: boolean,
    className?: string,
    prefixCls?: string,
    style?: React.CSSProperties,
} & typeof defaultProps;

const defaultProps = {
    prefixCls: 'ty-btn-group',
    size: 'md',
    color: 'default',
};

const ButtonGroup = (props: ButtonGroupProps) => {
    const { size, color, round, className, prefixCls, style, children } = props;
    const cls = classnames(prefixCls, className, {
        [`${prefixCls}_round`]: round,
    });
    return (
        <div className={cls} style={style}>
            {React.Children.map(children, (child: React.ReactElement<ButtonProps>) => {
                const btnProps = { ...child.props, size, color };
                return React.cloneElement(child, btnProps);
            })}
        </div>
    );
};

ButtonGroup.defaultProps = defaultProps;

export default ButtonGroup;
