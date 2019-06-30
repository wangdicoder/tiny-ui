import React from 'react';
import { ButtonProps, ButtonSizes, ButtonColors } from '.';
import classnames from 'classnames';

type ButtonGroupProps = {
    children: React.ReactElement<ButtonProps>,
    size?: ButtonSizes,
    color?: ButtonColors,
    round?: boolean,
    disabled?: boolean,
    className?: string,
    prefixCls?: string,
    style?: React.CSSProperties,
} & typeof defaultProps;

const defaultProps = {
    prefixCls: 'ty-btn-group',
    size: 'md',
    disabled: false,
    round: false,
};

const ButtonGroup = (props: ButtonGroupProps) => {
    const { size, color, round, disabled, className, prefixCls, style, children } = props;
    const cls = classnames(prefixCls, className, {
        [`${prefixCls}_round`]: round,
        [`${prefixCls}_${color}`]: color,
    });
    return (
        <div className={cls} style={style}>
            {React.Children.map(children, (child) => {
                const btnProps = {
                    ...child.props,
                    size,
                    color,
                    disabled: ('disabled' in child.props) ? child.props.disabled : disabled,
                };
                return React.cloneElement(child, btnProps);
            })}
        </div>
    );
};

ButtonGroup.defaultProps = defaultProps;

export default ButtonGroup;
