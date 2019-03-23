import * as React from 'react';
import { useEffect } from 'react';
import './style/index.css';
import classNames from 'classnames';
import Portal from '../portal';
import { CSSTransition } from 'react-transition-group';

export type OverlayProps = {
    isShow?: boolean,
    isMount?: boolean,
    clickCallback?: () => any,
    type?: 'default' | 'inverted',
    prefixCls?: string,
    children?: React.ReactNode,
} & typeof defaultProps;

const defaultProps = {
    isShow: false,
    isMount: true,
    prefixCls: 'ty-overlay',
    type: 'default',
    clickCallback: () => {
    },
};

const Overlay = (props: OverlayProps) => {
    const { isShow, isMount, type, clickCallback, prefixCls, children } = props;

    const cls = classNames(
        prefixCls,
        `${prefixCls}_${type}`,
    );

    useEffect(() => {
        document.body.style.overflow = 'hidden';
        return () => {
            document.body.style.overflow = null;
        };
    });

    return (
        <Portal>
            <CSSTransition
                unmountOnExit={isMount} in={isShow}
                classNames={`${prefixCls}_fade`} timeout={300}>
                <div className={cls} onClick={clickCallback}>
                    {children}
                </div>
            </CSSTransition>
        </Portal>
    );
};

Overlay.defaultProps = defaultProps;

export default Overlay;
