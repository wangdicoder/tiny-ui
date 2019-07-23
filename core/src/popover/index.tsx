import React, { useRef, useEffect, useState } from 'react';
import classnames from 'classnames';
import { CSSTransition } from 'react-transition-group';
import { getRect, getAbsolutePosition } from '../_utils/dom';
import { isOneOf, camelCaseToDash } from '../_utils/general';
import Portal from '../portal';

// TODO: Possible add focus or active trigger type?
export type TriggerTypes = 'click' | 'hover' | 'contextMenu';
export type PlacementTypes = 'topLeft' | 'topCenter' | 'topRight' |
    'bottomLeft' | 'bottomCenter' | 'bottomRight' |
    'leftTop' | 'leftCenter' | 'leftBottom' |
    'rightTop' | 'rightCenter' | 'rightBottom';

export type PopoverProps = {
    theme?: 'light' | 'dark',
    defaultVisible?: boolean,
    visible?: boolean,
    onVisibleChange?: (visible: boolean) => void,
    trigger?: TriggerTypes | TriggerTypes[],
    arrow?: boolean,
    placement?: PlacementTypes,
    overlay?: React.ReactNode,
    prefixCls?: string,
    className?: string,
    style?: React.CSSProperties,
    children: any,
} & typeof defaultProps;

const defaultProps = {
    prefixCls: 'ty-popover',
    placement: 'bottomLeft',
    defaultVisible: false,
    trigger: 'hover',
    arrow: false,
    theme: 'light',
};

const Popover = (props: PopoverProps) => {
    const {
        onVisibleChange, overlay, placement, trigger, arrow,
        prefixCls, className, style, children,
    } = props;
    const cls = classnames(prefixCls, className, `${prefixCls}_${camelCaseToDash(placement)}`);
    const triggerRef = useRef<HTMLDivElement>(null);
    const overlayRef = useRef<HTMLDivElement>(null);
    const [overlayPosition, setOverlayPosition] = useState<React.CSSProperties>({});
    const [arrowPosition, setArrowPosition] = useState<React.CSSProperties>({});
    const [visible, setVisible] = useState(('visible' in props) ? props.visible : props.defaultVisible);

    const calcPosition = () => {
        const ARROW_SIZE = arrow ? 8 : 0;
        if (overlayRef.current && triggerRef.current) {
            const overlayStl: React.CSSProperties = {};
            const arrowStl: React.CSSProperties = {};
            const triggerRect = getRect(triggerRef.current);
            const triggerPos = getAbsolutePosition(triggerRef.current);
            const overlayRect = getRect(overlayRef.current);

            switch (placement) {
                case 'topLeft':
                    overlayStl.bottom = `calc(100% + ${ARROW_SIZE}px`;
                    overlayStl.left = 0;
                    arrowStl.left = triggerRect.width / 2;
                    break;

                case 'topCenter':
                    overlayStl.bottom = `calc(100% + ${ARROW_SIZE}px`;
                    overlayStl.left = triggerRect.width / 2 - overlayRect.width / 2;
                    arrowStl.left = '50%';
                    break;

                case 'topRight':
                    overlayStl.bottom = `calc(100% + ${ARROW_SIZE}px`;
                    overlayStl.right = 0;
                    arrowStl.right = triggerRect.width / 2;
                    break;

                case 'bottomLeft':
                    overlayStl.top = triggerPos.y + triggerRect.height + ARROW_SIZE;
                    overlayStl.left = triggerPos.x;
                    arrowStl.left = triggerRect.width / 2;
                    break;

                case 'bottomCenter':
                    overlayStl.top = `calc(100% + ${ARROW_SIZE}px`;
                    overlayStl.left = triggerRect.width / 2 - overlayRect.width / 2;
                    arrowStl.left = '50%';
                    break;

                case 'bottomRight':
                    overlayStl.top = `calc(100% + ${ARROW_SIZE}px`;
                    overlayStl.right = 0;
                    arrowStl.right = triggerRect.width / 2;
                    break;

                case 'leftTop':
                    overlayStl.top = 0;
                    overlayStl.right = `calc(100% + ${ARROW_SIZE}px`;
                    arrowStl.top = triggerRect.height / 2;
                    break;

                case 'leftCenter':
                    overlayStl.top = triggerRect.height / 2 - overlayRect.height / 2;
                    overlayStl.right = `calc(100% + ${ARROW_SIZE}px`;
                    arrowStl.top = '50%';
                    break;

                case 'leftBottom':
                    overlayStl.bottom = 0;
                    overlayStl.right = `calc(100% + ${ARROW_SIZE}px`;
                    arrowStl.bottom = triggerRect.height / 2;
                    break;

                case 'rightTop':
                    overlayStl.top = 0;
                    overlayStl.left = `calc(100% + ${ARROW_SIZE}px`;
                    arrowStl.top = triggerRect.height / 2;
                    break;

                case 'rightCenter':
                    overlayStl.top = triggerRect.height / 2 - overlayRect.height / 2;
                    overlayStl.left = `calc(100% + ${ARROW_SIZE}px`;
                    arrowStl.top = '50%';
                    break;

                case 'rightBottom':
                    overlayStl.bottom = 0;
                    overlayStl.left = `calc(100% + ${ARROW_SIZE}px`;
                    arrowStl.bottom = triggerRect.height / 2;
                    break;

                default:
                    break;
            }

            setOverlayPosition(overlayStl);
            setArrowPosition(arrowStl);
        }
    };

    const show = (): void => {
        setVisible(true);
        calcPosition();
        onVisibleChange && onVisibleChange(true);
    };

    const hide = (): void => {
        setVisible(false);
        onVisibleChange && onVisibleChange(false);
    };

    const handleClick = (e: Event): void => {
        e.preventDefault();
        if (!visible) {
            show();
            document.addEventListener('click', handleClickOutside);
        }
    };

    const handleClickOutside = (e: Event): void => {
        if ((triggerRef.current && !triggerRef.current.contains((e.target as HTMLElement))) &&
            (overlayRef.current && !overlayRef.current.contains((e.target as HTMLElement)))) {
            hide();
            document.removeEventListener('click', handleClickOutside);
        }
    };

    /**
     * Initialise event
     */
    useEffect(() => {
        if (isOneOf('hover', trigger) && triggerRef.current) {
            triggerRef.current.addEventListener('mouseenter', show);
            triggerRef.current.addEventListener('mouseleave', hide);
        }
        if (isOneOf('click', trigger) && triggerRef.current) {
            triggerRef.current.addEventListener('click', handleClick);
        }
        if (isOneOf('contextMenu', trigger) && triggerRef.current) {
            triggerRef.current.addEventListener('contextmenu', handleClick);
        }

        visible ? show() : hide();
        if (triggerRef.current) {
            const child = triggerRef.current.children[0];
            triggerRef.current.style.display = ('style' in child) ?
                ((child as HTMLElement).style.display || 'inline-block') : 'inline-block';
        }

        return () => {
            if (isOneOf('hover', trigger) && triggerRef.current) {
                triggerRef.current.removeEventListener('mouseenter', show);
                triggerRef.current.removeEventListener('mouseleave', hide);
            }
            if (isOneOf('click', trigger) && triggerRef.current) {
                triggerRef.current.removeEventListener('click', handleClick);
            }
            if (isOneOf('contextMenu', trigger) && triggerRef.current) {
                triggerRef.current.removeEventListener('contextmenu', handleClick);
            }
        };
    }, []);

    useEffect(() => {
        ('visible' in props) && setVisible(props.visible);
    });

    return (
        <>
            <div className={`${prefixCls}__trigger`} ref={triggerRef}>{children}</div>
            <Portal>
                <CSSTransition
                    mountOnEnter={true}
                    in={visible}
                    classNames={`${prefixCls}__overlay_slide`}
                    timeout={{ enter: 0, exit: 300 }}>
                    <div ref={overlayRef} className={cls} style={{ ...style, ...overlayPosition }}>
                        {overlay}
                        {arrow && <span className={`${prefixCls}__overlay-arrow`} style={arrowPosition}/>}
                    </div>
                </CSSTransition>
            </Portal>
        </>
    );
};

Popover.defaultProps = defaultProps;

export default Popover;
