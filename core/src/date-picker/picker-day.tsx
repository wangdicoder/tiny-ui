import React, { useEffect, useRef } from 'react';
import classnames from 'classnames';
import { WEEKS, getMonthDaysArray } from './utils';

export type PickerDayProps = {
    date?: Date,
    onChange?: (date: Date) => void,
    prefixCls?: string,
};

const PickerDay = (props: PickerDayProps) => {
    const { onChange, prefixCls } = props;
    const tbodyEl = useRef<HTMLTableSectionElement>(null);

    const tbodyOnClick = (e: MouseEvent) => {
        const target = e.target as HTMLElement;
        if (target.nodeName === 'DIV') {
            onChange && onChange(new Date(target.dataset.date!));
        }
    };

    useEffect(() => {
        tbodyEl.current && tbodyEl.current.addEventListener('click', tbodyOnClick);

        return () => {
            tbodyEl.current && tbodyEl.current.removeEventListener('click', tbodyOnClick);
        };
    });

    const _renderDays = () => {
        const trs = [];
        const days = getMonthDaysArray();
        let idx = 0;
        for (let i = 0; i < days.length / 7; i++) {
            const tds = [];
            for (let j = 0; j < 7; j++, idx++) {
                const cls = classnames(`${prefixCls}__day-cell`, {
                    [`${prefixCls}__day-cell_active`]: days[idx].isThisMonth,
                    [`${prefixCls}__day-cell_today`]: days[idx].today,
                });
                tds.push((
                    <td key={`${idx}_${days[idx].label}`} className={`${prefixCls}__data-item`}>
                        <div className={cls} data-date={days[idx].date}>{days[idx].label}</div>
                    </td>
                ));
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
                    {WEEKS.map((week) => (
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

PickerDay.defaultProps = {
    prefixCls: 'ty-date-picker-day',
};

export default PickerDay;
