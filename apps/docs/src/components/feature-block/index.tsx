import React from 'react';
import './feature-block.scss';
import type { IconProps } from '@tiny-design/icons';

type Props = {
  icon: React.FC<IconProps>;
  title: string;
  desc: string;
  style?: React.CSSProperties;
};

export const FeatureBlock = ({ icon: IconComponent, title, desc, style }: Props): React.ReactElement => (
  <div className="feature-block" style={style}>
    <div className="feature-block__icon-container">
      <IconComponent className="feature-block__icon" size={24} />
    </div>
    <h3 className="feature-block__title">{title}</h3>
    <p className="feature-block__desc">{desc}</p>
  </div>
);
