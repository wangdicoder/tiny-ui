import * as React from 'react';
import classNames from 'classnames';
import warning from '../../utils/warning';

export type BadgeProps = {
    count?: React.ReactNode | number,
    color?: string,
    max?: number,
    dot?: boolean,
    processing?: boolean,
    /** when value is equal to zero, the badge will be hidden by default */
    showZero?: boolean,
    text?: string | undefined,
    title?: string,
    prefixCls?: string,
    style?: React.CSSProperties,
    className?: string,
    children?: React.ReactNode,
} & typeof defaultProps;

const defaultProps = {
    count: 0,
    prefixCls: 'ty-badge',
    color: '#f2453d',
    max: 99,
    dot: false,
    processing: false,
    showZero: false,
    text: undefined,
};

const Badge = (props: BadgeProps) => {
    const { count, color, max, dot, processing, showZero, text, title, className, prefixCls, style, children } = props;
    const cls = classNames(
        prefixCls,
        className,
        { [`${prefixCls}_no-wrap`]: !children },
    );

    const dotCls = classNames(`${prefixCls}__dot`, { [`${prefixCls}__dot_wave`]: processing });
    const textCls = classNames(`${prefixCls}__count`);

    warning(!dot && processing, 'only dot badge has the processing effect');

    const _renderCount = () => {
        const isZero = (typeof count === 'number') && count === 0;
        if (isZero && !showZero) {
            return null;
        }
        return (
            <sup title={title} className={textCls} style={{ backgroundColor: color }}>
                {text || (count > max ? `${max}+` : count)}
            </sup>
        );
    };

    return (
        <span className={cls} style={style}>
            {children}
            {dot ? <sup title={title} className={dotCls} style={{ backgroundColor: color }}/> : _renderCount()}
        </span>
    );
};

Badge.defaultProps = defaultProps;

export default Badge;
