import * as React from 'react';
import {CSSTransition} from 'react-transition-group';

export type AnimateProps = {
    isShow: boolean,
    transitionName: string,
    duration: number,
    onEnd?: (node: HTMLElement) => void,
    children?: React.ReactNode,
};

const Animate = (props: AnimateProps) => {
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

Animate.defaultProps = {
    duration: 300,
};

export default Animate;
