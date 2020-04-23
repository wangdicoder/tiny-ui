import React from 'react';
import './feature-block.scss';
import { Icon } from '../../../../components';

type Props = {
  icon: string;
  title: string;
  desc: string;
};

export const FeatureBlock = ({ icon, title, desc }: Props): React.ReactElement => (
  <div className="feature-block">
    <div className="feature-block__icon-container">
      <Icon name={icon} className="feature-block__icon" size={24} />
    </div>
    <h3 className="feature-block__title">{title}</h3>
    <p className="feature-block__desc">{desc}</p>
  </div>
);
