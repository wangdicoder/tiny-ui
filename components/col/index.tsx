import * as React from 'react';
import classNames from 'classnames';

type ColSpanType = number | string;

export type ColSize = {
    span?: ColSpanType,
    offset?: ColSpanType,
    order?: ColSpanType,
};

export type ColProps = {
    span?: ColSpanType,
    offset?: ColSpanType,
    order?: ColSpanType,
    xs?: ColSpanType | ColSize,
    sm?: ColSpanType | ColSize,
    md?: ColSpanType | ColSize,
    lg?: ColSpanType | ColSize,
    xl?: ColSpanType | ColSize,
    xxl?: ColSpanType | ColSize,
    prefixCls?: string,
    className?: string,
    style?: React.CSSProperties,
    children?: React.ReactNode,
    [size: string]: any,  // solve index signature
} & typeof defaultProps;

const defaultProps = {
    prefixCls: 'ty-col',
    span: 24,
    offset: 0,
    order: 0,
};

const ScreenType = ['xs', 'sm', 'md', 'lg', 'xl', 'xxl'];

const Col = (props: ColProps) => {
    const { span, offset, order, prefixCls, className, style, children } = props;
    let sizeClassObj = {};
    ScreenType.forEach(size => {
        let sizeProps: ColSize = {};
        if (typeof props[size] === 'number') {
            sizeProps.span = props[size];
        } else if (typeof props[size] === 'object') {
            sizeProps = props[size] || {};
        }

        sizeClassObj = {
            ...sizeClassObj,
            [`${prefixCls}-${size}-${sizeProps.span}`]: sizeProps.span !== undefined,
            [`${prefixCls}-${size}-order-${sizeProps.order}`]: sizeProps.order || sizeProps.order === 0,
            [`${prefixCls}-${size}-offset-${sizeProps.offset}`]: sizeProps.offset || sizeProps.offset === 0,
        };
    });

    const cls = classNames(prefixCls, className, {
        [`${prefixCls}-${span}`]: span,
        [`${prefixCls}-offset-${offset}`]: offset,
        [`${prefixCls}-order-${order}`]: order,
    }, sizeClassObj);

    return (
        <div className={cls} style={style}>
            {children}
        </div>
    );
};

Col.defaultProps = defaultProps;

export default Col;
