import React, { useEffect } from 'react';
import classnames from 'classnames';

export type LoadingBarProps = {
    didMount?: () => void,
    prefixCls?: string,
    className?: string,
    style?: React.CSSProperties,
    children?: React.ReactNode,
};

const defaultProps = {
    prefixCls: 'ty-loading-bar',
};

const LoadingBar = (props: LoadingBarProps) => {
    const { didMount, prefixCls, className, style } = props;
    const cls = classnames(prefixCls, className);

    useEffect(() => {
        didMount && didMount();
    }, []);

    return (
        <div className={cls} style={style}>
            <div id="ty-loading-bar" className={`${prefixCls}__inner`}/>
        </div>
    );
};

LoadingBar.defaultProps = defaultProps;

export default LoadingBar;
