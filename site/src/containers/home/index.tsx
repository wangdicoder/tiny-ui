import React from 'react';
import './home.scss';
import { useNavigate } from 'react-router-dom';
import { Button, Icon } from '../../../../components';
import { FeatureBlock } from '../../components/feature-block';
import { Footer } from './footer';
import { useLocaleContext } from '../../context/locale-context';
import pkg from '../../../../package.json';

const { repository } = pkg;

const HomePage = (): React.ReactElement => {
  const navigate = useNavigate();
  const { siteLocale: s } = useLocaleContext();

  const features = [
    { icon: 'colorlens', title: s.home.features.themeable, desc: s.home.features.themeableDesc },
    { icon: 'org-unit', title: s.home.features.elegant, desc: s.home.features.elegantDesc },
    { icon: 'puzzle', title: s.home.features.composable, desc: s.home.features.composableDesc },
    { icon: 'accessible', title: s.home.features.accessible, desc: s.home.features.accessibleDesc },
  ];

  const stats = [
    { value: '65+', label: s.home.stats.components },
    { value: '7', label: s.home.stats.categories },
    { value: '100%', label: s.home.stats.typescript },
    { value: 'MIT', label: s.home.stats.license },
  ];

  const categories = [
    { icon: 'star', name: s.categories.foundation, count: 5, route: 'button' },
    { icon: 'structure', name: s.categories.layout, count: 6, route: 'aspect-ratio' },
    { icon: 'process', name: s.categories.navigation, count: 5, route: 'breadcrumb' },
    { icon: 'eye', name: s.categories.dataDisplay, count: 15, route: 'carousel' },
    { icon: 'edit-file', name: s.categories.formItem, count: 17, route: 'date-picker' },
    { icon: 'feedback', name: s.categories.feedback, count: 12, route: 'alert' },
    { icon: 'puzzle', name: s.categories.miscellany, count: 5, route: 'back-top' },
  ];

  return (
    <div className="home">
      <div className="home__react-login-container">
        <img
          src={require('../../assets/logo/react-logo.svg')}
          alt="react"
          className="home__react-logo"
        />
      </div>
      <div className="home__slider">
        <img src={require('../../assets/logo/logo.svg')} alt="logo" className="home__logo" />
        <h1 className="home__title">Tiny UI</h1>
        <h2 className="home__subtitle">{s.home.subtitle}</h2>
        <div className="home__btn-group">
          <Button
            className="home__btn"
            btnType="primary"
            size="lg"
            onClick={() => navigate('/guide')}>
            {s.home.getStarted}
          </Button>
          <Button
            className="home__btn"
            size="lg"
            icon={<Icon name="github" color="currentColor" />}
            onClick={() => window.open(repository.url)}>
            {s.home.github}
          </Button>
        </div>
      </div>

      <div className="home__section">
        <h1 className="home__feature-title">{s.home.designPrinciple}</h1>
        <div className="home__features">
          {features.map((feature, i) => (
            <FeatureBlock
              key={i}
              icon={feature.icon}
              title={feature.title}
              desc={feature.desc}
              style={{ animationDelay: `${i * 0.1}s` }}
            />
          ))}
        </div>
      </div>

      <div className="home__stats">
        {stats.map((stat, i) => (
          <div className="home__stat" key={i} style={{ animationDelay: `${i * 0.1}s` }}>
            <span className="home__stat-value">{stat.value}</span>
            <span className="home__stat-label">{stat.label}</span>
          </div>
        ))}
      </div>

      <div className="home__section">
        <h1 className="home__feature-title">{s.home.componentCategories}</h1>
        <div className="home__categories">
          {categories.map((cat, i) => (
            <div
              className="home__category"
              key={i}
              style={{ animationDelay: `${i * 0.08}s` }}
              onClick={() => navigate(`/components/${cat.route}`)}>
              <Icon name={cat.icon} size={32} color="currentColor" />
              <h3 className="home__category-name">{cat.name}</h3>
              <span className="home__category-count">{s.home.nComponents(cat.count)}</span>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default HomePage;
