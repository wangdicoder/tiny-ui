import * as React from 'react';
import {CSSTransition} from 'react-transition-group';

export type AnimatedProps = {
  isShow: boolean,
  transitionName: string,
  duration?: number,
  onEnd?: (node: HTMLElement) => void,
  children?: React.ReactNode,
} & typeof defaultProps;

const defaultProps = {
  duration: 300,
};

const Animated = (props: AnimatedProps) => {
  const {isShow, transitionName, duration, children, onEnd} = props;
  return (
    <CSSTransition
      in={isShow}
      unmountOnExit
      onExited={onEnd}
      classNames={transitionName}
      timeout={duration}>
      {children}
    </CSSTransition>
  );
};

Animated.defaultProps = defaultProps;

export default Animated;
