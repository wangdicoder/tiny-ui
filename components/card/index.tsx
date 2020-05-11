import Card, { CardProps } from './card';
import CardContent, { CardContentProps } from './card-content';

export { CardProps, CardContentProps };

type ICard = typeof Card & {
  Content: typeof CardContent;
};

const DefaultCard = Card as ICard;
DefaultCard.Content = CardContent;

export default DefaultCard;
