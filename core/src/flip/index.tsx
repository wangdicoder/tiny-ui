import * as React from 'react';
import classNames from 'classnames';
import FlipItem, { FlipItemProps } from './flip-item';
import warning from '../utils/warning';

export type FlipTypes = {
    children: React.ReactElement<FlipItemProps>,
    /** A certain parent height to prevent the hover empty issue */
    height: string | number,
    /** Flip direction */
    direction?: 'horizontal' | 'vertical',
    /** Flip from left to right or reverse */
    reverse?: boolean,
    prefixCls?: string,
    className?: string,
    style?: React.CSSProperties,
} & typeof defaultProps;

const defaultProps = {
    prefixCls: 'ty-flip',
    direction: 'horizontal',
};

const Flip = (props: FlipTypes) => {
    const { height, direction, reverse, prefixCls, className, children, style } = props;
    const cls = classNames(
        prefixCls,
        className,
    );

    const innerCls = classNames(
        `${prefixCls}__inner`, {
            [`${prefixCls}__inner_hor`]: direction === 'horizontal' && !reverse,
            [`${prefixCls}__inner_hor_reverse`]: direction === 'horizontal' && reverse,
            [`${prefixCls}__inner_ver`]: direction === 'vertical' && !reverse,
            [`${prefixCls}__inner_ver_reverse`]: direction === 'vertical' && reverse,
        },
    );

    warning(!children || React.Children.count(children) !== 2,
        'Children must contain front and back components.', true);

    return (
        <div className={cls} style={{ height, ...style }}>
            <div className={innerCls}>
                {React.Children.map(children, (child: React.ReactElement<FlipItemProps>, index: number) => (
                    React.cloneElement(child, {
                        ...child.props,
                        className: classNames({
                            [`${prefixCls}__item-front`]: index === 0,
                            [`${prefixCls}__item-back`]: index === 1,
                            [`${prefixCls}__item-back_hor`]: index === 1 && direction === 'horizontal' && !reverse,
                            [`${prefixCls}__item-back_hor_reverse`]:
                            index === 1 && direction === 'horizontal' && reverse,
                            [`${prefixCls}__item-back_ver`]: index === 1 && direction === 'vertical' && !reverse,
                            [`${prefixCls}__item-back_ver_reverse`]: index === 1 && direction === 'vertical' && reverse,
                        }, child.props.className),
                    })
                ))}
            </div>
        </div>
    );
};

Flip.defaultProps = defaultProps;

Flip.Item = FlipItem;

export default Flip;
