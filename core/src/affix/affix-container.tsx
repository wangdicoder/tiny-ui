import React from 'react';
import classnames from 'classnames';

export type AffixProps = {
    prefixCls?: string,
    className?: string,
    style?: React.CSSProperties,
    children?: React.ReactNode,
} & typeof defaultProps;

const defaultProps = {};

const AffixContainer = (props: AffixProps) => {
    const { prefixCls, className, style } = props;
    const cls = classnames(prefixCls, className);

    return (
        <div className={cls} style={style}>

        </div>
    );
};

AffixContainer.defaultProps = defaultProps;

export default AffixContainer;
