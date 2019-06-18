import React, { ReactElement } from 'react';
import classnames from 'classnames';
import BreadcrumbItem, { BreadcrumbItemProps } from './breadcrumb-item';

export type BreadcrumbProps = {
    separator?: React.ReactNode,
    prefixCls?: string,
    className?: string,
    style?: React.CSSProperties,
    children: ReactElement<BreadcrumbItemProps>,
} & typeof defaultProps;

const defaultProps = {
    separator: '/',
    prefixCls: 'ty-breadcrumb',
};

const Breadcrumb = (props: BreadcrumbProps) => {
    const { separator, prefixCls, className, style, children } = props;
    const cls = classnames(prefixCls, className);
    const childrenCount = React.Children.count(children);

    return (
        <nav className={cls} style={style}>
            <ol className={`${prefixCls}__ol`}>
                {React.Children.map(children, (child: ReactElement<BreadcrumbItemProps>, index: number) => {
                    const childProps: BreadcrumbItemProps = {
                        ...child.props,
                        separator,
                        last: childrenCount === index + 1,
                    };
                    return React.cloneElement(child, childProps);
                })}
            </ol>
        </nav>
    );
};

Breadcrumb.defaultProps = defaultProps;

Breadcrumb.Item = BreadcrumbItem;

export default Breadcrumb;
