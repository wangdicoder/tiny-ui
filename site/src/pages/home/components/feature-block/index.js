import React from 'react';
import './feature-block.scss';

const FeatureBlock = ({ img, title, desc }) => (
	<div className="feature-block">
		<img className="feature-block__img" src={img} alt={title}/>
		<h3 className="feature-block__title">{title}</h3>
		<p className="feature-block__desc">{desc}</p>
	</div>
);

export default FeatureBlock;
