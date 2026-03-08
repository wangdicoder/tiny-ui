import { BaseProps } from '../_utils/props';

export interface CarouselItemProps extends BaseProps {
  children?: React.ReactNode;
}

const CarouselItem = (props: CarouselItemProps): React.ReactElement => {
  const { children, style, className } = props;
  return (
    <div style={style} className={className}>
      {children}
    </div>
  );
};

CarouselItem.displayName = 'CarouselItem';

export default CarouselItem;
