import * as React from 'react';

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
            disabled={props.disabled}>
            {props.children}
        </button>
    );
};

export default Button;