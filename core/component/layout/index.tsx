import * as React from 'react';
import { useState } from 'react';
import './style/index.css';
import classnames from 'classnames';
import Side from './side';
import SideContext from './side-context';

export type BasicLayoutProps = {
    prefixCls?: string,
    className?: string,
    style?: React.CSSProperties,
    children?: React.ReactNode,
} & typeof defaultProps;

const defaultProps = {
    prefixCls: 'ty-layout',
};

const BasicLayout = (props: BasicLayoutProps) => {
    const { prefixCls, className, style, children, ...restProps } = props;
    const cls = classnames(prefixCls, className);
    return <div className={cls} style={style} {...restProps}>{children}</div>;
};

const Layout = (props: BasicLayoutProps) => {
    const { prefixCls, className, style, children, ...restProps } = props;
    const [hasSide, setHasSide] = useState(false);
    const cls = classnames(prefixCls, className, {
        [`${prefixCls}_has-side`]: hasSide,
    });

    const addSide = (val: string) => {
        setHasSide(true);
    };

    const removeSide = (val: string) => {
        setHasSide(false);
    };

    return (
        <SideContext.Provider value={{ addSide, removeSide }}>
            <div className={cls} style={style} {...restProps}>{children}</div>
        </SideContext.Provider>
    );
};

const layoutGenerator = (props: BasicLayoutProps): React.ReactNode => {
    return (layoutProps: BasicLayoutProps) => {
        return (<BasicLayout {...layoutProps} prefixCls={props.prefixCls}/>);
    };
};

const Header = layoutGenerator({ prefixCls: 'ty-layout-header' });
const Footer = layoutGenerator({ prefixCls: 'ty-layout-footer' });
const Content = layoutGenerator({ prefixCls: 'ty-layout-content' });

Layout.defaultProps = defaultProps;
Layout.Header = Header;
Layout.Footer = Footer;
Layout.Content = Content;
Layout.Side = Side;

export default Layout;
