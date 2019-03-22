import * as React from 'react';
import classNames from 'classnames';

export type ColProps = {
    prefixCls?: string,
    className?: string,
    style?: React.CSSProperties,
    children: React.ReactNode,
} & typeof defaultProps;

const defaultProps = {
    prefixCls: 'ty-col',
};

const Col = (props: ColProps) => {
    const { prefixCls, className, style, children } = props;
    const cls = classNames(
        prefixCls,
        className,
    );
    return (
        <div className={cls} style={style}>
            {children}
        </div>
    );
};

Col.defaultProps = defaultProps;

export default Col;
