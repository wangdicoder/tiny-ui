import React from 'react';
import './home.scss';
import { useNavigate } from 'react-router-dom';
import { Button, Icon } from '../../../../components';
import { FeatureBlock } from '../../components/feature-block';
import { Footer } from './footer';
import pkg from '../../../../package.json';

const { repository } = pkg;

const FEATURES = [
  {
    icon: 'colorlens',
    title: 'Themeable',
    desc:
      'Quickly and easily reference values from your theme throughout your entire application with any components.',
  },
  {
    icon: 'org-unit',
    title: 'Elegant',
    desc: 'Thanks for React Hook, the source code is more light weight.',
  },
  {
    icon: 'puzzle',
    title: 'Composable',
    desc:
      'Completely customisable for all components. You can leverage any component to create new things.',
  },
  {
    icon: 'accessible',
    title: 'Accessible',
    desc:
      'Strictly follows WAI-ARIA standards. All components come with proper attributes and keyboard interactions.',
  },
];

const STATS = [
  { value: '65+', label: 'Components' },
  { value: '7', label: 'Categories' },
  { value: '100%', label: 'TypeScript' },
  { value: 'MIT', label: 'License' },
];

const CATEGORIES = [
  { icon: 'star', name: 'Foundation', count: 5, route: 'button' },
  { icon: 'structure', name: 'Layout', count: 6, route: 'aspect-ratio' },
  { icon: 'process', name: 'Navigation', count: 5, route: 'breadcrumb' },
  { icon: 'eye', name: 'Data Display', count: 15, route: 'carousel' },
  { icon: 'edit-file', name: 'Form Item', count: 17, route: 'date-picker' },
  { icon: 'feedback', name: 'Feedback', count: 12, route: 'alert' },
  { icon: 'puzzle', name: 'Miscellany', count: 5, route: 'back-top' },
];

const HomePage = (): React.ReactElement => {
  const navigate = useNavigate();

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
        <h2 className="home__subtitle">A Friendly UI Component Set for React</h2>
        <div className="home__btn-group">
          <Button
            className="home__btn"
            btnType="primary"
            size="lg"
            onClick={() => navigate('/guide')}>
            Get Started
          </Button>
          <Button
            className="home__btn"
            size="lg"
            icon={<Icon name="github" color="currentColor" />}
            onClick={() => window.open(repository.url)}>
            GitHub
          </Button>
        </div>
      </div>

      <div className="home__section">
        <h1 className="home__feature-title">Design Principle</h1>
        <div className="home__features">
          {FEATURES.map((feature, i) => (
            <FeatureBlock
              key={feature.title}
              icon={feature.icon}
              title={feature.title}
              desc={feature.desc}
              style={{ animationDelay: `${i * 0.1}s` }}
            />
          ))}
        </div>
      </div>

      <div className="home__stats">
        {STATS.map((stat, i) => (
          <div className="home__stat" key={stat.label} style={{ animationDelay: `${i * 0.1}s` }}>
            <span className="home__stat-value">{stat.value}</span>
            <span className="home__stat-label">{stat.label}</span>
          </div>
        ))}
      </div>

      <div className="home__section">
        <h1 className="home__feature-title">Component Categories</h1>
        <div className="home__categories">
          {CATEGORIES.map((cat, i) => (
            <div
              className="home__category"
              key={cat.name}
              style={{ animationDelay: `${i * 0.08}s` }}
              onClick={() => navigate(`/components/${cat.route}`)}>
              <Icon name={cat.icon} size={32} color="#6E41BF" />
              <h3 className="home__category-name">{cat.name}</h3>
              <span className="home__category-count">{cat.count} components</span>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default HomePage;
