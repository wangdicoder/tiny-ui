import React from 'react';
import classnames from 'classnames';

export type InputGroupProps = {
    prefixCls?: string,
    className?: string,
    style?: React.CSSProperties,
} & typeof defaultProps;

const defaultProps = {};

const InputGroup = (props: InputGroupProps) => {
    const { prefixCls, className, style } = props;
    const cls = classnames(prefixCls, className);

    return (
        <div className={cls} style={style}>

        </div>
    );
};

InputGroup.defaultProps = defaultProps;

export default InputGroup;
