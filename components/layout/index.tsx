import React from 'react';
import { useState } from 'react';
import classNames from 'classnames';
import Sidebar from './sidebar';
import SidebarContext from './sidebar-context';

export type BasicProps = {
  prefixCls?: string;
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
};

export type BasicPropsWithTagName = {
  tagName: 'header' | 'footer' | 'main' | 'section';
} & BasicProps;

const defaultProps = {
  prefixCls: 'ty-layout',
};

/**
 * Template layout for generating header, footer and content
 * @param props
 * @constructor
 */
const Basic = (props: BasicPropsWithTagName) => {
  const { prefixCls, className, style, children, tagName, ...restProps } = props;
  const classString = classNames(className, prefixCls);
  return React.createElement(tagName, { className: classString, style, ...restProps }, children);
};

/**
 * Layout component
 * @param props
 * @constructor
 */
const Layout = (props: BasicProps) => {
  const { prefixCls, className, style, children, ...restProps } = props;
  const [hasSidebar, setHasSidebar] = useState(false);
  const cls = classNames(prefixCls, className, {
    [`${prefixCls}_has-sidebar`]: hasSidebar,
  });

  return (
    <SidebarContext.Provider
      value={{ addSidebar: () => setHasSidebar(true), removeSidebar: () => setHasSidebar(false) }}>
      <section className={cls} style={style} {...restProps}>
        {children}
      </section>
    </SidebarContext.Provider>
  );
};

type GeneratorProps = {
  prefixCls: string;
  tagName: 'header' | 'footer' | 'main' | 'section';
};

/**
 * Generator
 * @param props
 */
function generator({ prefixCls, tagName }: GeneratorProps) {
  return (BasicComponent: any) => {
    return class extends React.Component<BasicProps, any> {
      static Header: any;
      static Footer: any;
      static Content: any;
      static Sidebar: any;

      render() {
        return <BasicComponent prefixCls={prefixCls} tagName={tagName} {...this.props} />;
      }
    };
  };
}

const Header = generator({ prefixCls: 'ty-layout-header', tagName: 'header' })(Basic);
const Footer = generator({ prefixCls: 'ty-layout-footer', tagName: 'footer' })(Basic);
const Content = generator({ prefixCls: 'ty-layout-content', tagName: 'main' })(Basic);

Layout.defaultProps = defaultProps;
Layout.Header = Header;
Layout.Footer = Footer;
Layout.Content = Content;
Layout.Sidebar = Sidebar;

export default Layout;
