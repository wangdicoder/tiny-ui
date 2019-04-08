import React, { useRef } from 'react';
import classNames from 'classnames';
import Icon from '../icon';
import { CSSTransition } from 'react-transition-group';

export type CollapsePanelProps = {
    itemKey: string,
    header: React.ReactNode,
    isActive?: boolean,
    disabled?: boolean,
    extra?: React.ReactNode,
    className?: string,
    deletable?: boolean,
    /** header click callback */
    onItemClick?: (itemKey: string) => any,
    style?: React.CSSProperties,
    showArrow?: boolean,
    prefixCls?: string,
    children?: React.ReactNode,
} & typeof defaultProps;

const defaultProps = {
    prefixCls: 'ty-collapse-item',
    showArrow: true,
    isActive: false,
};

/**
 * Allow to parse active status to a node
 * @param node
 * @param isActive
 */
const richNode = (node: React.ReactNode, isActive: boolean) => {
    return typeof node === 'function' ? node(isActive) : node;
};

const CollapsePanel = (props: CollapsePanelProps) => {
    const {
        itemKey, header, isActive, disabled, extra, deletable, onItemClick, className, style, showArrow,
        prefixCls, children,
    } = props;
    const itemEl = useRef<HTMLDivElement>(null);
    const contentEl = useRef<HTMLDivElement>(null);

    const cls = classNames(
        prefixCls,
        className,
        { [`${prefixCls}_active`]: isActive },
    );

    const _headerOnClick = () => {
        if (!disabled) {
            onItemClick && onItemClick(itemKey);
        }
    };

    /**
     * Remove a item from collapse only the header is enabled
     * @param e
     * @private
     */
    const _removeItem = (e: React.MouseEvent<HTMLSpanElement>) => {
        e.stopPropagation();
        if (!disabled && itemEl.current) {
            itemEl.current.parentNode!.removeChild(itemEl.current);
        }
    };

    const _renderHeader = () => {
        const headerCls = classNames(
            `${prefixCls}__header`,
            { [`${prefixCls}__header_disabled`]: disabled },
        );
        const arrowCls = classNames(
            `${prefixCls}__arrow`,
            { [`${prefixCls}__arrow_active`]: isActive },
        );

        return (
            <div className={headerCls} onClick={_headerOnClick}>
                {showArrow && <Icon type="right" className={arrowCls}/>}
                <div className={`${prefixCls}__title`}>{richNode(header, isActive)}</div>
                <div className={`${prefixCls}__extra`}>
                    {deletable ? <span onClick={_removeItem}>✕</span> : richNode(extra, isActive)}
                </div>
            </div>
        );
    };

    const _getContentHeight = () => {
        return contentEl && contentEl.current && contentEl.current.scrollHeight;
    };

    const transitionStyles: any = {
        entering: { height: 0 },
        entered: { height: _getContentHeight() },
        exiting: { height: _getContentHeight() },
        exited: { height: 0 },
    };

    return (
        <div className={cls} style={style} ref={itemEl}>
            {_renderHeader()}
            <CSSTransition
                mountOnEnter={true}
                unmountOnExit={false}
                in={isActive}
                classNames={`${prefixCls}__content_collapse`}
                timeout={0}>
                {(state: string) => {
                    return (
                        <div ref={contentEl} className={`${prefixCls}__content`}
                             style={{ ...transitionStyles[state]}}>
                            {richNode(children, isActive)}
                        </div>
                    );
                }}
            </CSSTransition>
        </div>
    );
};

CollapsePanel.defaultProps = defaultProps;

export default CollapsePanel;
