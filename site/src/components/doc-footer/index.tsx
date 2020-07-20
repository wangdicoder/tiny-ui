import React from 'react';
import './component-page.scss';
import { Link, useRouteMatch, useLocation } from 'react-router-dom';
import { RouterItem } from '../../routers';
import { Icon } from '../../../../components';

type Props = {
  routers: RouterItem[];
};

const getSiblingMenus = (routerName: string, routers: RouterItem[]): [RouterItem, RouterItem] => {
  const idx = routers.findIndex((menu) => {
    return menu.route === routerName;
  });
  if (idx === 0) {
    return [routers[idx], routers[idx + 1]];
  } else if (idx === routers.length - 1) {
    return [routers[idx - 1], routers[idx]];
  } else {
    return [routers[idx - 1], routers[idx + 1]];
  }
};

export const DocFooter = ({ routers }: Props): React.ReactElement => {
  const { pathname } = useLocation();
  const match = useRouteMatch();
  const paths = pathname.split('/');
  const currRouteName = paths[paths.length - 1];
  const siblingMenus = getSiblingMenus(currRouteName, routers);
  return (
    <footer className="component-page__footer">
      {siblingMenus[0] && siblingMenus[0].route !== currRouteName ? (
        <Link to={`${match.url}/${siblingMenus[0].route!}`}>
          <Icon name="left" className="component-page__footer-icon-left" />
          <span className="component-page__footer-label">{siblingMenus[0].title}</span>
        </Link>
      ) : (
        <div />
      )}
      {siblingMenus[1] && siblingMenus[1].route !== currRouteName && (
        <Link to={`${match.url}/${siblingMenus[1].route!}`}>
          <span className="component-page__footer-label">{siblingMenus[1].title}</span>
          <Icon name="right" className="component-page__footer-icon-right" />
        </Link>
      )}
    </footer>
  );
};
