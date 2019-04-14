import React from 'react';
import {} from './utils';

export type PickerHeaderProps = {
    prefixCls?: string,
};

const PickerHeader = (props: PickerHeaderProps) => {
    const { prefixCls } = props;

    return (
        <div className={prefixCls}>
            <div className={`${prefixCls}__prev-year`}>«</div>
            <div className={`${prefixCls}__prev-month`}>‹</div>
            <div className={`${prefixCls}__caption`}>
                <label className={`${prefixCls}__month`}>Apr</label>
                <label className={`${prefixCls}__year`}>2019</label>
            </div>
            <div className={`${prefixCls}__next-month`}>›</div>
            <div className={`${prefixCls}__next-year`}>»</div>
        </div>
    );
};

PickerHeader.defaultProps = {
    prefixCls: 'ty-date-picker-header',
};

export default PickerHeader;
