import React from 'react';
import classNames from 'classnames';
import { strokeLineCaps, strokePresetColors } from './shared-props';
import { BaseProps } from '../_utils/props';

export type BarBackgroundType = 'impulse' | 'striped';

export interface BarProps extends BaseProps {
  percent?: number;
  /** Customise label style for both outer and inner label */
  format?: (percent: number) => React.ReactNode;
  /** Determine display the label */
  showInfo?: boolean;
  strokeLinecap?: strokeLineCaps;
  strokeColor?: string | string[];
  strokeWidth?: number;
  /** Determine display the label in the bar or right of bar */
  innerText?: boolean;
  backgroundType?: BarBackgroundType;
  children?: React.ReactNode;
}

const Bar = (props: BarProps): React.ReactElement => {
  const {
    prefixCls = 'ty-progress-bar',
    percent = 0,
    showInfo = true,
    strokeWidth = 8,
    strokeLinecap = 'round',
    strokeColor = 'primary',
    innerText = false,
    format,
    backgroundType,
    className,
    style,
  } = props;
  let percentage: number = percent > 100 ? 100 : percent;
  percentage = percentage < 0 ? 0 : percentage;

  const cls = classNames(prefixCls, className, `${prefixCls}_${strokeLinecap}`);

  const strokeBgCls = classNames(`${prefixCls}__bg`, {
    [`${prefixCls}__bg_${strokeColor}`]:
      typeof strokeColor === 'string' && strokePresetColors.includes(strokeColor),
  });

  const background =
    typeof strokeColor === 'string'
      ? strokePresetColors.includes(strokeColor)
        ? ''
        : strokeColor
      : `linear-gradient(to right, ${strokeColor.join(',')})`;

  const effectCls = classNames(`${prefixCls}__effect`, {
    [`${prefixCls}__effect_${backgroundType}`]: backgroundType,
  });

  const _renderLabel = () => {
    if (showInfo && !innerText) {
      return format ? (
        format(percentage)
      ) : (
        <span className={`${prefixCls}__text`}>{percentage}%</span>
      );
    }
    return null;
  };

  const _renderInnerLabel = () => {
    if (showInfo && innerText) {
      return format ? (
        format(percentage)
      ) : (
        <div className={`${prefixCls}__inner-text`} style={{ lineHeight: `${strokeWidth}px` }}>
          {percentage}%
        </div>
      );
    }
    return null;
  };

  return (
    <div role="progressbar" className={cls} style={style}>
      <div className={`${prefixCls}__inner`} style={{ height: strokeWidth }}>
        <div
          className={strokeBgCls}
          style={{
            width: `${percentage}%`,
            background,
          }}>
          <div className={effectCls} />
          {_renderInnerLabel()}
        </div>
      </div>
      {_renderLabel()}
    </div>
  );
};

export default Bar;
