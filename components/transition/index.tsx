import React from 'react';
import { CSSTransition } from 'react-transition-group';
import { CSSTransitionProps } from 'react-transition-group/CSSTransition';

export type AnimationName =
  | 'zoom-center-top'
  | 'zoom-center-bottom'
  | 'zoom-center-left'
  | 'zoom-center-right'
  | 'zoom-top-start'
  | 'zoom-top'
  | 'zoom-top-end'
  | 'zoom-bottom-start'
  | 'zoom-bottom'
  | 'zoom-bottom-end'
  | 'zoom-left-start'
  | 'zoom-left'
  | 'zoom-left-end'
  | 'zoom-right-start'
  | 'zoom-right'
  | 'zoom-right-end';

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
    prefix = 'ty',
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
      classNames={classNames ? classNames : `${prefix}-${animation}`}>
      {wrapper ? <div>{children}</div> : children}
    </CSSTransition>
  );
};

Transition.displayName = 'Transition';

export default Transition;
