import React, { useContext } from 'react';
import classNames from 'classnames';
import { strokeLineCaps, strokePresetColors } from './shared-props';
import { BaseProps } from '../_utils/props';
import { ConfigContext } from '../config-provider/config-context';
import { getPrefixCls } from '../_utils/general';

export interface CircleProps
  extends BaseProps,
    React.PropsWithoutRef<JSX.IntrinsicElements['div']> {
  percent?: number;
  /** Customise label style for both outer and inner label */
  format?: (percent: number) => React.ReactNode;
  width?: number;
  strokeWidth?: number;
  strokeLinecap?: strokeLineCaps;
  strokeColor?: string;
  reverse?: boolean;
  prefixCls?: string;
  textStyle?: React.CSSProperties;
  children?: React.ReactNode;
}

const Circle = (props: CircleProps): React.ReactElement => {
  const {
    percent = 0,
    strokeWidth = 8,
    width = 120,
    strokeLinecap = 'round',
    strokeColor = 'primary',
    reverse = false,
    prefixCls: customisedCls,
    format,
    className,
    style,
    textStyle,
    ...otherProps
  } = props;
  const configContext = useContext(ConfigContext);
  const prefixCls = getPrefixCls('progress-circle', configContext.prefixCls, customisedCls);
  const cls = classNames(prefixCls, className);
  let percentage: number = percent > 100 ? 100 : percent;
  percentage = percentage < 0 ? 0 : percentage;

  const strokeBgCls = classNames(`${prefixCls}__path`, {
    [`${prefixCls}__path_${strokeColor}`]: strokePresetColors.includes(strokeColor),
  });

  const relativeStrokeWidth = (): string => {
    return ((strokeWidth / width) * 100).toFixed(1);
  };

  const trackPath = (): string => {
    const radius: number = 50 - parseFloat(relativeStrokeWidth()) / 2;
    return `M 50 50 m 0 -${radius} a ${radius} ${radius}
         0 1 1 0 ${radius * 2} a ${radius} ${radius} 0 1 1 0 -${radius * 2}`;
  };

  const _perimeter = (): number => {
    const radius: number = 50 - parseFloat(relativeStrokeWidth()) / 2;
    return 2 * Math.PI * radius;
  };

  const _circlePathStyle = (): React.CSSProperties => {
    const perimeter = _perimeter();
    const strokeDash = reverse ? percentage / 100 + 1 : 1 - percentage / 100;
    return {
      strokeDasharray: `${perimeter}px, ${perimeter}px`,
      strokeDashoffset: strokeDash * perimeter + 'px',
    };
  };

  const _renderLabel = (): React.ReactNode => {
    return (
      <div className={`${prefixCls}__text`} style={textStyle}>
        {format ? format(percent) : `${percentage}%`}
      </div>
    );
  };

  return (
    <div
      {...otherProps}
      className={cls}
      style={{ width, height: width, ...style }}
      aria-valuemax={100}
      aria-valuemin={0}
      aria-valuenow={percentage}>
      <svg viewBox="0 0 100 100" width={width} height={width}>
        <path className={`${prefixCls}__bg`} d={trackPath()} strokeWidth={relativeStrokeWidth()} />
        <path
          className={strokeBgCls}
          d={trackPath()}
          strokeLinecap={strokeLinecap}
          strokeWidth={relativeStrokeWidth()}
          style={_circlePathStyle()}
        />
      </svg>
      {_renderLabel()}
    </div>
  );
};

Circle.displayName = 'Circle';

export default Circle;
