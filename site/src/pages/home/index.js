import React from 'react';
import './home.scss';
import { Button, Icon } from 'tiny-ui/src';
import GitHubButton from 'react-github-btn';
import FeatureBlock from './components/feature-block';
import Footer from './components/footer';

const GitHub_URL = 'https://github.com/wangdicoder/tiny-ui-react';

const FEATURES = [
    {
        img: require('./img/concise.png'),
        title: 'Concise',
        desc: 'All components have easy and friendly api',
    }, {
        img: require('./img/direct.png'),
        title: 'Consistent',
        desc: 'All components have a consistent design style',
    }, {
        img: require('./img/elegant.png'),
        title: 'Elegant',
        desc: 'Thanks for React Hook, the source code is more light weight',
    }, {
        img: require('./img/adaptable.png'),
        title: 'Adaptable',
        desc: 'Completely customisable for all components',
    },
];

const Home = (props) => {

    const navigateToComponentPage = () => {
        props.history.push('/components');
    };

    const openGithub = () => {
        window.open(GitHub_URL);
    };

    return (
        <div className="home">
            <div className="home__slider">
                <div className="home__logo-container">
                    <img src={require('../../assets/react-logo.svg')} alt="react" className="home__react-logo"/>
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

            <div className="home__main">
                <h1 className="home__feature-title">Design Principle</h1>
                <div className="home__features">
                    {FEATURES.map((feature, idx) => (
                        <FeatureBlock key={idx} img={feature.img} title={feature.title} desc={feature.desc}/>
                    ))}
                </div>

                <h1 className="home__feature-title">Blueprint</h1>
                <p className="home__p">This project is still under development. However, before release version 1, we
                    will implement these components listing in the diagram below.</p>
                <p className="home__p">Disclaimer: this project is very much under development. The API is subject to
                    change without notice.</p>
                <img src={require('./img/blueprint.png')} alt="blueprint" className="home__blueprint"/>

            </div>
            <Footer/>
        </div>
    );
};

export default Home;
