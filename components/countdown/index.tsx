import React, { useEffect, useState } from 'react';
import classnames from 'classnames';

type DateType = {
  day: number,
  hour: number,
  min: number,
  sec: number,
  millisec: number,
};

export type CountdownProps = {
  value?: Date,
  onFinish?: () => void,
  millisec?: boolean,
  prefixCls?: string,
  className?: string,
  style?: React.CSSProperties,
  children?: (date: DateType) => React.ReactNode,
} & typeof defaultProps;

const defaultProps = {
  prefixCls: 'ty-countdown',
  millisec: false,
};

let intervalHandler: any = null;

const Countdown = (props: CountdownProps) => {
  const { value, onFinish, millisec, prefixCls, className, style, children } = props;
  const cls = classnames(prefixCls, className);
  const [date, setDate] = useState<DateType>({ day: 0, hour: 0, min: 0, sec: 0, millisec: 0 });

  const startInterval = () => {
    intervalHandler = setInterval(() => {
      const distance = value!.getTime() - Date.now();

      // when the count down finished
      if (distance < 0) {
        clearInterval(intervalHandler);
        setDate({ day: 0, hour: 0, min: 0, sec: 0, millisec: 0 });
        onFinish && onFinish();
        return;
      }

      // calculate the specific time
      const day = Math.floor(distance / 86400000);
      const hour = Math.floor((distance % 86400000) / 3600000);
      const min = Math.floor((distance % 3600000) / 60000);
      const sec = Math.floor((distance % 60000) / 1000);
      const millisecond = Math.floor(distance % 60000 % 1000);
      setDate({ day, hour, min, sec, millisec: millisecond });
    }, millisec ? 1 : 1000);
  };

  useEffect(() => {
    value && startInterval();

    return () => {
      clearInterval(intervalHandler);
    };
  }, []);

  return (
    <div className={cls} style={style}>
      {(typeof children === 'function') && children(date)}
    </div>
  );
};

Countdown.defaultProps = defaultProps;

export default Countdown;
