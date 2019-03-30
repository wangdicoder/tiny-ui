import * as React from 'react';
import classNames from 'classnames';
import { ColProps } from '../col';

export type RowProps = {
    gutter?: number,
    /** gutter padding includes first and end child  */
    gutterSide?: boolean,
    align?: 'top' | 'center' | 'bottom' | 'baseline';
    justify?: 'start' | 'end' | 'center' | 'space-around' | 'space-between' | 'space-evenly';
    prefixCls?: string,
    className?: string,
    style?: React.CSSProperties,
    children: React.ReactElement<ColProps>
} & typeof defaultProps;

const defaultProps = {
    prefixCls: 'ty-row',
    gutter: 0,
    gutterSide: false,
};

const Row = (props: RowProps) => {
    const { gutter, align, justify, gutterSide, prefixCls, className, style, children } = props;
    const cls = classNames(prefixCls, className, {
        [`${prefixCls}_align-${align}`]: align,
        [`${prefixCls}_justify-${justify}`]: justify,
    });

    return (
        <div className={cls} style={style}>
            {React.Children.map(children, (child, index) => {
                const gutterStyle = gutter ? {
                    paddingLeft: !gutterSide && (index === 0) ? 0 : gutter / 2,  // first child left padding
                    paddingRight: !gutterSide && (index === React.Children.count(children) - 1) ? 0 : gutter / 2,
                } : {};
                return (
                    React.cloneElement(child, {
                        ...child.props,
                        style: {
                            ...child.props.style,
                            ...gutterStyle,
                        },
                    })
                );
            })}
        </div>
    );
};

Row.defaultProps = defaultProps;

export default Row;
