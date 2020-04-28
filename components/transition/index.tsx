import React from 'react';
import { CSSTransition } from 'react-transition-group';
import { CSSTransitionProps } from 'react-transition-group/CSSTransition';

export type AnimationName = 'zoom-in-top' | 'zoom-in-left' | 'zoom-in-bottom' | 'zoom-in-right';

export interface TransitionProps extends Partial<CSSTransitionProps> {
  /** Animation prefix */
  prefix?: string;

  /** Preset animation name */
  animation?: AnimationName;

  /** Prevent the transition conflict with the inner component */
  wrapper?: boolean;
  children?: React.ReactNode;
}

const Transition = (props: TransitionProps): React.ReactElement => {
  const {
    timeout = 250,
    unmountOnExit = true,
    appear = true,
    prefix = 'ty-',
    animation,
    classNames,
    children,
    wrapper,
    ...otherProps
  } = props;

  return (
    <CSSTransition
      {...otherProps}
      timeout={timeout}
      appear={appear}
      unmountOnExit={unmountOnExit}
      classNames={classNames ? classNames : `${prefix}${animation}`}>
      {wrapper ? <div>{children}</div> : children}
    </CSSTransition>
  );
};

export default Transition;
