import * as React from 'react';
import { CSSTransition } from 'react-transition-group';

export type AnimatedProps = {
    isShow: boolean,
    transitionName: string,
    duration?: number,
    isUnmount?: boolean,
    onEnd?: (node: HTMLElement) => void,
    children?: React.ReactNode,
} & typeof defaultProps;

const defaultProps = {
    duration: 300,
    isUnmount: true,
};

const Animated = (props: AnimatedProps) => {
    const { isShow, isUnmount, transitionName, duration, children, onEnd } = props;
    return (
        <CSSTransition
            in={isShow}
            unmountOnExit={isUnmount}
            onExited={onEnd}
            classNames={transitionName}
            timeout={duration}>
            {typeof children === 'function' ? (status) => children(status) : children}
        </CSSTransition>
    );
};

Animated.defaultProps = defaultProps;

export default Animated;
