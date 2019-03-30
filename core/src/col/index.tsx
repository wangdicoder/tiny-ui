import * as React from 'react';
import classNames from 'classnames';

export type ColSize = {
    span?: number,
    offset?: number,
    order?: number,
};

export type ColProps = {
    span?: number,
    offset?: number,
    order?: number,
    xs?: number | ColSize;
    sm?: number | ColSize;
    md?: number | ColSize;
    lg?: number | ColSize;
    xl?: number | ColSize;
    xxl?: number | ColSize;
    prefixCls?: string,
    className?: string,
    style?: React.CSSProperties,
    children: React.ReactNode,
} & typeof defaultProps;

const defaultProps = {
    prefixCls: 'ty-col',
    span: 24,
    offset: 0,
    order: 0,
};

const Col = (props: ColProps) => {
    const { span, offset, order, prefixCls, className, style, children, ...others } = props;
    let sizeClassObj = {};
    ['xs', 'sm', 'md', 'lg', 'xl', 'xxl'].forEach(size => {
        let sizeProps: ColSize = {};
        if (typeof props[size] === 'number') {
            sizeProps.span = props[size];
        } else if (typeof props[size] === 'object') {
            sizeProps = props[size] || {};
        }

        delete others[size];

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
