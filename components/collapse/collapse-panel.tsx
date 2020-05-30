import React, { useContext, useRef } from 'react';
import classNames from 'classnames';
import Icon from '../icon';
import CollapseTransition from './collapse-transition';
import { ConfigContext } from '../config-provider/config-context';
import { getPrefixCls } from '../_utils/general';
import { CollapsePanelProps } from './types';

/**
 * Allow to parse active status to a node
 * @param node
 * @param isActive
 */
const richNode = (node: React.ReactNode, isActive: boolean) => {
  return typeof node === 'function' ? node(isActive) : node;
};

const CollapsePanel = (props: CollapsePanelProps): React.ReactElement => {
  const {
    showArrow = true,
    isActive = false,
    prefixCls: customisedCls,
    itemKey,
    duration,
    header,
    disabled,
    extra,
    deletable,
    onItemClick,
    className,
    style,
    children,
  } = props;
  const itemRef = useRef<HTMLDivElement | null>(null);
  const configContext = useContext(ConfigContext);
  const prefixCls = getPrefixCls('collapse-item', configContext.prefixCls, customisedCls);
  const cls = classNames(prefixCls, className, {
    [`${prefixCls}_active`]: isActive,
  });

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
    if (!disabled) {
      const itemNode = itemRef.current;
      itemNode && itemNode.parentNode?.removeChild(itemNode);
    }
  };

  const _renderHeader = () => {
    const headerCls = classNames(`${prefixCls}__header`, {
      [`${prefixCls}__header_disabled`]: disabled,
    });
    const arrowCls = classNames(`${prefixCls}__arrow`, {
      [`${prefixCls}__arrow_active`]: isActive,
    });

    return (
      <div className={headerCls} onClick={_headerOnClick}>
        {showArrow && <Icon name="right" className={arrowCls} />}
        <div className={`${prefixCls}__title`}>{richNode(header, isActive)}</div>
        <div className={`${prefixCls}__extra`}>
          {deletable ? <span onClick={_removeItem}>✕</span> : richNode(extra, isActive)}
        </div>
      </div>
    );
  };

  return (
    <div className={cls} style={style} ref={itemRef}>
      {_renderHeader()}
      <CollapseTransition duration={duration} isShow={isActive}>
        <div className={`${prefixCls}__content`}>{richNode(children, isActive)}</div>
      </CollapseTransition>
    </div>
  );
};

CollapsePanel.displayName = 'CollapsePanel';

export default CollapsePanel;
