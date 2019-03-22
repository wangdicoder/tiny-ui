import * as React from 'react';
import { ButtonProps, ButtonSizes, ButtonColors } from '.';
import classNames from 'classnames';

type ButtonGroupProps = {
    children: React.ReactElement<ButtonProps>,
    size?: ButtonSizes,
    ripple?: boolean,
    color?: ButtonColors,
    round?: boolean,
    className?: string,
    prefixCls?: string,
} & typeof defaultProps;

const defaultProps = {
    prefixCls: 'ty-btn-group',
    size: 'md',
    color: 'default',
};

const ButtonGroup = (props: ButtonGroupProps) => {
    const { size, ripple, color, round, className, prefixCls, children } = props;
    const cls = classNames(prefixCls, className, { [`${prefixCls}_round`]: round });
    return (
        <div className={cls}>
            {React.Children.map(children, (child: React.ReactElement<ButtonProps>) => {
                const btnProps = { ...child.props, size, ripple, color };
                return React.cloneElement(child, btnProps);
            })}
        </div>
    );
};

ButtonGroup.defaultProps = defaultProps;

export default ButtonGroup;
