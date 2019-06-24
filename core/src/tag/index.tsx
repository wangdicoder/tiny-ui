import React, { useState, useEffect, MouseEvent } from 'react';
import classnames from 'classnames';
import CheckableTag from './checkable-tag';

const PresetColors = ['magenta', 'red', 'volcano', 'orange', 'gold', 'lime', 'green', 'cyan',
    'blue', 'geekblue', 'purple'];

export type TagProps = {
    color?: string,
    closable?: boolean,
    onClose?: (e: MouseEvent) => void,
    onClick?: (e: MouseEvent) => void,
    visible?: boolean,
    prefixCls?: string,
    className?: string,
    style?: React.CSSProperties,
    children?: React.ReactNode,
} & typeof defaultProps;

const defaultProps = {
    prefixCls: 'ty-tag',
    closable: false,
    visible: true,
};

const Tag = (props: TagProps) => {
    const { color, closable, onClose, onClick, prefixCls, className, style, children } = props;
    const [visible, setVisible] = useState(('visible' in props) ? props.visible : true);
    const cls = classnames(prefixCls, className, {
        [`${prefixCls}_${color}`]: color && PresetColors.includes(color),
        [`${prefixCls}_visible`]: visible,
        [`${prefixCls}_closeable`]: closable,
    });

    /**
     * Callback when the close button is clicked.
     * @param e
     */
    const closeBtnOnClick = (e: MouseEvent<HTMLSpanElement>) => {
        onClose && onClose(e);
        !e.defaultPrevented && setVisible(false);
    };

    const tagStyle: React.CSSProperties = {
        backgroundColor: color ? (PresetColors.includes(color) ? undefined : color) : undefined,
        borderColor: color ? (PresetColors.includes(color) ? undefined : color) : undefined,
        color: color ? (PresetColors.includes(color) ? undefined : '#fff') : undefined,
        ...style,
    };

    useEffect(() => {
        ('visible' in props) && setVisible(props.visible);
    });

    return (
        <div className={cls} style={tagStyle} onClick={onClick}>
            {children}
            {closable && <span className={`${prefixCls}__close-btn`} onClick={closeBtnOnClick}>✕</span>}
        </div>
    );
};

Tag.defaultProps = defaultProps;

Tag.CheckableTag = CheckableTag;

export default Tag;
