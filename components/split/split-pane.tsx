import React, { useEffect } from 'react';
import classnames from 'classnames';

export type SplitPaneProps = {
    min?: number,
    getMin?: (min: number) => void,
    prefixCls?: string,
    className?: string,
    style?: React.CSSProperties,
    children?: React.ReactNode,
};

const defaultProps = {
    prefixCls: 'ty-split-pane',
};

const SplitPane = (props: SplitPaneProps) => {
    const { min, getMin, prefixCls, className, style, children } = props;
    const cls = classnames(prefixCls, className);

    useEffect(() => {
        getMin && getMin(min || 40);
    }, []);

    return (
        <div className={cls} style={style}>
            {children}
        </div>
    );
};

SplitPane.defaultProps = defaultProps;

export default SplitPane;
