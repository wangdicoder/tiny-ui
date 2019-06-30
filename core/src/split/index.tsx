import React from 'react';
import classnames from 'classnames';
import Pane, { SplitPaneProps } from './split-pane';
import SplitBar from './split-bar';

export type SplitProps = {
    mode?: 'horizontal' | 'vertical',
    prefixCls?: string,
    className?: string,
    style?: React.CSSProperties,
    children: React.ReactElement<Pane | SplitBar>,
} & typeof defaultProps;

const defaultProps = {
    prefixCls: 'ty-split',
    mode: 'horizontal',
};

const Split = (props: SplitProps) => {
    const { mode, prefixCls, className, style, children } = props;
    const cls = classnames(prefixCls, className, {
        [`${prefixCls}_${mode}`]: mode,
    });

    const childrenCount = React.Children.count(children);
    return (
        <div className={cls} style={style}>
            {React.Children.map(children, (child, idx) => {
                const childProps: SplitPaneProps = {
                    style: { ...child.props.style, width: `calc(${100 / childrenCount}%)` },
                };
                return (
                    <>
                        {React.cloneElement(child, childProps)}
                        {idx + 1 !== childrenCount && <SplitBar mode={mode}/>}
                    </>
                );
            })}
        </div>
    );
};

Split.defaultProps = defaultProps;

Split.Pane = Pane;

export default Split;
