import * as React from 'react';
import classnames from 'classnames';

export type LayoutProps = {
    prefixCls?: string,
    className?: string,
    style?: React.CSSProperties,
} & typeof defaultProps;

const defaultProps = {};

const Layout = (props: LayoutProps) => {
    const { prefixCls, className, style } = props;
    const cls = classnames(prefixCls, className);

    return (
        <div className={cls} style={style}>

        </div>
    );
};

Layout.defaultProps = defaultProps;

export default Layout;
