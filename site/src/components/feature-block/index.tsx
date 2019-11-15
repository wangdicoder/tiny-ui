import React from 'react';
import './feature-block.scss';

export type FeatureBlockProps = {
  img: string;
  title: string;
  desc: string;
};

const FeatureBlock = ({ img, title, desc }: FeatureBlockProps) => (
  <div className="feature-block">
    <img className="feature-block__img" src={img} alt={title} />
    <h3 className="feature-block__title">{title}</h3>
    <p className="feature-block__desc">{desc}</p>
  </div>
);

export default FeatureBlock;
