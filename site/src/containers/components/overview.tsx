import React, { useMemo } from 'react';
import './component-overview.scss';
import { useNavigate } from 'react-router-dom';
import { Row, Tag, Button } from '../../../../components';
import { getComponentMenu } from '../../routers';
import { useLocaleContext } from '../../context/locale-context';

const ComponentOverview = () => {
  const navigate = useNavigate();
  const { siteLocale: s } = useLocaleContext();
  const componentMenu = useMemo(() => getComponentMenu(s), [s]);
  const numOfComps = componentMenu.reduce((res, i) => {
    res += i.children!.length;
    return res;
  }, 0);
  return (
    <div className="component-overview">
      <h1 className="markdown__heading-1">{s.overview.title}</h1>
      <p className="markdown__p">{s.overview.desc(numOfComps)}</p>
      {componentMenu.map((router) => (
        <div key={router.title}>
          <h3 className="markdown__heading-3">
            {router.title} <Tag>{router.children?.length}</Tag>
          </h3>
          <Row gutter={24} gutterSide>
            {router.children!.map((item) => (
              <Button
                className="component-overview__btn"
                key={item.route}
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
