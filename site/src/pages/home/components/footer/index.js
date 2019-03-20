import React from 'react';
import './footer.css';
import { version } from '../../../../../package';

const Footer = () => (
	<footer className="footer">
		<div className="footer__main">
			<img src={require('../../../../assets/logo-gray.svg')} alt="logo" width={40}/>
			<h3 className="footer__title">Tiny UI</h3>
			<p className="footer__version">- v{version} -</p>
		</div>
		<div className="footer__github">
			{/*<IoLogoGithub className="footer__icon"/>*/}
			<span>GitHub</span>
		</div>
	</footer>
);

export default Footer;
