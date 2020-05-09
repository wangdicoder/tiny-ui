import React from 'react';
import './header.scss';
import { NavLink } from 'react-router-dom';
import { version, repository } from '../../../../package.json';
import { Icon, Link } from '../../../../components';

export const Header = (): React.ReactElement => (
  <header className="header">
    <NavLink to="/" className="header__link">
      <div className="header__logo">
        <img src={require('../../assets/logo/logo.svg')} alt="logo" width={35} />
        <span className="header__title">Tiny UI</span>
      </div>
    </NavLink>
    <nav className="header__nav">
      <ul className="header__nav-list">
        <li className="header__nav-item">
          <NavLink exact to="/" className="header__link">
            Home
          </NavLink>
        </li>
        <li className="header__nav-item">
          <NavLink to="/guide" className="header__link">
            Guide
          </NavLink>
        </li>
        <li className="header__nav-item">
          <NavLink to="/components" className="header__link">
            Components
          </NavLink>
        </li>
        <li className="header__nav-item">
          <a
            href={repository.url}
            target="_blank"
            className="header__link"
            rel="noreferrer noopener">
            <span className="header__version">v{version}</span>
          </a>
        </li>
        <li className="header__nav-item">
          <Link href={repository.url} underline={false} rel="noreferrer noopener">
            <Icon name="github" color="#222" size={19} />
          </Link>
        </li>
      </ul>
    </nav>
  </header>
);
