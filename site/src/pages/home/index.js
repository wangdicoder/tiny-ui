import React from 'react';
import './home.scss';
import { Button, Icon } from 'tiny-ui/src';
import GitHubButton from 'react-github-btn';
import FeatureBlock from './components/feature-block';
import Footer from './components/footer';

const GitHub_URL = 'https://github.com/wangdicoder/tiny-ui-react';

const FEATURES = [
    {
        img: require('./img/concise'),
        title: 'Concise',
    }, {
        img: require('./img/direct'),
        title: 'Direct',
    }, {
        img: require('./img/elegant'),
        title: 'Elegant',
    }, {
        img: require('./img/adaptable'),
        title: 'Adaptable',
    },
];

const Home = (props) => {

    const navigateToComponentPage = () => {
        props.history.push('/get-started');
    };

    const openGithub = () => {
        window.open(GitHub_URL);
    };

    return (
        <div className="home">
            <div className="home__slider">
                <div className="home__logo-container">
                    <img src={require('../../assets/logo.svg')} alt="logo" className="home__logo"/>
                </div>
                <div>
                    <h1 className="home__title">Tiny UI</h1>
                    <h2 className="home__subtitle">A Friendly UI Component Set for React</h2>
                    <div className="home__btn-group">
                        <Button ripple color="primary" round size="lg" style={{ width: '140px' }}
                                onClick={navigateToComponentPage}>Start</Button>
                        <Button ripple round size="lg" icon={<Icon type="github" color="#000"/>}
                                onClick={openGithub}>GitHub</Button>
                        <GitHubButton href={GitHub_URL} data-size="large" data-show-count="true"
                                      aria-label="Star wangdicoder/tiny-ui-react on GitHub">Star</GitHubButton>
                    </div>
                </div>
            </div>

            <h1 className="home__feature-title">Design Principle</h1>
            <div className="home__features">
                {FEATURES.map((feature, idx) => (
                    <FeatureBlock key={idx} img={feature.img} title={feature.title} desc={feature.desc}/>
                ))}
            </div>

            <Footer/>
        </div>
    );
};

export default Home;
