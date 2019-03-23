import * as React from 'react';
import './style/index.css';
import classNames from 'classnames';

export type TooltipProps = {
    prefixCls?: string,
    className?: string,
};

const Tooltip = (props: TooltipProps) => {
    const { className, prefixCls } = props;
    const cls = classNames(
        prefixCls,
        className,
    );

    return (
        <div className={cls}>

        </div>
    );
};

export default Tooltip;
