import * as React from 'react';
import { useState } from 'react';
import classNames from 'classnames';
import Portal from '../portal';
import { CSSTransition } from 'react-transition-group';

export type OverlayMaskType = 'default' | 'inverted' | 'none';

export type OverlayProps = {
    isShow?: boolean,
    unmountOnExit?: boolean,
    clickCallback?: () => any,
    afterClose?: () => any,
    zIndex?: number,
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
    clickCallback: () => {
    },
    afterClose: () => {},
};

const Overlay = (props: OverlayProps) => {
    const { isShow, unmountOnExit, type, zIndex, clickCallback, afterClose, prefixCls, children, style } = props;
    const [isMount, setIsMount] = useState(false);
    const cls = classNames(
        prefixCls,
        `${prefixCls}_${type}`,
        { [`${prefixCls}_hidden`]: !isMount },
    );

    if (isShow) {
        document.body.style.overflow = 'hidden';
    } else {
        document.body.style.overflow = null;
    }

    return (
        <Portal>
            <CSSTransition
                in={isShow}
                mountOnEnter={true}
                onEnter={() => setIsMount(true)}
                onExited={() => {
                    setIsMount(false);
                    afterClose();
                }}
                unmountOnExit={unmountOnExit}
                classNames={`${prefixCls}_fade`}
                timeout={350}>
                <div className={cls} onClick={clickCallback} style={{zIndex, ...style}}>
                    {children}
                </div>
            </CSSTransition>
        </Portal>
    );
};

Overlay.defaultProps = defaultProps;

export default Overlay;
