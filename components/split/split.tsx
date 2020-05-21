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
  /** Determine which pane is the target to calculate the size */
  primary?: 1 | 2;

  /** Split mode */
  mode?: SplitMode;

  /** Disabled flag */
  disabled?: boolean;

  /** Minimum width / height of the target pane */
  minSize?: number;

  /** Maximum width / height of the target pane */
  maxSize?: number;

  /** Control the size of target pane */
  size?: number;

  /** Default size of target pane */
  defaultSize?: number;

  /** Resizer's other props */
  resizerProps?: object;

  step?: number;

  onChange?: (size: number) => void;
}

const Split = (props: SplitProps): JSX.Element => {
  const {
    primary = 1,
    mode = 'vertical',
    disabled = false,
    step,
    maxSize,
    minSize = 50,
    className,
    onChange,
    prefixCls: customisedCls,
    style: defaultStyle,
    resizerProps,
    children,
    ...otherProps
  } = props;
  const configContext = useContext(ConfigContext);
  const prefixCls = getPrefixCls('split', configContext.prefixCls, customisedCls);
  const cls = classNames(prefixCls, className, {
    [`${prefixCls}_${mode}`]: mode,
    [`${prefixCls}_disabled`]: disabled,
  });
  const [pane1Size, setPane1Size] = useState(props.size || props.defaultSize || minSize);
  const [pane2Size, setPane2Size] = useState(props.size || props.defaultSize || minSize);
  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const pane1Ref = useRef<HTMLDivElement | null>(null);
  const pane2Ref = useRef<HTMLDivElement | null>(null);
  const isActiveMove = useRef(false);
  const lastPosition = useRef(0);

  const resizerOnMouseDown = (e: React.MouseEvent<HTMLElement>): void => {
    isActiveMove.current = true;
    lastPosition.current = e[mode === 'vertical' ? 'clientX' : 'clientY'];
  };

  const onMouseMove = useCallback(
    (e: MouseEvent): void => {
      if (!disabled && isActiveMove.current) {
        const isFirstPrimary = primary === 1;
        const node = isFirstPrimary ? pane1Ref.current : pane2Ref.current;
        // const node2 = isFirstPrimary ? pane2Ref.current : pane1Ref.current;
        if (node) {
          if (node.getBoundingClientRect) {
            const width = node.getBoundingClientRect().width;
            const height = node.getBoundingClientRect().height;
            const current = e[mode === 'vertical' ? 'clientX' : 'clientY'];
            const size = mode === 'vertical' ? width : height;
            let positionDelta = lastPosition.current - current;
            if (step) {
              if (Math.abs(positionDelta) < step) {
                return;
              }
              positionDelta = Math.round((positionDelta / step) * step);
            }
            const sizeDelta = isFirstPrimary ? positionDelta : -positionDelta;

            let newMaxSize = 0;
            if (maxSize && typeof maxSize === 'number') {
              newMaxSize = maxSize;
            } else if (maxSize && typeof maxSize === 'string') {
              const splitPane = wrapperRef.current;
              if (splitPane) {
                if (mode === 'vertical') {
                  newMaxSize =
                    (splitPane.getBoundingClientRect().width * parseFloat(maxSize)) / 100;
                } else {
                  newMaxSize =
                    (splitPane.getBoundingClientRect().height * parseFloat(maxSize)) / 100;
                }
              }
            } else {
              const splitPane = wrapperRef.current;
              if (splitPane) {
                if (mode === 'vertical') {
                  newMaxSize = splitPane.getBoundingClientRect().width;
                } else {
                  newMaxSize = splitPane.getBoundingClientRect().height;
                }
              }
            }

            let newSize = size - sizeDelta;
            const newPosition = lastPosition.current - positionDelta;

            if (newSize < minSize) {
              newSize = minSize;
            } else if (maxSize && newSize > newMaxSize) {
              newSize = newMaxSize;
            } else {
              lastPosition.current = newPosition;
            }

            console.log(newSize);

            onChange && onChange(newSize);
            isFirstPrimary ? setPane1Size(newSize) : setPane2Size(newSize);
          }
        }
      }
    },
    [disabled, maxSize, minSize, mode, onChange, primary, step]
  );

  const onMouseUp = (e: MouseEvent): void => {
    isActiveMove.current = false;
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

  useEffect(() => {}, []);

  warning(React.Children.count(children) > 2, 'There are more than 2 children inside Split.');
  const childrenList = React.Children.toArray(children).filter((child) => child);

  return (
    <SplitContext.Provider value={{ mode }}>
      <div ref={wrapperRef} {...otherProps} className={cls} style={style}>
        <Pane ref={pane1Ref} size={pane1Size} style={{ flex: '0 0 auto' }}>
          {childrenList[0]}
        </Pane>
        <Resizer {...resizerProps} mode={mode} onMouseDown={resizerOnMouseDown} />
        <Pane ref={pane2Ref} size={pane2Size} style={{ flex: '1 1 0%' }}>
          {childrenList[1]}
        </Pane>
      </div>
    </SplitContext.Provider>
  );
};

Split.displayName = 'Split';

export default Split;
