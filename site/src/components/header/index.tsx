import React from 'react';
import './header.scss';
import { NavLink } from 'react-router-dom';
import pkg from '../../../../package.json';
import { Icon, Link } from '../../../../components';
import { useSidebarToggle } from '../../context/sidebar-toggle-context';

const { version, repository } = pkg;

export const Header = (): React.ReactElement => {
  const { toggle } = useSidebarToggle();

  return (
    <header className="header">
      <div className="header__left">
        <button
          className="header__menu-toggle"
          onClick={toggle}
          aria-label="Toggle menu">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="3" y1="6" x2="21" y2="6" />
            <line x1="3" y1="12" x2="21" y2="12" />
            <line x1="3" y1="18" x2="21" y2="18" />
          </svg>
        </button>
        <NavLink to="/" className="header__link">
          <div className="header__logo">
            <img src={require('../../assets/logo/logo.svg')} alt="logo" width={35} />
            <span className="header__title">Tiny UI</span>
          </div>
        </NavLink>
      </div>
      <nav className="header__nav">
        <ul className="header__nav-list">
          <li className="header__nav-item">
            <NavLink end to="/" className="header__link">
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
};
