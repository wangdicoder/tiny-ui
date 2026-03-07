import React from 'react';
import './component-overview.scss';
import { useNavigate } from 'react-router-dom';
import { Row, Tag, Button } from '../../../../components';
import { COMPONENT_MENU } from '../../routers';

const ComponentOverview = () => {
  const navigate = useNavigate();
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
              <Button
                className="component-overview__btn"
                key={item.title}
                onClick={() => navigate(`/components/${item.route!}`)}>
                {item.title}
              </Button>
            ))}
          </Row>
        </div>
      ))}
    </div>
  );
};

export default ComponentOverview;
