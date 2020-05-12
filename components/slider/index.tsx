import React, { useContext, useRef, useState } from 'react';
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
    const [values] = useState(
      ('value' in props
        ? Array.isArray(props.value)
          ? props.value
          : [props.value]
        : [defaultValue]) as number[]
    );
    const railRef = useRef<HTMLDivElement | null>(null);
    const trackRef = useRef<HTMLDivElement | null>(null);
    const indexBar = useRef(0);
    const move = useRef(false);
    const startX = useRef(0);
    const trackWidth = useRef(0);
    const trackOffsetLeft = useRef(0);
    const currVal = useRef(0);

    const getValueToPercent = (value: number): number => {
      return ((value - min) * 100) / (max - min);
    };

    const getTrackStyle = (value?: number[]): React.CSSProperties => {
      const _values = value || values;
      const barStyl: React.CSSProperties = { left: '0%', right: '100%' };
      if (values.length === 1) {
        barStyl.right = `${100 - getValueToPercent(_values[0])}%`;
      } else {
        const leftValue = _values[0] > _values[1] ? _values[1] : _values[0];
        const rightValue = _values[0] > _values[1] ? _values[0] : _values[1];
        barStyl.left = `${getValueToPercent(leftValue)}%`;
        barStyl.right = `${100 - getValueToPercent(rightValue)}%`;
      }
      return barStyl;
    };
    const [trackStyle, setTrackStyle] = useState<React.CSSProperties>(getTrackStyle());

    const getWidthToValue = (width: number): number => {
      const equal = (max - min) / step;
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

      const num = equal * (percent / 100) + 0.5;
      const numFloor = Math.floor(num);
      return numFloor * step + min;
    };

    const handleThumbOnDragging = (e: MouseEvent): void => {
      if (!move.current) {
        return;
      }
      const widthVal = getWidthToValue(
        e[vertical ? 'clientY' : 'clientX'] - startX.current + trackWidth.current
      );
      const val = values;
      if (widthVal !== currVal.current) {
        val[indexBar.current] = widthVal;
        const barStyl = getTrackStyle(val);
        setTrackStyle(barStyl);

        onChange && onChange(values);
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
      const val = values;
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
      if (values.length === 1) {
        return dotVal < values[0];
      } else {
        return dotVal < values[1] && dotVal > values[0];
      }
    };

    const sliderOnClick = (e: React.MouseEvent<HTMLDivElement>): void => {};

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
        {values.map((value, idx) => {
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
