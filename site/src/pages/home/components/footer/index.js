import React from 'react';
import './footer.scss';
import { version } from '../../../../../../core/package';
import {Icon} from 'tiny-ui/src';

const Footer = () => (
	<footer className="footer">
		<div className="footer__main">
			<img src={require('../../../../assets/logo.svg')} alt="logo" width={40}/>
			<h3 className="footer__title">Tiny UI</h3>
			<p className="footer__version">- v{version} -</p>
		</div>
		<div className="footer__github">
			<Icon type="github" size={25} color="#fff" className="footer__icon"/>
			<span>GitHub</span>
		</div>
	</footer>
);

export default Footer;
