import React from 'react';
import { MONTHS, getPrevMonthDate, getNextMonthDate, getPrevYearDate, getNextYearDate } from './utils';

export type PickerHeaderProps = {
    date: Date,
    onChange: (date: Date) => void,
    prefixCls?: string,
};

const PickerHeader = (props: PickerHeaderProps) => {
    const { date, onChange, prefixCls } = props;

    return (
        <div className={prefixCls}>
            <div className={`${prefixCls}__prev-year`} onClick={() => onChange(getPrevYearDate(date))}>«</div>
            <div className={`${prefixCls}__prev-month`} onClick={() => onChange(getPrevMonthDate(date))}>‹</div>
            <div className={`${prefixCls}__caption`}>
                <label className={`${prefixCls}__month`}>{MONTHS[date.getMonth()]}</label>
                <label className={`${prefixCls}__year`}>{date.getFullYear()}</label>
            </div>
            <div className={`${prefixCls}__next-month`} onClick={() => onChange(getNextMonthDate(date))}>›</div>
            <div className={`${prefixCls}__next-year`} onClick={() => onChange(getNextYearDate(date))}>»</div>
        </div>
    );
};

PickerHeader.defaultProps = {
    prefixCls: 'ty-date-picker-header',
};

export default PickerHeader;
