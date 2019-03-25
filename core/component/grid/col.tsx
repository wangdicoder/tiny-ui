import * as React from 'react';
import classNames from 'classnames';
import './style/col.css';

export type ColProps = {
    span?: number,
    offset?: number,
    prefixCls?: string,
    className?: string,
    style?: React.CSSProperties,
    children: React.ReactNode,
} & typeof defaultProps;

const defaultProps = {
    prefixCls: 'ty-col',
    span: 24,
    offset: 0,
};

const Col = (props: ColProps) => {
    const { span, offset, prefixCls, className, style, children } = props;
    const cls = classNames(prefixCls, className, {
        [`${prefixCls}-${span}`]: span,
        [`${prefixCls}-offset-${offset}`]: offset,
    });
    return (
        <div className={cls} style={style}>
            {children}
        </div>
    );
};

Col.defaultProps = defaultProps;

export default Col;
