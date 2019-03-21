import * as React from 'react';
import classNames from 'classnames';
import './style/index.css';
import './style/iconfont.css';

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
    const { type, color, size, style, spin, className, prefixCls } = props;
    const cls = classNames(
        prefixCls,
        `ty--${type}`,
        { [`${prefixCls}_spin`]: spin },
        className,
    );
    return (
        <i className={cls} style={{ color, fontSize: size, ...style }}/>
    );
};

Icon.defaultProps = defaultProps;

export default Icon;
