import React, { useContext, useRef, useState, ReactNode } from 'react';
import classNames from 'classnames';
import { BaseProps } from '../_utils/props';
import { ConfigContext } from '../config-provider/config-context';
import { getPrefixCls } from '../_utils/general';
import Tooltip, { Placement } from '../tooltip';

export interface SliderProps
  extends BaseProps,
    Omit<React.PropsWithRef<JSX.IntrinsicElements['div']>, 'onChange' | 'defaultValue'> {
  value?: number | number[];
  defaultValue?: number | number[];
  min?: number;
  max?: number;
  marks?:
    | boolean
    | {
        [num: string]:
          | {
              style?: React.CSSProperties;
              label?: ReactNode;
            }
          | ReactNode;
      };
  dots?: boolean;
  vertical?: boolean;
  step?: number;
  disabled?: boolean;
  tooltipVisible?: boolean;
  tooltipPlacement?: Placement;
  tipFormatter?: (value: number) => ReactNode;
  renderMarks?: (value: number) => ReactNode;
  onChange?: (value: number | number[]) => void;
  onAfterChange?: (value: number | number[]) => void;
  children?: React.ReactNode;
}

const Slider = React.forwardRef<HTMLDivElement, SliderProps>(
  (props: SliderProps, ref): JSX.Element => {
    const {
      defaultValue = 0,
      min = 0,
      max = 100,
      vertical = false,
      dots = false,
      step = 1,
      disabled = false,
      tooltipVisible = true,
      tooltipPlacement = 'top',
      tipFormatter,
      marks,
      onChange,
      onClick,
      onAfterChange,
      className,
      renderMarks,
      prefixCls: customisedCls,
      ...otherProps
    } = props;
    const configContext = useContext(ConfigContext);
    const prefixCls = getPrefixCls('slider', configContext.prefixCls, customisedCls);
    const cls = classNames(prefixCls, className, {
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
    const indexBar = useRef(0);
    const isDragging = useRef(false);
    const startX = useRef(0);
    const trackWidth = useRef(0);
    const trackOffsetLeft = useRef(0);
    const currVal = useRef(0);

    const getValueToPercent = (value: number): number => {
      return ((value - min) * 100) / (max - min);
    };

    const calculateTrackStyle = (value?: number[]): React.CSSProperties => {
      const values = value || sliderValues;
      const trackStyle: React.CSSProperties = { left: '0%', right: '100%' };
      if (sliderValues.length === 1) {
        trackStyle.right = `${100 - getValueToPercent(values[0])}%`;
      } else {
        const leftValue = values[0] > values[1] ? values[1] : values[0];
        const rightValue = values[0] > values[1] ? values[0] : values[1];
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
      calculateTrackStyle(value);
      setSliderValues([...value]);
      onChange && onChange(sliderValues.length === 1 ? value[0] : value);
    };

    const getWidthToValue = (width: number): number => {
      const numOfSteps = (max - min) / step;
      let percent = 0;
      if (railRef.current) {
        percent = (width / railRef.current![vertical ? 'clientHeight' : 'clientWidth']) * 100;
      }

      if (percent <= 0) {
        percent = 0;
      }
      if (percent >= 100) {
        percent = 100;
      }

      const num = numOfSteps * (percent / 100) + 0.5;
      return Math.floor(num) * step + min;
    };

    const sliderOnClick = (e: React.MouseEvent<HTMLDivElement>): void => {
      if (isDragging.current || disabled) {
        return;
      }
      if (railRef.current) {
        const markOffset = railRef.current!.getBoundingClientRect();
        const value = getWidthToValue(
          e[vertical ? 'clientY' : 'clientX'] - markOffset[vertical ? 'y' : 'x']
        );
        handleOnChange(getRangeValue(value));
      }
      onClick && onClick(e);
    };

    const handleThumbOnDragging = (e: MouseEvent): void => {
      if (!isDragging.current) {
        return;
      }
      const widthVal = getWidthToValue(
        e[vertical ? 'clientY' : 'clientX'] - startX.current + trackWidth.current
      );
      const val = sliderValues;
      if (widthVal !== currVal.current) {
        val[indexBar.current] = widthVal;

        handleOnChange(val);
        currVal.current = widthVal;
      }
    };

    const handleThumbOnDragEnd = (): void => {
      isDragging.current = false;
      window.removeEventListener('mousemove', handleThumbOnDragging);
      window.removeEventListener('mouseup', handleThumbOnDragEnd);
      onAfterChange && onAfterChange(sliderValues);
    };

    /**
     * Get track width info when click down the thumb button
     */
    const handleThumbOnMouseDown = (idx: number, e: React.MouseEvent<HTMLDivElement>): void => {
      if (disabled) {
        return;
      }

      indexBar.current = idx;
      isDragging.current = true;
      startX.current = e[vertical ? 'clientY' : 'clientX'];
      if (trackRef.current) {
        trackWidth.current = trackRef.current![vertical ? 'clientHeight' : 'clientWidth'];
        trackOffsetLeft.current = trackRef.current![vertical ? 'offsetTop' : 'offsetLeft'];
      }
      const val = sliderValues;
      if (Array.isArray(props.value)) {
        trackWidth.current =
          (idx === 1 && val[1] > val[0]) || (idx !== 1 && val[0] > val[1])
            ? trackWidth.current + trackOffsetLeft.current
            : trackOffsetLeft.current;
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
      indexBar.current = idx;
      setHovering(true);
    };

    const handleThumbOnMouseLeave = (): void => {
      setHovering(false);
    };

    const renderLabelValue = (value: number): ReactNode => {
      const key = `${value}`;
      if (renderMarks && renderMarks(value)) {
        return renderMarks(value);
      } else if (marks && typeof marks !== 'boolean' && 'label' in (marks as any)[key]) {
        return <div style={(marks as any)[key].style}>{(marks as any)[key].label}</div>;
      } else if (marks && typeof marks !== 'boolean' && (marks as any)[key]) {
        return (marks as any)[key];
      } else {
        return value;
      }
    };

    const trackStyle = calculateTrackStyle();
    return (
      <div ref={ref} {...otherProps} className={cls} onClick={sliderOnClick}>
        <div ref={railRef} className={`${prefixCls}__rail`} />
        <div
          ref={trackRef}
          className={`${prefixCls}__track`}
          style={{
            [vertical ? 'top' : 'left']: trackStyle.left,
            [vertical ? 'bottom' : 'right']: trackStyle.right,
          }}
        />
        {sliderValues.map((value, idx) => {
          const left = getValueToPercent(value);
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
                [`${prefixCls}__thumb-container_hovering`]: idx === indexBar.current && isHovering,
                [`${prefixCls}__thumb-container_dragging`]:
                  idx === indexBar.current && isDragging.current,
              })}
              style={{ [vertical ? 'top' : 'left']: `${left}%` }}
              onMouseEnter={(): void => handleThumbOnMouseEnter(idx)}
              onMouseLeave={handleThumbOnMouseLeave}
              onMouseDown={(e): void => handleThumbOnMouseDown(idx, e)}>
              <Tooltip
                trigger="manual"
                visible={
                  tooltipVisible && idx === indexBar.current && (isDragging.current || isHovering)
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
                    [vertical ? 'top' : 'left']: `${val}%`,
                  }}
                  className={classNames(`${prefixCls}__dot`, {
                    [`${prefixCls}__dot_active`]: isDotActive(stepVal),
                  })}>
                  {marks && <div className={`${prefixCls}__mark`}>{renderLabelValue(stepVal)}</div>}
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
