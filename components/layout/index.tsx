import Layout, { Header, Content, Footer, LayoutProps } from './layout';
import Sidebar, { SidebarProps, SidebarTheme } from './sidebar';

export { LayoutProps, SidebarProps, SidebarTheme };

type ILayout = typeof Layout & {
  Header: typeof Header;
  Footer: typeof Footer;
  Content: typeof Content;
  Sidebar: typeof Sidebar;
};

const DefaultLayout = Layout as ILayout;
DefaultLayout.Sidebar = Sidebar;
DefaultLayout.Header = Header;
DefaultLayout.Content = Content;
DefaultLayout.Footer = Footer;

export default DefaultLayout;
