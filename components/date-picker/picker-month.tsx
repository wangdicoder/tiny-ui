import classNames from 'classnames';
import { MONTHS } from './utils';

export type PickerMonthProps = {
  date: Date | null;
  panelDate: Date;
  onChange: (date: Date) => void;
  prefixCls: string;
};

const PickerMonth = ({ date, panelDate, onChange, prefixCls }: PickerMonthProps) => {
  const panelYear = panelDate.getFullYear();
  const selectedMonth = date && date.getFullYear() === panelYear ? date.getMonth() : -1;
  const now = new Date();
  const isCurrentYear = now.getFullYear() === panelYear;

  return (
    <div className={`${prefixCls}__body`}>
      <table className={`${prefixCls}__table`}>
        <tbody>
          {[0, 1, 2].map((row) => (
            <tr key={row}>
              {[0, 1, 2, 3].map((col) => {
                const monthIdx = row * 4 + col;
                const cls = classNames(`${prefixCls}__cell`, {
                  [`${prefixCls}__cell_selected`]: monthIdx === selectedMonth,
                  [`${prefixCls}__cell_today`]: isCurrentYear && monthIdx === now.getMonth(),
                });
                return (
                  <td
                    key={col}
                    className={cls}
                    onClick={() => onChange(new Date(panelYear, monthIdx, 1))}>
                    <div className={`${prefixCls}__cell-inner`}>{MONTHS[monthIdx]}</div>
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
