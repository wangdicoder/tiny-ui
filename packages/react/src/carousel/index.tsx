import Carousel from './carousel';
import CarouselItem from './carousel-item';

export type { CarouselProps, CarouselRef, DotPlacement, CarouselEffect } from './types';
export type { CarouselItemProps } from './carousel-item';

type ICarousel = typeof Carousel & {
  Item: typeof CarouselItem;
};

const DefaultCarousel = Carousel as unknown as ICarousel;
DefaultCarousel.Item = CarouselItem;

export default DefaultCarousel;
