import React, { useState, MouseEvent } from 'react';
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
    const closeBtnOnClick = (e: MouseEvent) => {
        onClose && onClose(e);
        setVisible(false);
    };

    const tagStyle: React.CSSProperties = {
        color: color ? (PresetColors.includes(color) ? undefined : color) : undefined,
        ...style,
    };

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
