import * as React from 'react';
import classNames from 'classnames';
import { ColProps } from './col';

export type RowProps = {
    gutter?: number,
    type?: 'flex',
    align?: 'top' | 'middle' | 'bottom';
    justify?: 'start' | 'end' | 'center' | 'space-around' | 'space-between';
    prefixCls?: string,
    className?: string,
    style?: React.CSSProperties,
    children: React.ReactElement<ColProps>
} & typeof defaultProps;

const defaultProps = {
    prefixCls: 'ty-row',
    gutter: 0,
};

const Row = (props: RowProps) => {
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

Row.defaultProps = defaultProps;

export default Row;
