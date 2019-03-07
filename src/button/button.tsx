import * as React from 'react';
import './style/index.css';

export interface ButtonProps {
    loading?: boolean;
    disabled?: boolean;
    type?: string;
    size?: string;
    onClick?: React.MouseEventHandler<HTMLAnchorElement>;
}

const Button: React.FC<ButtonProps> = (props) => {

    return (
        <button
            className="ty-button"
            disabled={props.disabled}>
            {props.children}
        </button>
    );
};

export default Button;