import React, { useState, useEffect, useRef, useContext } from 'react';
import classnames from 'classnames';

import AffixContainer from './affix-container';
import AffixContext from './affix-context';

export type AffixProps = {
    offsetBottom?: number,
    offsetTop?: number,
    onChange?: (affixed: boolean, isTop: boolean | undefined) => void;
    prefixCls?: string,
    className?: string,
    style?: React.CSSProperties,
    children?: React.ReactNode,
} & typeof defaultProps;

const defaultProps = {
    prefixCls: 'ty-affix',
    offsetTop: 0,
    offsetBottom: 0,
};

let lastAffixState = false;

const Affix = (props: AffixProps) => {
    const { offsetTop, offsetBottom, onChange, prefixCls, className, style, children } = props;
    const [placeholderHeight, setPlaceholderHeight] = useState(0);
    const [affixStyle, setAffixStyle] = useState<React.CSSProperties>({});
    const placeholderEl = useRef<HTMLDivElement>(null);
    const affixEl = useRef<HTMLDivElement>(null);
    const cls = classnames(prefixCls, className);
    const container = useContext(AffixContext);

    const _onScrollListener = (): void => {
        if (affixEl.current && placeholderEl.current) {
            setPlaceholderHeight(affixEl.current.clientHeight);
            const placeholderRect = placeholderEl.current.getBoundingClientRect();
            const distanceTop = placeholderRect.top;
            const distanceBottom = document.documentElement.clientHeight - placeholderRect.bottom;

            console.log(placeholderRect);
            console.log(container!.current!.getBoundingClientRect());
            console.log('------');
            if (distanceTop - offsetTop <= 0) {
                setAffixStyle({
                    position: 'fixed',
                    top: offsetTop,
                    left: placeholderRect.left,
                    zIndex: 5,
                });
                _eventCallback(true, true);
            } else if (distanceBottom - offsetBottom <= 0) {
                setAffixStyle({
                    position: 'fixed',
                    bottom: offsetBottom,
                    left: placeholderRect.left,
                    zIndex: 5,
                });
                _eventCallback(true, false);
            } else {
                setAffixStyle({});
                _eventCallback(false);
            }
        }
    };

    // Handle event callback
    const _eventCallback = (affixed: boolean, isTop: boolean | undefined = undefined): void => {
        if (lastAffixState !== affixed) {
            lastAffixState = affixed;
            onChange && onChange(affixed, isTop);
        }
    };

    useEffect(() => {
        affixEl.current && setPlaceholderHeight(affixEl.current.clientHeight);
        window.addEventListener('scroll', _onScrollListener);

        return () => {
            window.removeEventListener('scroll', _onScrollListener);
        };
    }, []);

    return (
        <div ref={placeholderEl} style={{ height: placeholderHeight, ...style }}>
            <div ref={affixEl} className={cls} style={affixStyle}>{children}</div>
        </div>
    );
};

Affix.defaultProps = defaultProps;

Affix.Container = AffixContainer;

export default Affix;
