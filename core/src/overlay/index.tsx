import React, { useEffect } from 'react';
import classNames from 'classnames';
import Portal from '../portal';
import { CSSTransition } from 'react-transition-group';

export type OverlayMaskType = 'default' | 'inverted' | 'none';

export type OverlayProps = {
    isShow?: boolean,
    unmountOnExit?: boolean,
    clickCallback?: () => void,
    zIndex?: number,
    onEnter?: () => void,
    onExit?: () => void,
    onEntered?: () => void,
    onExited?: () => void,
    type?: OverlayMaskType,
    prefixCls?: string,
    style?: React.CSSProperties,
    children?: React.ReactNode,
} & typeof defaultProps;

const defaultProps = {
    isShow: false,
    unmountOnExit: true,
    zIndex: 1000,
    prefixCls: 'ty-overlay',
    type: 'default',
};

const Overlay = (props: OverlayProps) => {
    const {
        isShow, unmountOnExit, type, zIndex, clickCallback, onEnter, onEntered, onExit, onExited,
        prefixCls, children, style,
    } = props;
    const cls = classNames(
        prefixCls,
        `${prefixCls}_${type}`,
    );

    useEffect(() => {
        if (isShow) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = null;
        }
    });

    return (
        <Portal>
            <CSSTransition
                appear={true}
                onEnter={onEnter}
                onEntered={onEntered}
                onExit={onExit}
                onExited={onExited}
                in={isShow}
                mountOnEnter={true}
                unmountOnExit={unmountOnExit}
                classNames={`${prefixCls}_fade`}
                timeout={{ exit: 300, enter: 0 }}>
                <div className={cls} onClick={clickCallback} style={{ zIndex, ...style }}>{children}</div>
            </CSSTransition>
        </Portal>
    );
};

Overlay.defaultProps = defaultProps;

export default Overlay;
