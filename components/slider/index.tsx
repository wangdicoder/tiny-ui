import React, { useCallback, useContext, useEffect, useRef, useState } from 'react';
import classNames from 'classnames';
import { BaseProps } from '../_utils/props';
import { ConfigContext } from '../config-provider/config-context';
import { getPrefixCls } from '../_utils/general';
import Tooltip from '../tooltip';

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
        [key: number]: {
          style?: React.CSSProperties;
          label?: React.ReactNode;
        };
      };
  dots?: boolean;
  vertical?: boolean;
  step?: number;
  disabled?: boolean;
  tooltip?: boolean;
  renderMarks?: (value: number) => void;
  onChange?: (value: number | number[]) => void;
  children?: React.ReactNode;
}

const Slider = React.forwardRef<HTMLDivElement, SliderProps>(
  (props: SliderProps, ref): React.ReactElement => {
    const {
      defaultValue = 0,
      min = 0,
      max = 100,
      vertical = false,
      dots = false,
      step = 1,
      disabled = false,
      tooltip = false,
      onChange,
      onClick,
      className,
      prefixCls: customisedCls,
      ...otherProps
    } = props;
    const configContext = useContext(ConfigContext);
    const prefixCls = getPrefixCls('slider', configContext.prefixCls, customisedCls);
    const cls = classNames(prefixCls, className);
    const [sliderValues, setSliderValues] = useState(
      ('value' in props
        ? Array.isArray(props.value)
          ? props.value
          : [props.value]
        : [defaultValue]) as number[]
    );
    const [trackStyle, setTrackStyle] = useState<React.CSSProperties>({ left: '0', right: '100%' });
    const railRef = useRef<HTMLDivElement | null>(null);
    const trackRef = useRef<HTMLDivElement | null>(null);
    const indexBar = useRef(0);
    const move = useRef(false);
    const startX = useRef(0);
    const trackWidth = useRef(0);
    const trackOffsetLeft = useRef(0);
    const currVal = useRef(0);

    const getValueToPercent = useCallback(
      (value: number): number => {
        return ((value - min) * 100) / (max - min);
      },
      [max, min]
    );

    const calculateTrackStyle = useCallback(
      (value?: number[]): React.CSSProperties => {
        const _values = value || sliderValues;
        const barStyl: React.CSSProperties = { left: '0%', right: '100%' };
        if (sliderValues.length === 1) {
          barStyl.right = `${100 - getValueToPercent(_values[0])}%`;
        } else {
          const leftValue = _values[0] > _values[1] ? _values[1] : _values[0];
          const rightValue = _values[0] > _values[1] ? _values[0] : _values[1];
          barStyl.left = `${getValueToPercent(leftValue)}%`;
          barStyl.right = `${100 - getValueToPercent(rightValue)}%`;
        }
        return barStyl;
      },
      [getValueToPercent, sliderValues]
    );

    const getRangeValue = (val: number): number[] => {
      if (sliderValues.length === 1) {
        return [val];
      }

      const vals = sliderValues;
      const val1 = vals[0];
      const val2 = vals[1];
      if ((val1 < val2 && val1 > val) || (val1 > val2 && val1 < val)) {
        vals[0] = val as number;
      }
      if ((val1 < val2 && val2 < val) || (val1 > val2 && val2 > val)) {
        vals[1] = val as number;
      }

      if (val1 > val && val2 < val) {
        const half = val2 + (val1 - val2) / 2;
        if (half >= val) {
          vals[1] = val as number;
        }
        if (half < val) {
          vals[0] = val as number;
        }
      }
      if (val2 > val && val1 < val) {
        const half = val1 + (val2 - val1) / 2;
        if (half >= val) {
          vals[0] = val as number;
        }
        if (half < val) {
          vals[1] = val as number;
        }
      }
      console.log(vals);
      return vals;
    };

    const handleOnChange = (value: number[]): void => {
      console.log(value);
      setSliderValues(value);
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
      onClick && onClick(e);
      if (move.current) {
        return;
      }
      if (railRef.current) {
        const markOffset = railRef.current!.getBoundingClientRect();
        const value = getWidthToValue(
          e[vertical ? 'clientY' : 'clientX'] - markOffset[vertical ? 'y' : 'x']
        );
        handleOnChange(getRangeValue(value));
      }
    };

    const handleThumbOnDragging = (e: MouseEvent): void => {
      if (!move.current) {
        return;
      }
      const widthVal = getWidthToValue(
        e[vertical ? 'clientY' : 'clientX'] - startX.current + trackWidth.current
      );
      const val = sliderValues;
      if (widthVal !== currVal.current) {
        val[indexBar.current] = widthVal;
        const barStyl = calculateTrackStyle(val);
        setTrackStyle(barStyl);

        handleOnChange(sliderValues);
        currVal.current = widthVal;
      }
    };

    const handleThumbOnDragEnd = (): void => {
      move.current = false;
      window.removeEventListener('mousemove', handleThumbOnDragging);
      window.removeEventListener('mouseup', handleThumbOnDragEnd);
    };

    /**
     * Get track width info when click down the thumb button
     */
    const handleThumbOnMouseDown = (idx: number, e: React.MouseEvent<HTMLDivElement>): void => {
      if (disabled) {
        return;
      }

      indexBar.current = idx;
      move.current = true;
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
        return dotVal < sliderValues[1] && dotVal > sliderValues[0];
      }
    };

    useEffect(() => {
      const style = calculateTrackStyle();
      setTrackStyle(style);
    }, [calculateTrackStyle]);

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
              className={`${prefixCls}__thumb-container`}
              style={{ [vertical ? 'top' : 'left']: `${left}%` }}
              onMouseDown={(e): void => handleThumbOnMouseDown(idx, e)}>
              <Tooltip placement="top" title={value}>
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
                  })}
                />
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
