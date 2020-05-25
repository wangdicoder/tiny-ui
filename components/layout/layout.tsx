import React, { useContext, useState } from 'react';
import classNames from 'classnames';
import { SidebarContext } from './sidebar-context';
import { ConfigContext } from '../config-provider/config-context';
import { getPrefixCls } from '../_utils/general';
import { BaseProps } from '../_utils/props';

export interface LayoutProps extends BaseProps, React.PropsWithRef<JSX.IntrinsicElements['div']> {}

/**
 * Layout component
 */
const Layout = React.forwardRef<HTMLDivElement, LayoutProps>(
  (props: LayoutProps, ref): JSX.Element => {
    const { className, children, prefixCls: customisedCls, ...otherProps } = props;
    const [hasSidebar, setHasSidebar] = useState(false);
    const configContext = useContext(ConfigContext);
    const prefixCls = getPrefixCls('layout', configContext.prefixCls, customisedCls);
    const cls = classNames(prefixCls, className, {
      [`${prefixCls}_has-sidebar`]: hasSidebar,
    });

    return (
      <SidebarContext.Provider
        value={{
          addSidebar: () => setHasSidebar(true),
          removeSidebar: () => setHasSidebar(false),
        }}>
        <section {...otherProps} ref={ref} className={cls}>
          {children}
        </section>
      </SidebarContext.Provider>
    );
  }
);
Layout.displayName = 'Layout';

type generatorProps = {
  prefixCls: string;
  displayName: string;
  tagName: 'header' | 'footer' | 'main';
};

/**
 * Generator
 */
function generator(_props: generatorProps) {
  const { tagName, displayName, prefixCls: defaultCls } = _props;
  const SubComponent = React.forwardRef<HTMLDivElement, LayoutProps>(
    (props: LayoutProps, ref): JSX.Element => {
      const { className, children, prefixCls: customisedCls, ...otherProps } = props;
      const configContext = useContext(ConfigContext);
      const prefixCls = getPrefixCls(defaultCls, configContext.prefixCls, customisedCls);
      const cls = classNames(prefixCls, className);

      return React.createElement(tagName, { ref, className: cls, ...otherProps }, children);
    }
  );
  SubComponent.displayName = displayName;

  return SubComponent;
}

const Header = generator({
  prefixCls: 'layout-header',
  tagName: 'header',
  displayName: 'Header',
});
const Footer = generator({
  prefixCls: 'layout-footer',
  tagName: 'footer',
  displayName: 'Footer',
});
const Content = generator({
  prefixCls: 'layout-content',
  tagName: 'main',
  displayName: 'Content',
});

export { Header, Footer, Content };
export default Layout;
