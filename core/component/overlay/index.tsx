import * as React from 'react';
import { useEffect, useState } from 'react';
import './style/index.css';
import classNames from 'classnames';
import Portal from '../portal';
import { CSSTransition } from 'react-transition-group';

export type OverlayProps = {
    isShow?: boolean,
    unmountOnExit?: boolean,
    clickCallback?: () => any,
    type?: 'default' | 'inverted',
    prefixCls?: string,
    children?: React.ReactNode,
} & typeof defaultProps;

const defaultProps = {
    isShow: false,
    unmountOnExit: true,
    prefixCls: 'ty-overlay',
    type: 'default',
    clickCallback: () => {
    },
};

const Overlay = (props: OverlayProps) => {
    const { isShow, unmountOnExit, type, clickCallback, prefixCls, children } = props;
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

    const _handleMouseDown = () => {
        clickCallback();
    };

    useEffect(() => {
        document.addEventListener('mousedown', _handleMouseDown);
        return () => {
            document.removeEventListener('mousedown', _handleMouseDown);
        };
    });

    return (
        <Portal>
            <CSSTransition
                in={isShow}
                mountOnEnter={true}
                onEnter={() => setIsMount(true)}
                onExited={() => setIsMount(false)}
                unmountOnExit={unmountOnExit}
                classNames={`${prefixCls}_fade`}
                timeout={350}>
                <div className={cls}>
                    {children}
                </div>
            </CSSTransition>
        </Portal>
    );
};

Overlay.defaultProps = defaultProps;

export default Overlay;
