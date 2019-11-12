import React, { MouseEvent, useState, useEffect } from 'react';
import classnames from 'classnames';
import Tag from './index';

export type CheckableTagProps = {
    defaultChecked?: boolean,
    checked?: boolean,
    onChange?: (checked: boolean, e: MouseEvent) => void,
    prefixCls?: string,
    className?: string,
    style?: React.CSSProperties,
    children?: React.ReactNode,
} & typeof defaultProps;

const defaultProps = {
    prefixCls: 'ty-checkable-tag',
    defaultChecked: true,
};

const CheckableTag = (props: CheckableTagProps) => {
    const { onChange, prefixCls, className, style, children } = props;
    const [checked, setChecked] = useState(('checked' in props) ? props.checked : props.defaultChecked);
    const cls = classnames(prefixCls, className, {
        [`${prefixCls}_checked`]: checked,
    });

    /**
     * Callback when the tag itself is clicked.
     */
    const itemOnClick = (e: MouseEvent) => {
        const state = !checked;
        !('checked' in props) && setChecked(state);
        onChange && onChange(state, e);
    };

    useEffect(() => {
        ('checked' in props) && setChecked(props.checked);
    });

    return <Tag className={cls} style={style} onClick={itemOnClick}>{children}</Tag>;
};

CheckableTag.defaultProps = defaultProps;

export default CheckableTag;
