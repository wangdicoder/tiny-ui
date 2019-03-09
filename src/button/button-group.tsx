import * as React from 'react';
import {ButtonProps, ButtonSizes} from './index';

type ButtonGroupProps = {
    children: React.ReactNode,
    size?: ButtonSizes,
    ripple?: boolean,
    className?: string,
};

const ButtonGroup = (props: ButtonGroupProps) => {
    const {size, ripple, className, children} = props;
    return (
        <div className={className}>
            {React.Children.map(children, (child: React.ReactElement<ButtonProps>) => {
                return React.cloneElement(child, {...child.props, size, ripple});
            })}
        </div>
    );
};

ButtonGroup.defaultProps = {
    size: 'md',
};

export default ButtonGroup;