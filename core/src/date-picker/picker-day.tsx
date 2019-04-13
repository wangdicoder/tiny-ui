import React from 'react';

export type PickerDayProps = {
    prefixCls?: string,
};

const WEEKS = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];

const PickerDay = (props: PickerDayProps) => {
    const { prefixCls } = props;

    const _renderWeek = () => {
        return (
            <tr>

            </tr>
        );
    };

    return (
        <div className={prefixCls}>
            <table className={`${prefixCls}__table`}>
                <thead>
                <tr className={`${prefixCls}__head`}>
                    {WEEKS.map((week) => (
                        <th key={week} className={`${prefixCls}__head-item`}>{week}</th>
                    ))}
                </tr>
                </thead>
                <tbody>{_renderWeek()}</tbody>
            </table>
        </div>
    );
};

PickerDay.defaultProps = {
    prefixCls: 'ty-date-picker-day',
};

export default PickerDay;
