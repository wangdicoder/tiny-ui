import * as React from 'react';
import classNames from 'classnames';

export type IconTypes = {
    type: string,
    color?: string,
    size?: string | number,
    style?: React.CSSProperties,
    spin?: boolean,
    className?: string,
    prefixCls?: string,
} & typeof defaultProps;

const defaultProps = {
    prefixCls: 'ty-icon',
};

const Icon = (props: IconTypes) => {
    const { type, color, size, style, spin, className, prefixCls, ...restProps } = props;
    const cls = classNames(prefixCls, className, `ty--${type}`, {
        [`${prefixCls}_spin`]: spin,
    });
    return (
        <i className={cls} style={{ color, fontSize: size, ...style }} {...restProps}/>
    );
};

Icon.defaultProps = defaultProps;

export default Icon;
