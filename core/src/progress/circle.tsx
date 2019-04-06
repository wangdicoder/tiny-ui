import React from 'react';
import classnames from 'classnames';

export type CircleProps = {
    prefixCls?: string,
    className?: string,
    style?: React.CSSProperties,
    children?: React.ReactNode,
} & typeof defaultProps;

const defaultProps = {};

const Circle = (props: CircleProps) => {
    const { prefixCls, className, style } = props;
    const cls = classnames(prefixCls, className);

    return (
        <div className={cls} style={style}>

        </div>
    );
};

Circle.defaultProps = defaultProps;

export default Circle;
