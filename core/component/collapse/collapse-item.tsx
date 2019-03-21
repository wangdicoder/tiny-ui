import * as React from 'react';
import { useRef } from 'react';
import classNames from 'classnames';
import Icon from '../icon';
import Animated from '../../util/animated';

export type CollapseItemProps = {
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

const CollapseItem = (props: CollapseItemProps) => {
    const {
        itemKey, header, isActive, disabled, extra, deletable, onItemClick, className, style, showArrow,
        prefixCls, children,
    } = props;
    const itemEl = useRef<HTMLDivElement>(null);

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
        if (!disabled && itemEl && itemEl.current && itemEl.current.parentNode) {
            itemEl.current.parentNode.removeChild(itemEl.current);
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
                {header}
                <div className={`${prefixCls}__extra`}>
                    {deletable ? <span onClick={_removeItem}>✕</span> : extra}
                </div>
            </div>
        );
    };

    return (
        <div className={cls} style={style} ref={itemEl}>
            {_renderHeader()}
            <Animated isShow={isActive} transitionName={`${prefixCls}_collapse`} duration={0}>
                <div className={`${prefixCls}__content`}>
                    {children}
                </div>
            </Animated>
        </div>
    );
};

CollapseItem.defaultProps = defaultProps;

export default CollapseItem;
