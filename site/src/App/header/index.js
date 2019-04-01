import React from 'react';
import './header.scss';
import { NavLink, Link } from 'react-router-dom';
import { version } from '../../../../core/package';

const Header = () => (
    <header className="header">
        <Link to="/home">
            <div className="header__logo">
                <img src={require('../../assets/logo.svg')} alt="logo" width={35}/>
                <span className="header__title">Tiny UI</span>
            </div>
        </Link>
        <nav className="header__nav">
            <ul className="header__nav-list">
                <li className="header__nav-item"><NavLink to="/home">Home</NavLink></li>
                <li className="header__nav-item"><NavLink to="/components">Components</NavLink></li>
                <li className="header__nav-item"><span className="header__version">v{version}</span>
                </li>
            </ul>
        </nav>
    </header>
);

export default Header;
