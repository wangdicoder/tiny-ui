import React from 'react';
import classnames from 'classnames';

export type BreadcrumbItemProps = {
    separator?: React.ReactNode,
    prefixCls?: string,
    className?: string,
    style?: React.CSSProperties,
    children?: React.ReactNode,
};

const defaultProps = {
    prefixCls: 'ty-breadcrumb-item',
};

const BreadcrumbItem = (props: BreadcrumbItemProps) => {
    const { separator, prefixCls, className, style, children } = props;
    const cls = classnames(prefixCls, className);

    return (
        <li className={cls} style={style}>
            {children}
            <span className={`${prefixCls}__separator`}>{separator}</span>
        </li>
    );
};

BreadcrumbItem.defaultProps = defaultProps;

export default BreadcrumbItem;
