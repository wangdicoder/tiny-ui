import React from 'react';
import classnames from 'classnames';

export type SplitBarProps = {
    mode: 'horizontal' | 'vertical',
    prefixCls?: string,
    className?: string,
    style?: React.CSSProperties,
    children?: React.ReactNode,
} & typeof defaultProps;

const defaultProps = {
    prefixCls: 'ty-split-bar',
};

const SplitBar = (props: SplitBarProps) => {
    const { mode, prefixCls, className, style } = props;
    const cls = classnames(prefixCls, className, {
        [`${prefixCls}_${mode}`]: mode,
    });

    const onMouseMove = (e: React.MouseEvent) => {
        console.log(e);
    };

    return (
        <div className={cls} style={style} onMouseMove={onMouseMove}>

        </div>
    );
};

SplitBar.defaultProps = defaultProps;

export default SplitBar;
