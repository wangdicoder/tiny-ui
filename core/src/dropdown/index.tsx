import React, { useRef, useEffect, useState } from 'react';
import classnames from 'classnames';
import { CSSTransition } from 'react-transition-group';
import { getScroll, getRect } from '../_utils/dom';

type TriggerType = 'click' | 'hover' | 'contextMenu';

export type DropdownProps = {
    defaultVisible?: boolean,
    visible?: boolean,
    onVisibleChange?: (visible: boolean) => void,
    trigger?: TriggerType | TriggerType[],
    placement?: 'topLeft' | 'topCenter' | 'topRight' | 'bottomLeft' | 'bottomCenter' | 'bottomRight',
    overlay?: React.ReactNode,
    overlayClassName?: string,
    overlayStyle?: React.CSSProperties,
    prefixCls?: string,
    className?: string,
    style?: React.CSSProperties,
    children?: React.ReactNode,
} & typeof defaultProps;

const defaultProps = {
    prefixCls: 'ty-dropdown',
    placement: 'bottomLeft',
    defaultVisible: false,
    trigger: 'hover',
};

const Dropdown = (props: DropdownProps) => {
    const { overlay, prefixCls, trigger, className, overlayClassName, style, overlayStyle, children } = props;
    const cls = classnames(prefixCls, className);
    const overlayCls = classnames(`${prefixCls}__overlay`, overlayClassName);
    const containerRef = useRef<HTMLDivElement>(null);
    const triggerRef = useRef<HTMLDivElement>(null);
    const overlayRef = useRef<HTMLDivElement>(null);
    const [position, setPosition] = useState<React.CSSProperties>({});
    const [visible, setVisible] = useState(false);

    const calcPosition = () => {
        if (overlayRef.current && triggerRef.current) {
            const updatedStyle: React.CSSProperties = {};
            const scrollTop = getScroll(triggerRef.current.ownerDocument!.documentElement);
            const scrollLeft = getScroll(triggerRef.current.ownerDocument!.documentElement, false);
            const nodeRect = getRect(triggerRef.current);
            updatedStyle.top = nodeRect.top + scrollTop - overlayRef.current.getBoundingClientRect().height;
            updatedStyle.left = nodeRect.left + scrollLeft;
            setPosition(updatedStyle);
        }
    };

    const show = (): void => {
        setVisible(true);
        calcPosition();
    };

    const hide = (): void => {
        setVisible(false);
    };

    const handleClick = (e: Event): void => {
        e.preventDefault();
        if (!visible) {
            show();
            document.addEventListener('click', handleClickOutside);
        }
    };

    const handleClickOutside = (e: Event) => {
        if (containerRef.current && !containerRef.current.contains((e.target as HTMLElement))) {
            hide();
            document.removeEventListener('click', handleClickOutside);
        }
    };

    useEffect(() => {
        if (trigger === 'hover' && containerRef.current) {
            containerRef.current.addEventListener('mouseenter', show);
            containerRef.current.addEventListener('mouseleave', hide);
        } else if (trigger === 'click' && triggerRef.current) {
            triggerRef.current.addEventListener('click', handleClick);
        }

        return () => {
            if (trigger === 'hover' && containerRef.current) {
                containerRef.current.removeEventListener('mouseenter', show);
                containerRef.current.removeEventListener('mouseleave', hide);
            } else if (trigger === 'click' && triggerRef.current) {
                triggerRef.current.removeEventListener('click', handleClick);
            }
        };
    }, []);

    return (
        <div className={cls} style={style} ref={containerRef}>
            <div ref={triggerRef}>{children}</div>
            <CSSTransition
                mountOnEnter={true}
                in={visible}
                classNames={`${prefixCls}__overlay_slide`}
                timeout={{ enter: 0, exit: 300 }}>
                <div ref={overlayRef} className={overlayCls} style={{ ...overlayStyle, ...position }}>
                    {overlay}
                </div>
            </CSSTransition>
        </div>
    );
};

Dropdown.defaultProps = defaultProps;

export default Dropdown;
