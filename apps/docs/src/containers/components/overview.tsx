import React, { useMemo } from 'react';
import './component-overview.scss';
import { useNavigate } from 'react-router-dom';
import { Card, Tag } from '@tiny-design/react';
import { getComponentMenu } from '../../routers';
import { useLocaleContext } from '../../context/locale-context';

const iconModules = import.meta.glob<string>('../../assets/icon/*.svg', { eager: true, import: 'default' });

function getSvgSrc(route: string): string | undefined {
  return iconModules[`../../assets/icon/${route}.svg`];
}

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
        <div key={router.title} className="component-overview__category">
          <h3 className="markdown__heading-3">
            {router.title} <Tag>{router.children?.length}</Tag>
          </h3>
          <div className="component-overview__grid">
            {router.children!.map((item) => {
              const svgSrc = getSvgSrc(item.route!);
              return (
                <Card
                  className="component-overview__card"
                  key={item.route}
                  hoverable
                  onClick={() => navigate(`/components/${item.route!}`)}>
                  <div className="component-overview__card-img">
                    {svgSrc ? (
                      <img src={svgSrc} alt={item.title} />
                    ) : (
                      <div className="component-overview__card-placeholder" />
                    )}
                  </div>
                  <div className="component-overview__card-name">{item.title}</div>
                </Card>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ComponentOverview;
