import { BaseProps } from '../_utils/props';

export type DotPlacement = 'top' | 'bottom' | 'left' | 'right';
export type CarouselEffect = 'scrollx' | 'fade';

export interface CarouselProps extends BaseProps {
  /** Whether to show arrow buttons */
  arrows?: boolean;
  /** Whether to auto-scroll */
  autoplay?: boolean;
  /** Delay between auto-scroll in ms */
  autoplaySpeed?: number;
  /** Dot indicator placement */
  dotPlacement?: DotPlacement;
  /** Whether to show dot indicators */
  dots?: boolean | { className?: string };
  /** Enable drag-to-scroll */
  draggable?: boolean;
  /** Transition effect */
  effect?: CarouselEffect;
  /** CSS transition easing function */
  easing?: string;
  /** Infinite loop */
  infinite?: boolean;
  /** Animation speed in ms */
  speed?: number;
  /** Wait for animation to complete before switching */
  waitForAnimate?: boolean;
  /** Fires after slide changes */
  afterChange?: (current: number) => void;
  /** Fires before slide changes */
  beforeChange?: (current: number, next: number) => void;
  children: React.ReactElement[];
}

export interface CarouselRef {
  /** Go to a specific slide */
  goTo: (slideNumber: number, dontAnimate?: boolean) => void;
  /** Go to the next slide */
  next: () => void;
  /** Go to the previous slide */
  prev: () => void;
}
