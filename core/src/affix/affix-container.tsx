import React, { useRef, useState, useEffect } from 'react';
import classnames from 'classnames';
import AffixContext from './affix-context';

export type AffixProps = {
    prefixCls?: string,
    className?: string,
    style?: React.CSSProperties,
    children?: React.ReactNode,
} & typeof defaultProps;

const defaultProps = {
    prefixCls: 'ty-affix-container',
};

const AffixContainer = (props: AffixProps) => {
    const { prefixCls, className, style, children } = props;
    const cls = classnames(prefixCls, className);
    const containerRef = useRef<HTMLDivElement>(null);
    const [container, setContainer] = useState(containerRef);

    useEffect(() => {
        setContainer(containerRef);
    }, []);

    return (
        <AffixContext.Provider value={container}>
            <div ref={containerRef} className={cls} style={style}>{children}</div>
        </AffixContext.Provider>
    );
};

AffixContainer.defaultProps = defaultProps;

export default AffixContainer;
