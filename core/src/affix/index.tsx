import React, { useState, useEffect, useRef } from 'react';
import classnames from 'classnames';

type Container = HTMLElement | Window;

export type AffixProps = {
    container?: () => Container,
    offsetBottom?: number,
    offsetTop?: number,
    relative?: boolean,
    onChange?: (affixed: boolean, isTop: boolean | undefined) => void;
    prefixCls?: string,
    className?: string,
    style?: React.CSSProperties,
    children?: React.ReactNode,
} & typeof defaultProps;

const defaultProps = {
    prefixCls: 'ty-affix',
    container: () => window,
};

type AffixMode = {
    top: boolean,
    bottom: boolean,
    offset: number,
};

const getScroll = (node: Container, isVertical: boolean): number => {
    if (typeof window === 'undefined') {
        return 0;
    }
    const windowProp = isVertical ? 'pageYOffset' : 'pageXOffset';
    const elementProp = isVertical ? 'scrollTop' : 'scrollLeft';
    return node === window ? (node as Window)[windowProp] : (node as HTMLElement)[elementProp];
};

const getRect = (node: Container = window) => {
    return node !== window
        ? (node as HTMLElement).getBoundingClientRect()
        : { top: 0, left: 0, bottom: 0 };
};

const getNodeHeight = (node: Container) => {
    if (!node) {
        return 0;
    }
    if (node === window) {
        return window.innerHeight;
    }
    return (node as HTMLElement).clientHeight;
};

const affixMode: AffixMode = {
    top: false,
    bottom: false,
    offset: 0,
};

let lastAffixed: boolean | null = null;

const Affix = (props: AffixProps) => {
    const { container, relative, offsetTop, offsetBottom, onChange, prefixCls, className, style, children } = props;
    const [placeholderNodeStyle, setPlaceholderNodeStyle] = useState<React.CSSProperties>({});
    const [affixNodeStyle, setAffixNodeStyle] = useState<React.CSSProperties>({});
    const placeholderEl = useRef<HTMLDivElement>(null);
    const affixEl = useRef<HTMLDivElement>(null);
    const cls = classnames(prefixCls, className);

    const getAffixMode = () => {
        if (typeof offsetTop !== 'number' && typeof offsetBottom !== 'number') {
            // set default
            affixMode.top = true;
        } else if (typeof offsetTop === 'number') {
            affixMode.top = true;
            affixMode.bottom = false;
            affixMode.offset = offsetTop;
        } else if (typeof offsetBottom === 'number') {
            affixMode.bottom = true;
            affixMode.top = false;
            affixMode.offset = offsetBottom;
        }
    };

    const getOffset = (affixNode: HTMLElement, affixContainer: Container) => {
        const affixRect = affixNode.getBoundingClientRect(); // affix 元素 相对浏览器窗口的位置
        const containerRect = getRect(affixContainer); // affix 容器 相对浏览器窗口的位置
        const containerScrollTop = getScroll(affixContainer, true);
        const containerScrollLeft = getScroll(affixContainer, false);

        return {
            top: affixRect.top - containerRect.top + containerScrollTop,
            left: affixRect.left - containerRect.left + containerScrollLeft,
            width: affixRect.width,
            height: affixRect.height,
        };
    };

    const updateNodePosition = () => {
        const affixContainer = container();

        if (!affixContainer || !placeholderEl.current || !affixEl.current) {
            return false;
        }
        const containerScrollTop = getScroll(affixContainer, true);
        const affixOffset = getOffset(placeholderEl.current, affixContainer);
        const containerHeight = getNodeHeight(affixContainer);
        const affixHeight = placeholderEl.current.offsetHeight;
        const containerRect = getRect(affixContainer);

        const affixChildHeight = affixEl.current.offsetHeight;

        const affixStyle: React.CSSProperties = {
            width: affixOffset.width,
        };
        const containerStyle: React.CSSProperties = {
            width: affixOffset.width,
            height: affixChildHeight,
        };

        if (affixMode.top && containerScrollTop > affixOffset.top - affixMode.offset) {
            // affix top
            if (relative) {
                affixStyle.position = 'absolute';
                affixStyle.zIndex = 1;
                affixStyle.top = containerScrollTop - (affixOffset.top - affixMode.offset);
                containerStyle.position = 'relative';
            } else {
                affixStyle.position = 'fixed';
                affixStyle.zIndex = 1;
                affixStyle.top = affixMode.offset + containerRect.top;
            }
            setAffixStyle(affixStyle, true, true);
            setContainerStyle(containerStyle);
        } else if (affixMode.bottom && containerScrollTop
            < affixOffset.top + affixHeight + affixMode.offset - containerHeight) {
            // affix bottom
            affixStyle.height = affixHeight;
            if (relative) {
                affixStyle.zIndex = 1;
                affixStyle.position = 'absolute';
                affixStyle.top = containerScrollTop
                    - (affixOffset.top + affixHeight + affixMode.offset - containerHeight);
                containerStyle.position = 'relative';
            } else {
                affixStyle.zIndex = 1;
                affixStyle.position = 'fixed';
                affixStyle.bottom = affixMode.offset;
            }
            setAffixStyle(affixStyle, true, false);
            setContainerStyle(containerStyle);
        } else {
            setAffixStyle({}, false, undefined);
            setContainerStyle({});
        }
    };

    const setAffixStyle = (
        affixStyle: React.CSSProperties, affixed: boolean = false, isTop: boolean | undefined = undefined) => {
        setAffixNodeStyle(affixStyle);

        if (lastAffixed !== affixed) {
            lastAffixed = affixed;
            onChange && onChange(affixed, isTop);
        }
    };

    const setContainerStyle = (containerStyle: React.CSSProperties) => {
        setPlaceholderNodeStyle(containerStyle);
    };

    useEffect(() => {
        getAffixMode();
        updateNodePosition();
        container().addEventListener('scroll', updateNodePosition);
        container().addEventListener('resize', updateNodePosition);

        return () => {
            container().removeEventListener('scroll', updateNodePosition);
            container().removeEventListener('resize', updateNodePosition);
        };
    }, []);

    return (
        <div ref={placeholderEl} style={{ ...placeholderNodeStyle, ...style }}>
            <div ref={affixEl} className={cls} style={affixNodeStyle}>{children}</div>
        </div>
    );
};

Affix.defaultProps = defaultProps;

export default Affix;
