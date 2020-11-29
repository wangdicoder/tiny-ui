import React from 'react';
import './component-overview.scss';
import { useHistory, useRouteMatch } from 'react-router-dom';
import { Row, Tag } from '../../../../components';
import { COMPONENT_MENU } from '../../routers';

const ComponentOverview = () => {
  const { url } = useRouteMatch();
  const history = useHistory();
  const numOfComps = COMPONENT_MENU.reduce((res, i) => {
    res += i.children!.length;
    return res;
  }, 0);
  return (
    <div className="component-overview">
      <h1 className="markdown__heading-1">Component Overview</h1>
      <p className="markdown__p">
        There is an overview of all components. Currently Tiny-UI provides <b>{numOfComps}</b>{' '}
        components.
      </p>
      {COMPONENT_MENU.map((router) => (
        <div key={router.title}>
          <h3 className="markdown__heading-3">
            {router.title} <Tag>{router.children?.length}</Tag>
          </h3>
          <Row gutter={24} gutterSide>
            {router.children!.map((item) => (
              <div
                className="component-overview__btn"
                key={item.title}
                onClick={() => history.push(`${url}/${item.route!}`)}>
                <div className="component-overview__btn-title">{item.title}</div>
                <img src={require(`../../assets/icon/${item.route}.svg`)} alt="img" />
              </div>
            ))}
          </Row>
        </div>
      ))}
    </div>
  );
};

export default ComponentOverview;
