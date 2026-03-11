import React, { useContext } from 'react';
import classNames from 'classnames';
import { ConfigContext } from '../config-provider/config-context';
import { getPrefixCls } from '../_utils/general';
import { BarProps, strokePresetColors } from './types';

const Bar = (props: BarProps): React.ReactElement => {
  const {
    percent = 0,
    showInfo = true,
    strokeWidth = 8,
    strokeLinecap = 'round',
    strokeColor = 'primary',
    innerText = false,
    prefixCls: customisedCls,
    format,
    backgroundType,
    className,
    style,
    ...otherProps
  } = props;
  let percentage: number = percent > 100 ? 100 : percent;
  percentage = percentage < 0 ? 0 : percentage;
  const configContext = useContext(ConfigContext);
  const prefixCls = getPrefixCls('progress-bar', configContext.prefixCls, customisedCls);
  const cls = classNames(prefixCls, className, `${prefixCls}_${strokeLinecap}`);

  const strokeBgCls = classNames(`${prefixCls}__bg`, {
    [`${prefixCls}__bg_${strokeColor}`]:
      !Array.isArray(strokeColor) && strokePresetColors.includes(strokeColor),
  });

  const background = Array.isArray(strokeColor)
    ? `linear-gradient(to right, ${strokeColor.join(',')})`
    : strokePresetColors.includes(strokeColor)
    ? ''
    : strokeColor;

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
    <div
      {...otherProps}
      role="progressbar"
      aria-valuemax={100}
      aria-valuemin={0}
      aria-valuenow={percentage}
      className={cls}
      style={style}>
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

Bar.displayName = 'Bar';

export default Bar;
