import React, { useEffect, useRef } from 'react';
import classNames from 'classnames';
import { WEEKS, getMonthDaysArray, isSameDate, isToday } from './utils';

export type PickerDayProps = {
  date: Date;
  onChange: (date: Date) => void;
  panelDate: Date;
  panelOnChange: (panelDate: Date) => void;
  prefixCls?: string;
};

const PickerDay = (props: PickerDayProps) => {
  const { prefixCls = 'ty-date-picker-day', date, onChange, panelDate, panelOnChange } = props;
  const tbodyEl = useRef<HTMLTableSectionElement | null>(null);
  const panelDays = getMonthDaysArray(panelDate);

  // Delegate click event
  const _tbodyOnClick = (e: MouseEvent) => {
    const target = e.target as HTMLElement;
    if (target.nodeName === 'DIV') {
      const dateIdx = parseInt(target.dataset.date!, 10);
      onChange(panelDays[dateIdx].date);
      // If the selected date is not in this month, update panel
      !panelDays[dateIdx].isThisMonth && panelOnChange(panelDays[dateIdx].date);
    }
  };

  useEffect(() => {
    tbodyEl.current &&
      (tbodyEl.current as HTMLTableSectionElement).addEventListener('click', _tbodyOnClick);

    return () => {
      tbodyEl.current &&
        (tbodyEl.current as HTMLTableSectionElement).removeEventListener('click', _tbodyOnClick);
    };
  });

  const _renderDays = () => {
    const trs = [];
    let idx = 0;
    for (let i = 0; i < panelDays.length / 7; i++) {
      const tds = [];
      for (let j = 0; j < 7; j++, idx++) {
        const cls = classNames(`${prefixCls}__day-cell`, {
          [`${prefixCls}__day-cell_active`]: panelDays[idx].isThisMonth,
          [`${prefixCls}__day-cell_today`]: isToday(panelDays[idx].date),
          [`${prefixCls}__day-cell_selected`]: isSameDate(date, panelDays[idx].date),
        });
        tds.push(
          <td key={`${idx}_${panelDays[idx].label}`} className={`${prefixCls}__data-item`}>
            <div className={cls} data-date={idx}>
              {panelDays[idx].label}
            </div>
          </td>
        );
      }
      trs.push(<tr key={`${idx}${i}`}>{tds}</tr>);
    }

    return trs;
  };

  return (
    <div className={prefixCls}>
      <table className={`${prefixCls}__table`}>
        <thead>
          <tr className={`${prefixCls}__head`}>
            {WEEKS.map(week => (
              <th key={week} className={`${prefixCls}__head-item`}>
                <div className={`${prefixCls}__week-cell`}>{week}</div>
              </th>
            ))}
          </tr>
        </thead>
        <tbody ref={tbodyEl}>{_renderDays()}</tbody>
      </table>
    </div>
  );
};

export default PickerDay;
