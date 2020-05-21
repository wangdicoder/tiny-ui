import React, { useCallback, useContext, useEffect, useRef, useState } from 'react';
import classNames from 'classnames';
import Resizer from './resizer';
import { BaseProps } from '../_utils/props';
import { ConfigContext } from '../config-provider/config-context';
import { getPrefixCls } from '../_utils/general';
import Pane from './split-pane';
import warning from '../_utils/warning';
import { SplitContext } from './split-context';

export type SplitMode = 'horizontal' | 'vertical';

export interface SplitProps
  extends BaseProps,
    Omit<React.PropsWithoutRef<JSX.IntrinsicElements['div']>, 'onChange'> {
  /** Split mode */
  mode?: SplitMode;

  /** Disabled flag */
  disabled?: boolean;

  /** Minimum width / height of the target pane */
  min?: number | string;

  /** Maximum width / height of the target pane */
  max?: number | string;

  /** Control the size of target pane */
  size?: number | string;

  /** Default size of target pane */
  defaultSize?: number | string;

  /** Resizer's other props */
  resizerProps?: object;

  /** Drag step */
  step?: number;

  resizerSize?: number;

  onChange?: (size: number | string) => void;
  onDragStarted?: () => void;
  onDragFinished?: () => void;
}

const Split = (props: SplitProps): JSX.Element => {
  const {
    mode = 'vertical',
    disabled = false,
    min = 50,
    max = 50,
    resizerSize = 6,
    step,
    onChange,
    onDragStarted,
    onDragFinished,
    prefixCls: customisedCls,
    style: defaultStyle,
    resizerProps,
    className,
    children,
    ...otherProps
  } = props;
  const configContext = useContext(ConfigContext);
  const prefixCls = getPrefixCls('split', configContext.prefixCls, customisedCls);
  const cls = classNames(prefixCls, className, {
    [`${prefixCls}_${mode}`]: mode,
    [`${prefixCls}_disabled`]: disabled,
  });
  const [pane1Size, setPane1Size] = useState<number | undefined>(undefined);
  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const paneRef = useRef<HTMLDivElement | null>(null);
  const isActiveMove = useRef(false);
  const lastPosition = useRef(0);
  const wrapper = wrapperRef.current;

  const getSizeNumber = useCallback(
    (size: number | string): number => {
      if (typeof size === 'string') {
        if (wrapper) {
          const { width, height } = wrapper.getBoundingClientRect();
          return ((mode === 'vertical' ? width : height) * parseFloat(size)) / 100;
        }
      } else {
        return size;
      }
      return 0;
    },
    [mode, wrapper]
  );
  const minSize = getSizeNumber(min);
  let maxSize = getSizeNumber(max);
  if (wrapper) {
    const { width, height } = wrapper.getBoundingClientRect();
    maxSize = (mode === 'vertical' ? width : height) - maxSize - resizerSize;
  }

  const resizerOnMouseDown = (e: React.MouseEvent<HTMLElement>): void => {
    isActiveMove.current = true;
    lastPosition.current = e[mode === 'vertical' ? 'clientX' : 'clientY'];
    onDragStarted && onDragStarted();
  };

  const onMouseMove = useCallback(
    (e: MouseEvent): void => {
      if (!disabled && isActiveMove.current) {
        const pane = paneRef.current;
        if (pane) {
          if (pane.getBoundingClientRect) {
            const width = pane.getBoundingClientRect().width;
            const height = pane.getBoundingClientRect().height;
            const current = e[mode === 'vertical' ? 'clientX' : 'clientY'];
            const size = mode === 'vertical' ? width : height;
            let offset = lastPosition.current - current;
            if (step) {
              if (Math.abs(offset) < step) {
                return;
              }
              offset = Math.round((offset / step) * step);
            }

            let newSize = size - offset;
            const newPosition = lastPosition.current - offset;

            if (newSize < minSize) {
              newSize = minSize;
            } else if (newSize > maxSize) {
              newSize = maxSize;
            } else {
              lastPosition.current = newPosition;
            }

            onChange && onChange(newSize);
            setPane1Size(newSize);
          }
        }
      }
    },
    [disabled, maxSize, minSize, mode, onChange, step]
  );

  const onMouseUp = (e: MouseEvent): void => {
    isActiveMove.current = false;
    onDragFinished && onDragFinished();
  };

  let style: React.CSSProperties;
  if (mode === 'vertical') {
    style = {
      ...defaultStyle,
    };
  } else {
    style = {
      ...defaultStyle,
      minHeight: '100%',
      width: '100%',
    };
  }

  useEffect(() => {
    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseup', onMouseUp);

    return (): void => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseup', onMouseUp);
    };
  }, [onMouseMove]);

  useEffect(() => {
    const initialSize = getSizeNumber(props.size || props.defaultSize || minSize);
    setPane1Size(initialSize);
  }, [getSizeNumber, props.size, props.defaultSize, minSize]);

  warning(React.Children.count(children) > 2, 'There are more than 2 children inside Split.');
  const childrenList = React.Children.toArray(children).filter((child) => child);

  return (
    <SplitContext.Provider value={{ mode }}>
      <div ref={wrapperRef} {...otherProps} className={cls} style={style}>
        <Pane ref={paneRef} size={pane1Size} style={{ flex: '0 0 auto' }}>
          {childrenList[0]}
        </Pane>
        <Resizer
          {...resizerProps}
          size={resizerSize}
          mode={mode}
          onMouseDown={resizerOnMouseDown}
        />
        <Pane style={{ flex: '1 1 0%' }}>{childrenList[1]}</Pane>
      </div>
    </SplitContext.Provider>
  );
};

Split.displayName = 'Split';

export default Split;
