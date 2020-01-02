import React from 'react';
import './home.scss';
import { RouteComponentProps } from 'react-router-dom';
import { Button, Icon } from '../../../../components';
import FeatureBlock from '../../components/feature-block';
import Footer from '../../components/footer';
import { repository } from '../../../../package.json';

const FEATURES = [
  {
    img: require('../../assets/home/ic_concise.png'),
    title: 'Concise',
    desc: 'All components have easy and friendly api',
  },
  {
    img: require('../../assets/home/ic_direct.png'),
    title: 'Consistent',
    desc: 'All components have a consistent design style',
  },
  {
    img: require('../../assets/home/ic_elegant.png'),
    title: 'Elegant',
    desc: 'Thanks for React Hook, the source code is more light weight',
  },
  {
    img: require('../../assets/home/ic_adaptable.png'),
    title: 'Adaptable',
    desc: 'Completely customisable for all components',
  },
];

export default class Home extends React.PureComponent<RouteComponentProps, any> {
  _navigateToComponentPage = () => {
    this.props.history.push('/components');
  };

  _openGithub = (): void => {
    window.open(repository.url);
  };

  render(): React.ReactElement {
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
              color="primary"
              size="lg"
              style={{ width: '140px' }}
              onClick={this._navigateToComponentPage}>
              Get Started
            </Button>
            <Button
              className="home__btn"
              size="lg"
              icon={<Icon type="github" color="#000" />}
              onClick={this._openGithub}>
              GitHub
            </Button>
          </div>
        </div>

        <div className="home__section">
          <h1 className="home__feature-title">Design Principle</h1>
          <div className="home__features">
            {FEATURES.map(feature => (
              <FeatureBlock
                key={feature.title}
                img={feature.img}
                title={feature.title}
                desc={feature.desc}
              />
            ))}
          </div>
        </div>

        <div className="home__section">
          <h1 className="home__feature-title">Blueprint</h1>
          <p className="home__p">
            This project is still under development. However, before release version 1, we will
            implement these components listing in the diagram below.
          </p>
          <p className="home__p">
            Disclaimer: this project is very much under development. The API is subject to change
            without notice.
          </p>
          <img
            src={require('../../assets/home/blueprint.png')}
            alt="blueprint"
            className="home__blueprint"
          />
        </div>
        <Footer />
      </div>
    );
  }
}
