import classNames from 'classnames';
import { WEEKS, getMonthDaysArray, isSameDate, isToday } from './utils';

export type PickerDayProps = {
  date: Date | null;
  panelDate: Date;
  disabledDate?: (current: Date) => boolean;
  onChange: (date: Date) => void;
  panelOnChange: (panelDate: Date) => void;
  prefixCls: string;
};

const PickerDay = (props: PickerDayProps) => {
  const { prefixCls, date, onChange, panelDate, panelOnChange, disabledDate } = props;
  const panelDays = getMonthDaysArray(panelDate);

  const handleClick = (dayCell: typeof panelDays[0]) => {
    if (disabledDate?.(dayCell.date)) return;
    onChange(dayCell.date);
    if (!dayCell.isThisMonth) panelOnChange(dayCell.date);
  };

  return (
    <div className={`${prefixCls}__body`}>
      <table className={`${prefixCls}__table`}>
        <thead>
          <tr>
            {WEEKS.map((week) => (
              <th key={week} className={`${prefixCls}__cell-header`}>
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
                const cls = classNames(`${prefixCls}__cell`, {
                  [`${prefixCls}__cell_in-view`]: dayCell.isThisMonth,
                  [`${prefixCls}__cell_today`]: isToday(dayCell.date),
                  [`${prefixCls}__cell_selected`]: date && isSameDate(date, dayCell.date),
                  [`${prefixCls}__cell_disabled`]: isDisabled,
                });
                return (
                  <td key={col} className={cls} onClick={() => handleClick(dayCell)}>
                    <div className={`${prefixCls}__cell-inner`}>
                      {dayCell.label}
                    </div>
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PickerDay;
