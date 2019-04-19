import React from 'react';
import classnames from 'classnames';

export type LoaderProps = {
    indicator?: React.ReactNode,
    size?: 'sm' | 'default' | 'lg',
    /** loading status */
    loading?: boolean,
    tip?: string | null,
    vertical?: boolean,
    blurred?: boolean,
    prefixCls?: string,
    className?: string,
    style?: React.CSSProperties,
    children?: React.ReactNode,
} & typeof defaultProps;

const defaultProps = {
    prefixCls: 'ty-loader',
    size: 'default',
    loading: true,
    tip: null,
    vertical: false,
    blurred: true,
};

const Loader = (props: LoaderProps) => {
    const { indicator, size, loading, tip, vertical, blurred, prefixCls, className, style, children } = props;
    const cls = classnames(prefixCls, className, `${prefixCls}_${size}`, {
        [`${prefixCls}_spinning`]: loading,
    });

    const indicatorCls = classnames(`${prefixCls}__loader-container`, {
        [`${prefixCls}__loader-container_vertical`]: vertical,
    });
    const containerCls = classnames(`${prefixCls}__container`, {
        [`${prefixCls}__container_loading`]: loading,
        [`${prefixCls}__container_blurred`]: loading && blurred,
    });

    return (
        <div className={cls} style={style}>
            {loading && (
                <div className={indicatorCls}>
                    {indicator ? indicator : <div className={`${prefixCls}__indicator`}/>}
                    <span className={`${prefixCls}__label`}>{tip}</span>
                </div>
            )}
            {children && (
                <div className={containerCls}>
                    {children}
                </div>
            )}
        </div>
    );
};

Loader.defaultProps = defaultProps;

export default Loader;
