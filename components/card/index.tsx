import React from 'react';
import Card, { CardProps } from './card';
import CardContent, { CardContentProps } from './card-content';

export { CardProps, CardContentProps };

type ICard = React.FC<CardProps> & {
  Content: typeof CardContent;
};

const defaultCard = Card as ICard;
defaultCard.Content = CardContent;

export default defaultCard;
