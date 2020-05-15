import React, { useContext, useRef, useState, ReactNode } from 'react';
import classNames from 'classnames';
import { BaseProps } from '../_utils/props';
import { ConfigContext } from '../config-provider/config-context';
import { getPrefixCls } from '../_utils/general';
import Tooltip, { Placement } from '../tooltip';

export type StepDirection = 'horizontal' | 'vertical';
export type SliderValue = number | [number, number];
export type SliderMarks = {
  [key: string]:
    | React.ReactNode
    | {
        style: React.CSSProperties;
        label: ReactNode;
      };
};

export interface SliderProps
  extends BaseProps,
    Omit<React.PropsWithRef<JSX.IntrinsicElements['div']>, 'onChange' | 'defaultValue'> {
  value?: SliderValue;
  defaultValue?: SliderValue;
  min?: number;
  max?: number;
  marks?: SliderMarks;
  dots?: boolean;
  direction?: StepDirection;
  step?: number;
  disabled?: boolean;
  track?: boolean;
  tooltipVisible?: boolean;
  tooltipPlacement?: Placement;
  tipFormatter?: (value: number) => ReactNode;
  onChange?: (value: SliderValue) => void;
  onAfterChange?: (value: SliderValue) => void;
  children?: ReactNode;
}

const Slider = React.forwardRef<HTMLDivElement, SliderProps>(
  (props: SliderProps, ref): JSX.Element => {
    const {
      defaultValue = 0,
      min = 0,
      max = 100,
      direction = 'horizontal',
      dots = false,
      step = 1,
      disabled = false,
      track = true,
      tooltipPlacement = 'top',
      tooltipVisible,
      tipFormatter,
      marks,
      onChange,
      onClick,
      onAfterChange,
      className,
      prefixCls: customisedCls,
      ...otherProps
    } = props;
    const configContext = useContext(ConfigContext);
    const prefixCls = getPrefixCls('slider', configContext.prefixCls, customisedCls);
    const cls = classNames(prefixCls, className, `${prefixCls}_${direction}`, {
      [`${prefixCls}-with-marks`]: marks,
      [`${prefixCls}_disabled`]: disabled,
    });
    const [sliderValues, setSliderValues] = useState(
      ('value' in props
        ? Array.isArray(props.value)
          ? props.value
          : [props.value]
        : Array.isArray(defaultValue)
        ? defaultValue
        : [defaultValue]) as number[]
    );
    const [isHovering, setHovering] = useState(false);
    const railRef = useRef<HTMLDivElement | null>(null);
    const trackRef = useRef<HTMLDivElement | null>(null);
    const thumbIdx = useRef(0);
    const isDragging = useRef(false);
    const mouseStartPos = useRef(0);
    const trackStartPos = useRef(0);
    const currVal = useRef(0);
    const isVertical = direction === 'vertical';

    const getValueToPercent = (value: number): number => {
      return ((value - min) * 100) / (max - min);
    };

    const calculateTrackStyle = (): React.CSSProperties => {
      const trackStyle: React.CSSProperties = { left: '0%', right: '100%' };
      if (sliderValues.length === 1) {
        trackStyle.right = `${100 - getValueToPercent(sliderValues[0])}%`;
      } else {
        const leftValue = sliderValues[0] > sliderValues[1] ? sliderValues[1] : sliderValues[0];
        const rightValue = sliderValues[0] > sliderValues[1] ? sliderValues[0] : sliderValues[1];
        trackStyle.left = `${getValueToPercent(leftValue)}%`;
        trackStyle.right = `${100 - getValueToPercent(rightValue)}%`;
      }
      return trackStyle;
    };

    const getRangeValue = (val: number): number[] => {
      if (sliderValues.length === 1) {
        return [val];
      }

      const values = sliderValues;
      const val1 = values[0];
      const val2 = values[1];
      if ((val1 < val2 && val1 > val) || (val1 > val2 && val1 < val)) {
        values[0] = val as number;
      }
      if ((val1 < val2 && val2 < val) || (val1 > val2 && val2 > val)) {
        values[1] = val as number;
      }

      if (val1 > val && val2 < val) {
        const half = val2 + (val1 - val2) / 2;
        if (half >= val) {
          values[1] = val as number;
        }
        if (half < val) {
          values[0] = val as number;
        }
      }
      if (val2 > val && val1 < val) {
        const half = val1 + (val2 - val1) / 2;
        if (half >= val) {
          values[0] = val as number;
        }
        if (half < val) {
          values[1] = val as number;
        }
      }
      return values;
    };

    const handleOnChange = (value: number[]): void => {
      setSliderValues([...value]);
      onChange &&
        onChange(sliderValues.length === 1 ? sliderValues[0] : [sliderValues[0], sliderValues[1]]);
    };

    const getWidthToValue = (width: number): number => {
      const numOfSteps = (max - min) / step;
      let percent = 0;
      if (railRef.current) {
        percent = (width / railRef.current![isVertical ? 'clientHeight' : 'clientWidth']) * 100;
      }

      if (percent <= 0) {
        percent = 0;
      }
      if (percent >= 100) {
        percent = 100;
      }

      // add 0.5 for step movement
      const num = numOfSteps * (percent / 100) + 0.5;
      const val = Math.floor(num) * step + min;
      return isVertical ? 100 - val : val;
    };

    const sliderOnClick = (e: React.MouseEvent<HTMLDivElement>): void => {
      if (isDragging.current || disabled) {
        return;
      }
      if (railRef.current) {
        const markOffset = railRef.current!.getBoundingClientRect();
        const value = getWidthToValue(
          e[isVertical ? 'clientY' : 'clientX'] - markOffset[isVertical ? 'y' : 'x']
        );
        handleOnChange(getRangeValue(value));
      }
      onClick && onClick(e);
    };

    const handleThumbOnDragging = (e: MouseEvent): void => {
      if (!isDragging.current) {
        return;
      }
      const sliderVal = getWidthToValue(
        e[isVertical ? 'clientY' : 'clientX'] - mouseStartPos.current + trackStartPos.current
      );
      const val = sliderValues;
      if (sliderVal !== currVal.current) {
        val[thumbIdx.current] = sliderVal;

        handleOnChange(val);
        currVal.current = sliderVal;
      }
    };

    const handleThumbOnDragEnd = (): void => {
      isDragging.current = false;
      window.removeEventListener('mousemove', handleThumbOnDragging);
      window.removeEventListener('mouseup', handleThumbOnDragEnd);
      onAfterChange &&
        onAfterChange(
          sliderValues.length === 1 ? sliderValues[0] : [sliderValues[0], sliderValues[1]]
        );
    };

    /**
     * Get track width info when click down the thumb button
     */
    const handleThumbOnMouseDown = (idx: number, e: React.MouseEvent<HTMLDivElement>): void => {
      if (disabled) {
        return;
      }

      thumbIdx.current = idx;
      isDragging.current = true;
      mouseStartPos.current = e[isVertical ? 'clientY' : 'clientX'];
      if (trackRef.current && railRef.current) {
        trackStartPos.current = isVertical
          ? trackRef.current!.offsetTop
          : trackRef.current!.clientWidth;

        // handle when it is a dual slider
        if (sliderValues.length > 1) {
          const trackOffset = trackRef.current![isVertical ? 'offsetTop' : 'offsetLeft'];
          trackStartPos.current =
            (idx === 1 && sliderValues[1] > sliderValues[0]) ||
            (idx !== 1 && sliderValues[0] > sliderValues[1])
              ? isVertical
                ? trackOffset
                : trackStartPos.current + trackOffset
              : isVertical
              ? trackRef.current!.clientHeight + trackOffset
              : trackOffset;
        }
      }

      window.addEventListener('mousemove', handleThumbOnDragging, { capture: true });
      window.addEventListener('mouseup', handleThumbOnDragEnd, { capture: true });
    };

    /**
     * Get dot values
     */
    const getSteps = (): number[] => {
      const numOfSteps = (max - min) / step;
      const stepWidth = (100 * step) / (max - min);
      const res = [0];
      for (let i = 1; i < numOfSteps; i += 1) {
        res.push(i * stepWidth);
      }
      res.push(100);
      return res;
    };

    /**
     * Determine dot's border style
     * @param dotVal: dot value
     */
    const isDotActive = (dotVal: number): boolean => {
      if (sliderValues.length === 1) {
        return dotVal < sliderValues[0];
      } else {
        const [left, right] =
          sliderValues[0] < sliderValues[1]
            ? [sliderValues[0], sliderValues[1]]
            : [sliderValues[1], sliderValues[0]];
        return dotVal < right && dotVal > left;
      }
    };

    const handleThumbOnMouseEnter = (idx: number): void => {
      thumbIdx.current = idx;
      setHovering(true);
    };

    const handleThumbOnMouseLeave = (): void => {
      setHovering(false);
    };

    const renderMark = (mark: string): ReactNode => {
      if (marks && marks[mark] && (marks[mark] as any).label) {
        const { label, style } = marks[mark] as any;
        return <div style={style}>{label}</div>;
      } else if (marks && marks[mark]) {
        return marks[mark];
      } else {
        return mark;
      }
    };

    const trackStyle = calculateTrackStyle();
    return (
      <div ref={ref} {...otherProps} className={cls} onClick={sliderOnClick}>
        <div ref={railRef} className={`${prefixCls}__rail`} />
        <div
          ref={trackRef}
          className={classNames(`${prefixCls}__track`, {
            [`${prefixCls}__track_invisible`]: !track,
          })}
          style={{
            [isVertical ? 'bottom' : 'left']: trackStyle.left,
            [isVertical ? 'top' : 'right']: trackStyle.right,
          }}
        />
        {sliderValues.map((value, idx) => {
          const percent = getValueToPercent(value);
          return (
            <div
              key={idx}
              tabIndex={0}
              role="slider"
              aria-valuemax={max}
              aria-valuemin={min}
              aria-valuenow={value}
              aria-disabled={disabled}
              className={classNames(`${prefixCls}__thumb-container`, {
                [`${prefixCls}__thumb-container_hovering`]: idx === thumbIdx.current && isHovering,
                [`${prefixCls}__thumb-container_dragging`]:
                  idx === thumbIdx.current && isDragging.current,
              })}
              style={{
                zIndex: idx === thumbIdx.current && (isDragging.current || isHovering) ? 2 : 1,
                transform: isVertical ? 'translate(-50%, 50%)' : 'translate(-50%, -50%)',
                [isVertical ? 'bottom' : 'left']: `${percent}%`,
              }}
              onMouseEnter={(): void => handleThumbOnMouseEnter(idx)}
              onMouseLeave={handleThumbOnMouseLeave}
              onMouseDown={(e): void => handleThumbOnMouseDown(idx, e)}>
              <Tooltip
                trigger="manual"
                visible={
                  'tooltipVisible' in props
                    ? tooltipVisible
                    : idx === thumbIdx.current && (isDragging.current || isHovering)
                }
                usePortal={false}
                placement={tooltipPlacement}
                title={tipFormatter ? tipFormatter(value) : value}>
                <div className={`${prefixCls}__thumb`} />
              </Tooltip>
            </div>
          );
        })}
        {dots && (
          <div className={`${prefixCls}__dots`}>
            {getSteps().map((val, idx) => {
              const stepVal = idx * step + min;
              return (
                <div
                  key={idx}
                  style={{
                    [isVertical ? 'bottom' : 'left']: `${val}%`,
                  }}
                  className={classNames(`${prefixCls}__dot`, {
                    [`${prefixCls}__dot_active`]: isDotActive(stepVal),
                  })}
                />
              );
            })}
          </div>
        )}
        {marks && (
          <div className={`${prefixCls}__marks`}>
            {Object.keys(marks).map((mark: string, idx) => {
              const percent = getValueToPercent(parseFloat(mark));
              return (
                <div
                  key={idx}
                  style={{
                    [isVertical ? 'bottom' : 'left']: `${percent}%`,
                  }}
                  className={`${prefixCls}__mark`}>
                  {renderMark(mark)}
                </div>
              );
            })}
          </div>
        )}
      </div>
    );
  }
);

Slider.displayName = 'Slider';

export default Slider;
