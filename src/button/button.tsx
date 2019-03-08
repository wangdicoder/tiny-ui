import * as React from 'react';
import './style/index.css';
import classNames from 'classnames';
import {IoIosSync} from 'react-icons/io';

export interface ButtonProps {
    color?: string;
    loading?: boolean;
    disabled?: boolean;
    block?: boolean;
    outline?: boolean;
    size?: string;
    round?: boolean;
    ripple?: boolean;
    dash?: boolean;
    icon?: React.ReactNode;
    link?: boolean;

    // Allow to pass html attribute
    [others: string]: any;
}

const renderIcon = (icon: React.ReactNode, loading: boolean = false) => {
    if (loading) {
        return <IoIosSync className="ty-btn__loader"/>;
    } else {
        return icon;
    }
};

const Button: React.FC<ButtonProps> = (props) => {
    const {color, size, block, icon, link, loading, dash, disabled, outline,
        round, ripple, children, ...others} = props;
    const className = classNames(
        'ty-btn',
        link ? [`ty-btn_${color}_link`] : (outline ? [`ty-btn_${color}_outline`] : [`ty-btn_${color}`]),
        size && `ty-btn_${size}`,
        {'ty-btn_block': block},
        {'ty-btn_round': round},
        {'ty-btn_ripple': ripple},
        {'ty-btn_dash': outline && dash},  // Only available outline style
        {[`ty-btn_${color}_disabled`]: disabled || loading},
    );
    return (
        <button
            className={className}
            disabled={disabled || loading}
            type="button"
            {...others}>
            {renderIcon(icon, loading)}
            {children}
        </button>
    );
};

Button.defaultProps = {
    loading: false,
    disabled: false,
    block: false,
    color: 'basic',
};

export default Button;