import * as React from 'react';
import './style/index.css';
import classnames from 'classnames';

export type DividerProps = {
    type?: 'horizontal' | 'vertical',
    dashed?: boolean,
    align?: 'left' | 'right' | 'center',
    className?: string,
    style?: React.CSSProperties,
    prefixCls?: string,
    children?: React.ReactNode,
} & typeof defaultProps;

const defaultProps = {
    prefixCls: 'ty-divider',
    type: 'horizontal',
    dashed: false,
    align: 'center',
};

const Divider = (props: DividerProps) => {
    const { type, dashed, align, className, style, prefixCls, children } = props;
    const cls = classnames(prefixCls, className, `${prefixCls}_${type}`, `${prefixCls}_${align}`, {
        [`${prefixCls}_${type}-dashed`]: dashed,
        [`${prefixCls}_text`]: children,
    });

    return (
        <div className={cls} style={style}>
            {children && <span className={`${prefixCls}_inner-text`}>{children}</span>}
        </div>
    );
};

Divider.defaultProps = defaultProps;

export default Divider;
