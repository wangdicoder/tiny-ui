import React, { useState, useEffect, useRef } from 'react';
import classnames from 'classnames';

export type AffixProps = {
    offsetBottom?: number,
    offsetTop?: number,
    target?: () => HTMLElement,
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
    target: () => window,
};

let lastAffixState = false;

const Affix = (props: AffixProps) => {
    const { offsetTop, offsetBottom, target, onChange, prefixCls, className, style, children } = props;
    const [placeholderHeight, setPlaceholderHeight] = useState(0);
    const [affixStyle, setAffixStyle] = useState<React.CSSProperties>({});
    const placeholderEl = useRef<HTMLDivElement>(null);
    const affixEl = useRef<HTMLDivElement>(null);
    const cls = classnames(prefixCls, className);

    const _onScrollListener = (): void => {
        if (affixEl.current && placeholderEl.current) {
            setPlaceholderHeight(affixEl.current.clientHeight);
            const placeholderRect = placeholderEl.current.getBoundingClientRect();
            const distanceTop = placeholderRect.top;
            const distanceBottom = document.documentElement.clientHeight - placeholderRect.bottom;

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
        target().addEventListener('scroll', _onScrollListener);

        return () => {
            target().removeEventListener('scroll', _onScrollListener);
        };
    }, []);

    return (
        <div ref={placeholderEl} style={{ height: placeholderHeight, ...style }}>
            <div ref={affixEl} className={cls} style={affixStyle}>{children}</div>
        </div>
    );
};

Affix.defaultProps = defaultProps;

export default Affix;
