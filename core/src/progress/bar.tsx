import React from 'react';
import classnames from 'classnames';

const strokePresetColors = ['primary', 'blue', 'green', 'yellow', 'red', 'pink'];

export type BarProps = {
    percent?: number,
    /** Customise label style for both outer and inner label */
    format?: (percent: number) => React.ReactNode,
    /** Determine display the label */
    showInfo?: boolean,
    strokeLinecap?: 'round' | 'square',
    strokeColor?: string,
    strokeWidth?: number,
    /** Determine display the label in the bar or right of bar */
    innerText?: boolean,
    backgroundType?: 'impulse' | 'striped',
    prefixCls?: string,
    className?: string,
    style?: React.CSSProperties,
    children?: React.ReactNode,
} & typeof defaultProps;

const defaultProps = {
    prefixCls: 'ty-progress-bar',
    percent: 0,
    showInfo: true,
    strokeWidth: 8,
    strokeLinecap: 'round',
    strokeColor: 'primary',
    innerText: false,
};

const Bar = (props: BarProps) => {
    const {
        percent, format, showInfo, innerText, strokeWidth, strokeColor, strokeLinecap, backgroundType,
        prefixCls, className, style,
    } = props;
    const cls = classnames(prefixCls, className, `${prefixCls}_${strokeLinecap}`);

    const strokeBgCls = classnames(`${prefixCls}__bg`, {
        [`${prefixCls}__bg_${strokeColor}`]: strokePresetColors.includes(strokeColor),
    });

    const effectCls = classnames(`${prefixCls}__effect`, {
        [`${prefixCls}__effect_${backgroundType}`]: backgroundType,
    });

    const _renderLabel = () => {
        if (showInfo && !innerText) {
            return format ? format(percent) : <span className={`${prefixCls}__text`}>{percent}%</span>;
        }
        return null;
    };

    const _renderInnerLabel = () => {
        if (showInfo && innerText) {
            return format ? format(percent) : (
                <div className={`${prefixCls}__inner-text`} style={{ lineHeight: `${strokeWidth}px` }}>
                    {percent}%
                </div>
            );
        }
        return null;
    };

    return (
        <div className={cls} style={style}>
            <div className={`${prefixCls}__inner`} style={{ height: strokeWidth }}>
                <div
                    className={strokeBgCls}
                    style={{
                        width: `${percent}%`,
                        backgroundColor: (strokePresetColors.includes(strokeColor) ? '' : strokeColor),
                    }}>
                    <div className={effectCls}/>
                    {_renderInnerLabel()}
                </div>
            </div>
            {_renderLabel()}
        </div>
    );
};

Bar.defaultProps = defaultProps;

export default Bar;
