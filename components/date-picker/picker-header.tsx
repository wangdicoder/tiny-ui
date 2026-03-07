import React from 'react';
import { MONTHS } from './utils';

export type PickerMode = 'day' | 'month' | 'year';

export type PickerHeaderProps = {
  date: Date;
  mode: PickerMode;
  onChange: (date: Date) => void;
  onModeChange: (mode: PickerMode) => void;
  prefixCls?: string;
};

const PickerHeader = ({
  date,
  mode,
  onChange,
  onModeChange,
  prefixCls = 'ty-date-picker-header',
}: PickerHeaderProps) => {
  const year = date.getFullYear();
  const startDecade = year - (year % 10);

  const handlePrevYear = () => {
    if (mode === 'year') {
      onChange(new Date(year - 10, date.getMonth(), 1));
    } else {
      onChange(new Date(year - 1, date.getMonth(), date.getDate()));
    }
  };

  const handleNextYear = () => {
    if (mode === 'year') {
      onChange(new Date(year + 10, date.getMonth(), 1));
    } else {
      onChange(new Date(year + 1, date.getMonth(), date.getDate()));
    }
  };

  const handlePrevMonth = () => {
    const m = date.getMonth();
    const prevMonth = m > 0 ? m - 1 : 11;
    const prevYear = m > 0 ? year : year - 1;
    onChange(new Date(prevYear, prevMonth, date.getDate()));
  };

  const handleNextMonth = () => {
    const m = date.getMonth();
    const nextMonth = m < 11 ? m + 1 : 0;
    const nextYear = m < 11 ? year : year + 1;
    onChange(new Date(nextYear, nextMonth, date.getDate()));
  };

  const renderCaption = () => {
    if (mode === 'year') {
      return (
        <div className={`${prefixCls}__caption`}>
          <label className={`${prefixCls}__year`}>{startDecade} - {startDecade + 9}</label>
        </div>
      );
    }
    if (mode === 'month') {
      return (
        <div className={`${prefixCls}__caption`}>
          <label
            className={`${prefixCls}__year`}
            onClick={() => onModeChange('year')}
            style={{ cursor: 'pointer' }}>
            {year}
          </label>
        </div>
      );
    }
    return (
      <div className={`${prefixCls}__caption`}>
        <label
          className={`${prefixCls}__month`}
          onClick={() => onModeChange('month')}
          style={{ cursor: 'pointer' }}>
          {MONTHS[date.getMonth()]}
        </label>
        <label
          className={`${prefixCls}__year`}
          onClick={() => onModeChange('year')}
          style={{ cursor: 'pointer' }}>
          {year}
        </label>
      </div>
    );
  };

  return (
    <div className={prefixCls}>
      <div className={`${prefixCls}__prev-year`} onClick={handlePrevYear}>
        «
      </div>
      {mode === 'day' && (
        <div className={`${prefixCls}__prev-month`} onClick={handlePrevMonth}>
          ‹
        </div>
      )}
      {renderCaption()}
      {mode === 'day' && (
        <div className={`${prefixCls}__next-month`} onClick={handleNextMonth}>
          ›
        </div>
      )}
      <div className={`${prefixCls}__next-year`} onClick={handleNextYear}>
        »
      </div>
    </div>
  );
};

export default PickerHeader;
