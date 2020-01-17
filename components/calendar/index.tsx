import React from 'react';
import classNames from 'classnames';
import { BaseProps } from '../_utils/props';

export interface CalendarProps extends BaseProps {
  defaultValue?: Date;
  value?: Date;
  disabledDate?: (currentDate: Date) => boolean;
}

const Calendar = (props: CalendarProps): React.ReactElement => {
  const { prefixCls, className, style } = props;
  const cls = classNames(prefixCls, className);

  const renderCalenderHeader = (): React.ReactElement => {
    return <thead></thead>;
  };

  return (
    <div className={cls} style={style}>
      <div className={`${prefixCls}__caption`}>
        <div className={`${prefixCls}__title`}></div>
        <div className={`${prefixCls}__btn-group`}></div>
      </div>
      <div className={`${prefixCls}__body`}>
        <table>{renderCalenderHeader()}</table>
      </div>
    </div>
  );
};

export default Calendar;
