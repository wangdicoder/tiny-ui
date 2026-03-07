import classNames from 'classnames';
import { MONTHS } from './utils';

export type PickerMonthProps = {
  date: Date;
  panelDate: Date;
  onChange: (date: Date) => void;
  prefixCls?: string;
};

const PickerMonth = ({ date, panelDate, onChange, prefixCls = 'ty-date-picker-month' }: PickerMonthProps) => {
  const currentYear = panelDate.getFullYear();
  const selectedMonth = date.getFullYear() === currentYear ? date.getMonth() : -1;
  const now = new Date();
  const isCurrentYear = now.getFullYear() === currentYear;

  return (
    <div className={prefixCls}>
      <table className={`${prefixCls}__table`}>
        <tbody>
          {[0, 1, 2].map((row) => (
            <tr key={row}>
              {[0, 1, 2, 3].map((col) => {
                const monthIdx = row * 4 + col;
                const cls = classNames(`${prefixCls}__cell`, {
                  [`${prefixCls}__cell_selected`]: monthIdx === selectedMonth,
                  [`${prefixCls}__cell_current`]: isCurrentYear && monthIdx === now.getMonth(),
                });
                return (
                  <td key={col} className={`${prefixCls}__item`}>
                    <div
                      className={cls}
                      onClick={() => onChange(new Date(currentYear, monthIdx, 1))}>
                      {MONTHS[monthIdx]}
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

export default PickerMonth;
