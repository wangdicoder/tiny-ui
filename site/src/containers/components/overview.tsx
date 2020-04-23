import React from 'react';
import { useHistory, useRouteMatch } from 'react-router-dom';
import { Row, Button } from '../../../../components';
import { COMPONENT_MENU } from '../../routers';

const ComponentOverview = () => {
  const { url } = useRouteMatch();
  const history = useHistory();
  const numOfComps = COMPONENT_MENU.reduce((res, i) => {
    res += i.children!.length;
    return res;
  }, 0);
  return (
    <div>
      <h1 className="md__heading-1">Component Overview</h1>
      <p className="md__p">
        There is an overview of all components. Currently Tiny-UI provides <b>{numOfComps}</b>{' '}
        components.
      </p>
      {COMPONENT_MENU.map(router => (
        <div key={router.title}>
          <h2 className="md__heading-2">{router.title}</h2>
          <Row gutter={24} gutterSide>
            {router.children!.map(item => (
              <Button onClick={() => history.push(`${url}/${item.route!}`)}>{item.title}</Button>
            ))}
          </Row>
        </div>
      ))}
    </div>
  );
};

export default ComponentOverview;
