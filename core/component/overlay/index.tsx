import * as React from 'react';
import { useEffect } from 'react';
import './style/index.css';
import classNames from 'classnames';

export type OverlayProps = {
    type?: 'default' | 'inverted',
    prefixCls?: string,
    children?: React.ReactNode,
} & typeof defaultProps;

const defaultProps = {
    prefixCls: 'ty-overlay',
    type: 'default',
};

const Overlay = (props: OverlayProps) => {
    const { type, prefixCls, children } = props;
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
        <div className={cls}>
            {children}
        </div>
    );
};

Overlay.defaultProps = defaultProps;

export default Overlay;
