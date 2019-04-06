import React from 'react';
import classnames from 'classnames';
import { strokeLineCaps, strokePresetColors } from '.';

export type CircleProps = {
    percent?: number,
    /** Customise label style for both outer and inner label */
    format?: (percent: number) => React.ReactNode,
    width?: number,
    strokeWidth?: number,
    strokeLinecap?: strokeLineCaps,
    strokeColor?: string,
    prefixCls?: string,
    className?: string,
    style?: React.CSSProperties,
    children?: React.ReactNode,
} & typeof defaultProps;

const defaultProps = {
    prefixCls: 'ty-progress-circle',
    percent: 0,
    strokeWidth: 8,
    width: 120,
    strokeLinecap: 'round',
    strokeColor: 'primary',
};

const Circle = (props: CircleProps) => {
    const { percent, format, width, strokeColor, strokeWidth, strokeLinecap, prefixCls, className, style } = props;
    const cls = classnames(prefixCls, className);
    let percentage: number = percent > 100 ? 100 : percent;
    percentage = percentage < 0 ? 0 : percentage;

    const strokeBgCls = classnames(`${prefixCls}__path`, {
        [`${prefixCls}__path_${strokeColor}`]: strokePresetColors.includes(strokeColor),
    });

    const _relativeStrokeWidth = (): string => {
        return (strokeWidth / width * 100).toFixed(1);
    };

    const _trackPath = (): string => {
        const radius: number = 50 - parseFloat(_relativeStrokeWidth()) / 2;
        return `M 50 50 m 0 -${radius} a ${radius} ${radius}
         0 1 1 0 ${radius * 2} a ${radius} ${radius} 0 1 1 0 -${radius * 2}`;
    };

    const _perimeter = (): number => {
        const radius: number = 50 - parseFloat(_relativeStrokeWidth()) / 2;
        return 2 * Math.PI * radius;
    };

    const _circlePathStyle = (): React.CSSProperties => {
        const perimeter = _perimeter();
        return {
            strokeDasharray: `${perimeter}px,${perimeter}px`,
            strokeDashoffset: (1 - percentage / 100) * perimeter + 'px',
        };
    };

    const _renderLabel = (): React.ReactNode => {
        return (
            <div className={`${prefixCls}__text`}>{format ? format(percent) : `${percentage}%`}</div>
        );
    };

    return (
        <div className={cls} style={{ width, height: width, ...style }}>
            <svg viewBox="0 0 100 100" width={width} height={width}>
                <path
                    className={`${prefixCls}__bg`}
                    d={_trackPath()}
                    strokeWidth={_relativeStrokeWidth()}
                />
                <path
                    className={strokeBgCls}
                    d={_trackPath()}
                    strokeLinecap={strokeLinecap}
                    strokeWidth={_relativeStrokeWidth()}
                    style={_circlePathStyle()}
                />
            </svg>
            {_renderLabel()}
        </div>
    );
};

Circle.defaultProps = defaultProps;

export default Circle;
