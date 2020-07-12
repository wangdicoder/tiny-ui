import React from 'react';
import './sidebar-menu.scss';
import { NavLink } from 'react-router-dom';
import { RouterItem } from '../../routers';
import { Layout } from '../../../../components';

const { Sidebar } = Layout;

type Props = {
  routers: RouterItem[];
  url: string;
};

export const SidebarMenu = (props: Props): React.ReactElement => {
  const { routers, url } = props;
  return (
    <Sidebar theme="light" width={250} className="sidebar-menu">
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
                        to={{
                          pathname: `${url}/${item.route}`,
                          state: { name: item.title },
                        }}
                        activeClassName="sidebar-menu__menu-item_active">
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
                  to={{
                    pathname: `${url}/${router.route}`,
                    state: { name: router.title },
                  }}
                  activeClassName="sidebar-menu__menu-item_active">
                  {router.title}
                </NavLink>
              </li>
            );
          }
        })}
      </ul>
    </Sidebar>
  );
};
