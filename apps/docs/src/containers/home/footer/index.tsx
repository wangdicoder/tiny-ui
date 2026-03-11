import React from 'react';
import './footer.scss';
import pkg from '../../../../../../packages/react/package.json';

const { version, repository } = pkg;
import { Icon } from '@tiny-ui/react';
import logoSvg from '../../../assets/logo/logo.svg';

export const Footer = (): React.ReactElement => (
  <footer className="footer">
    <div className="footer__main">
      <img src={logoSvg} alt="logo" width={40} />
      <h3 className="footer__title">Tiny UI</h3>
      <p className="footer__version">- v{version} -</p>
    </div>
    <a href={repository.url} target="_blank" className="footer__link" rel="noreferrer noopener">
      <div className="footer__github">
        <Icon name="github" size={25} color="#fff" className="footer__icon" />
        <span>GitHub</span>
      </div>
    </a>
  </footer>
);
