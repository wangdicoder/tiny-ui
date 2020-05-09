import React, { useCallback, useContext, useEffect, useRef, useState } from 'react';
import classNames from 'classnames';
import { BaseProps } from '../_utils/props';
import { ConfigContext } from '../config-provider/config-context';
import { getPrefixCls } from '../_utils/general';

export type DateType = {
  day: number;
  hour: number;
  min: number;
  sec: number;
  millisec: number;
};

export interface CountdownProps extends BaseProps {
  value?: Date;
  onFinish?: () => void;
  millisec?: boolean;
  children?: (date: DateType) => React.ReactNode;
}

const Countdown = (props: CountdownProps): JSX.Element => {
  const {
    millisec = false,
    prefixCls: customisedCls,
    value,
    onFinish,
    className,
    style,
    children,
  } = props;
  const configContext = useContext(ConfigContext);
  const prefixCls = getPrefixCls('countdown', configContext.prefixCls, customisedCls);
  const cls = classNames(prefixCls, className);
  const [date, setDate] = useState<DateType>({ day: 0, hour: 0, min: 0, sec: 0, millisec: 0 });
  const timerRef = useRef<number>();

  const startInterval = useCallback((): void => {
    timerRef.current = window.setInterval(
      () => {
        const distance = value!.getTime() - Date.now();

        // when the count down finished
        if (distance < 0) {
          window.clearInterval(timerRef.current);
          setDate({ day: 0, hour: 0, min: 0, sec: 0, millisec: 0 });
          onFinish && onFinish();
          return;
        }

        // calculate the specific time
        const day = Math.floor(distance / 86400000);
        const hour = Math.floor((distance % 86400000) / 3600000);
        const min = Math.floor((distance % 3600000) / 60000);
        const sec = Math.floor((distance % 60000) / 1000);
        const millisecond = Math.floor((distance % 60000) % 1000);
        setDate({ day, hour, min, sec, millisec: millisecond });
      },
      millisec ? 1 : 1000
    );
  }, [millisec, onFinish, value]);

  useEffect(() => {
    value && startInterval();

    return (): void => {
      window.clearInterval(timerRef.current);
    };
  }, [value, startInterval]);

  return (
    <div className={cls} style={style}>
      {typeof children === 'function' && children(date)}
    </div>
  );
};

Countdown.displayName = 'Countdown';

export default Countdown;
