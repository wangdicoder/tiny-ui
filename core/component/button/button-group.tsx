import * as React from 'react';
import {ButtonProps, ButtonSizes, ButtonColors} from '.';
import classNames from 'classnames';

type ButtonGroupProps = {
    children: React.ReactNode,
    size?: ButtonSizes,
    ripple?: boolean,
    color?: ButtonColors,
    round?: boolean,
    className?: string,
    prefixCls?: string,
};

const ButtonGroup = (props: ButtonGroupProps) => {
    const {size, ripple, color, round, className, prefixCls, children} = props;
    const cls = classNames(prefixCls, {[`${prefixCls}_round`] : round}, className);
    return (
        <div className={cls}>
            {React.Children.map(children, (child: React.ReactElement<ButtonProps>) => {
                return React.cloneElement(child, {...child.props, size, ripple, color});
            })}
        </div>
    );
};

ButtonGroup.defaultProps = {
    prefixCls: 'ty-btn-group',
    size: 'md',
};

export default ButtonGroup;
