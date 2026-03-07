import React from 'react';
import classNames from 'classnames';

export type PickerYearProps = {
  date: Date;
  panelDate: Date;
  onChange: (date: Date) => void;
  prefixCls?: string;
};

const PickerYear = ({ date, panelDate, onChange, prefixCls = 'ty-date-picker-year' }: PickerYearProps) => {
  const currentYear = panelDate.getFullYear();
  const startYear = currentYear - (currentYear % 10);
  const selectedYear = date.getFullYear();
  const now = new Date();

  const years: number[] = [];
  for (let i = startYear - 1; i <= startYear + 10; i++) {
    years.push(i);
  }

  return (
    <div className={prefixCls}>
      <table className={`${prefixCls}__table`}>
        <tbody>
          {[0, 1, 2].map((row) => (
            <tr key={row}>
              {[0, 1, 2, 3].map((col) => {
                const idx = row * 4 + col;
                const year = years[idx];
                const isOutOfRange = year < startYear || year > startYear + 9;
                const cls = classNames(`${prefixCls}__cell`, {
                  [`${prefixCls}__cell_selected`]: year === selectedYear,
                  [`${prefixCls}__cell_current`]: year === now.getFullYear(),
                  [`${prefixCls}__cell_dim`]: isOutOfRange,
                });
                return (
                  <td key={col} className={`${prefixCls}__item`}>
                    <div
                      className={cls}
                      onClick={() => onChange(new Date(year, panelDate.getMonth(), 1))}>
                      {year}
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

export default PickerYear;
