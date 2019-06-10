import React from 'react';
import classnames from 'classnames';

export type LoadingBarProps = {
    prefixCls?: string,
    className?: string,
    style?: React.CSSProperties,
    children?: React.ReactNode,
} & typeof defaultProps;

const defaultProps = {};

const LoadingBar = (props: LoadingBarProps) => {
    const { prefixCls, className, style } = props;
    const cls = classnames(prefixCls, className);
    
    return (
        <div className={cls} style={style}>

        </div>
    );
};

LoadingBar.defaultProps = defaultProps;

export default LoadingBar;
