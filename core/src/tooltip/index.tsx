import React from 'react';
import classnames from 'classnames';

export type TooltipProps = {
    prefixCls?: string,
    className?: string,
};

const Tooltip = (props: TooltipProps) => {
    const { className, prefixCls } = props;
    const cls = classnames(
        prefixCls,
        className,
    );

    return (
        <div className={cls}>

        </div>
    );
};

export default Tooltip;
