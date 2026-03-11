import React, { useState, useEffect, useContext } from 'react';
import classNames from 'classnames';
import { ConfigContext } from '../config-provider/config-context';
import { getPrefixCls } from '../_utils/general';
import { useLocale } from '../_utils/use-locale';
import {
  getMonthDaysArray,
  isSameDate,
  isToday,
  getPrevMonthDate,
  getNextMonthDate,
  getPrevYearDate,
  getNextYearDate,
} from '../date-picker/utils';
import { CalendarProps, CalendarMode } from './types';

const MONTH_NAMES_EN = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December',
];

const Calendar = React.forwardRef<HTMLDivElement, CalendarProps>((props, ref) => {
  const {
    defaultValue,
    fullscreen = true,
    disabledDate,
    dateCellRender,
    monthCellRender,
    headerRender,
    defaultMode = 'month',
    prefixCls: customisedCls,
    className,
    style,
    onChange,
    onSelect,
    onPanelChange,
    value: _value,
    mode: _mode,
    ...otherProps
  } = props;

  const configContext = useContext(ConfigContext);
  const prefixCls = getPrefixCls('calendar', configContext.prefixCls, customisedCls);
  const locale = useLocale();

  const [selectedDate, setSelectedDate] = useState<Date>(
    'value' in props ? (props.value as Date) : (defaultValue ?? new Date())
  );
  const [panelDate, setPanelDate] = useState<Date>(selectedDate);
  const [mode, setMode] = useState<CalendarMode>(
    'mode' in props ? (props.mode as CalendarMode) : defaultMode
  );

  useEffect(() => {
    if ('value' in props && props.value) {
      setSelectedDate(props.value);
      setPanelDate(props.value);
    }
  }, [props.value]);

  useEffect(() => {
    if ('mode' in props) {
      setMode(props.mode as CalendarMode);
    }
  }, [props.mode]);

  const weeks = locale?.DatePicker?.weeks ?? ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];
  const months = locale?.DatePicker?.months ?? [
    'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
    'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec',
  ];

  const cls = classNames(prefixCls, className, {
    [`${prefixCls}_fullscreen`]: fullscreen,
    [`${prefixCls}_card`]: !fullscreen,
  });

  const handleDateSelect = (date: Date) => {
    if (disabledDate?.(date)) return;
    if (!('value' in props)) {
      setSelectedDate(date);
    }
    setPanelDate(date);
    onSelect?.(date);
    onChange?.(date);
  };

  const handlePanelChange = (newDate: Date, newMode?: CalendarMode) => {
    setPanelDate(newDate);
    const m = newMode ?? mode;
    onPanelChange?.(newDate, m);
  };

  const handleModeChange = (newMode: CalendarMode) => {
    if (!('mode' in props)) {
      setMode(newMode);
    }
    onPanelChange?.(panelDate, newMode);
  };

  const handleMonthSelect = (month: number) => {
    const newDate = new Date(panelDate.getFullYear(), month, 1);
    handleDateSelect(newDate);
    handleModeChange('month');
  };

  const goPrev = () => {
    const newDate = mode === 'month' ? getPrevMonthDate(panelDate) : getPrevYearDate(panelDate);
    handlePanelChange(newDate);
  };

  const goNext = () => {
    const newDate = mode === 'month' ? getNextMonthDate(panelDate) : getNextYearDate(panelDate);
    handlePanelChange(newDate);
  };

  const renderHeader = () => {
    if (headerRender) {
      return headerRender({
        value: panelDate,
        mode,
        onChange: (date) => handlePanelChange(date),
        onModeChange: handleModeChange,
      });
    }

    const year = panelDate.getFullYear();
    const month = panelDate.getMonth();
    const monthName = locale?.locale === 'zh_CN'
      ? `${months[month]}`
      : MONTH_NAMES_EN[month];

    return (
      <div className={`${prefixCls}__header`}>
        <button type="button" className={`${prefixCls}__nav-btn`} onClick={goPrev} aria-label="Previous">
          ‹
        </button>
        <span className={`${prefixCls}__title`}>
          <button
            type="button"
            className={`${prefixCls}__title-btn`}
            onClick={() => handleModeChange(mode === 'month' ? 'year' : 'month')}
          >
            {mode === 'month' ? `${monthName} ${year}` : year}
          </button>
        </span>
        <button type="button" className={`${prefixCls}__nav-btn`} onClick={goNext} aria-label="Next">
          ›
        </button>
      </div>
    );
  };

  const renderMonthPanel = () => {
    const panelDays = getMonthDaysArray(panelDate);

    return (
      <table className={`${prefixCls}__table`} role="grid">
        <thead>
          <tr>
            {weeks.map((week, i) => (
              <th key={i} className={`${prefixCls}__cell-header`} scope="col">
                {week}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {Array.from({ length: panelDays.length / 7 }, (_, row) => (
            <tr key={row}>
              {panelDays.slice(row * 7, row * 7 + 7).map((dayCell, col) => {
                const isDisabled = disabledDate?.(dayCell.date) ?? false;
                const cellCls = classNames(`${prefixCls}__cell`, {
                  [`${prefixCls}__cell_in-view`]: dayCell.isThisMonth,
                  [`${prefixCls}__cell_today`]: isToday(dayCell.date),
                  [`${prefixCls}__cell_selected`]: isSameDate(selectedDate, dayCell.date),
                  [`${prefixCls}__cell_disabled`]: isDisabled,
                });
                return (
                  <td
                    key={col}
                    className={cellCls}
                    onClick={() => handleDateSelect(dayCell.date)}
                    role="gridcell"
                  >
                    <div className={`${prefixCls}__cell-inner`}>
                      <span className={`${prefixCls}__cell-date`}>{dayCell.label}</span>
                      {dateCellRender && dayCell.isThisMonth && (
                        <div className={`${prefixCls}__cell-content`}>
                          {dateCellRender(dayCell.date)}
                        </div>
                      )}
                    </div>
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    );
  };

  const renderYearPanel = () => {
    return (
      <div className={`${prefixCls}__months`}>
        {months.map((monthLabel, i) => {
          const monthDate = new Date(panelDate.getFullYear(), i, 1);
          const isCurrentMonth = panelDate.getMonth() === i;
          const cellCls = classNames(`${prefixCls}__month-cell`, {
            [`${prefixCls}__month-cell_selected`]: isCurrentMonth,
          });
          return (
            <div
              key={i}
              className={cellCls}
              onClick={() => handleMonthSelect(i)}
            >
              <div className={`${prefixCls}__month-inner`}>
                <span>{monthLabel}</span>
                {monthCellRender && (
                  <div className={`${prefixCls}__month-content`}>
                    {monthCellRender(monthDate)}
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    );
  };

  return (
    <div {...otherProps} ref={ref} className={cls} style={style}>
      {renderHeader()}
      <div className={`${prefixCls}__body`}>
        {mode === 'month' ? renderMonthPanel() : renderYearPanel()}
      </div>
    </div>
  );
});

Calendar.displayName = 'Calendar';
export default Calendar;
