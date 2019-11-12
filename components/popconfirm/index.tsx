import React, {useState} from 'react';
import classnames from 'classnames';
import Popover, { PlacementTypes, TriggerTypes } from '../popover';
import Icon from '../icon';
import Button from '../button';

export type PopconfirmProps = {
    title?: string,
    confirmText?: string,
    cancelText?: string,
    onConfirm?: (e: React.MouseEvent) => void,
    onCancel?: (e: React.MouseEvent) => void,
    icon?: React.ReactNode,
    placement?: PlacementTypes,
    trigger?: TriggerTypes | TriggerTypes[],
    prefixCls?: string,
    className?: string,
    style?: React.CSSProperties,
    children?: React.ReactNode,
} & typeof defaultProps;

const defaultProps = {
    prefixCls: 'ty-popconfirm',
    placement: 'topCenter',
    trigger: 'click',
    confirmText: 'Yes',
    cancelText: 'No',
};

const Popconfirm = (props: PopconfirmProps) => {
    const { title, icon, confirmText, cancelText, onConfirm, onCancel, placement, trigger,
        prefixCls, className, style, children } = props;
    const cls = classnames(prefixCls, className);
    const [visible, setVisible] = useState(false);

    const cancelOnClick = (e: React.MouseEvent) => {
        setVisible(false);
        onCancel && onCancel(e);
    };

    const confirmOnClick = (e: React.MouseEvent) => {
        setVisible(false);
        onConfirm && onConfirm(e);
    };

    const overlay = () => {
        return (
            <div className={cls} style={style}>
                <div className={`${prefixCls}__messages`}>
                    {icon ? icon : <Icon type="warn-fill" color="#f29000"/>}
                    <span className={`${prefixCls}__title`}>{title}</span>
                </div>
                <div className={`${prefixCls}__buttons`}>
                    <Button size="sm" onClick={cancelOnClick}>{cancelText}</Button>
                    <Button size="sm" color="primary" onClick={confirmOnClick}>{confirmText}</Button>
                </div>
            </div>
        );
    };

    const popoverOnChange = (val: boolean) => {
        setVisible(val);
    };

    return (
        <Popover
            visible={visible}
            onVisibleChange={popoverOnChange}
            overlay={overlay()}
            arrow
            placement={placement}
            trigger={trigger}>
            {children}
        </Popover>
    );
};

Popconfirm.defaultProps = defaultProps;

export default Popconfirm;
