import React from 'react';
import './sidebar-menu.scss';
import { NavLink } from 'react-router-dom';
import { RouterItem } from '../../routers';
import { Layout } from '@tiny-ui/react';
import { useSidebarToggle } from '../../context/sidebar-toggle-context';

const { Sidebar } = Layout;

type Props = {
  routers: RouterItem[];
  url: string;
};

export const SidebarMenu = (props: Props): React.ReactElement => {
  const { routers, url } = props;
  const { isOpen, close } = useSidebarToggle();

  return (
    <>
      {isOpen && <div className="sidebar-menu__backdrop" onClick={close} />}
      <Sidebar
        theme="light"
        width={250}
        className={`sidebar-menu${isOpen ? ' sidebar-menu_open' : ''}`}>
        <ul className="sidebar-menu__menu">
          {routers.map((router) => {
            if (router.children) {
              return (
                <li key={router.title}>
                  <div className="sidebar-menu__group-title">{router.title}</div>
                  <ul className="sidebar-menu__group-list">
                    {router.children.map((item) => (
                      <li key={item.title} className="sidebar-menu__menu-item">
                        <NavLink
                          to={`${url}/${item.route}`}
                          onClick={close}
                          className={({ isActive }) =>
                            isActive ? 'sidebar-menu__menu-item_active' : ''
                          }>
                          {item.title}
                        </NavLink>
                      </li>
                    ))}
                  </ul>
                </li>
              );
            } else {
              return (
                <li key={router.title} className="sidebar-menu__menu-item">
                  <NavLink
                    to={`${url}/${router.route}`}
                    onClick={close}
                    className={({ isActive }) =>
                      isActive ? 'sidebar-menu__menu-item_active' : ''
                    }>
                    {router.title}
                  </NavLink>
                </li>
              );
            }
          })}
        </ul>
      </Sidebar>
    </>
  );
};
