import React, { useContext, useRef } from 'react';
import classNames from 'classnames';
import { ConfigContext } from '../config-provider/config-context';
import { getPrefixCls } from '../_utils/general';
import { CollapsePanelProps } from './types';
import { ArrowDown } from '../_utils/components';
import CollapseTransition from '../collapse-transition';
import { CollapseContext } from './collapse-context';

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
    prefixCls: customisedCls,
    itemKey,
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
  const { activeKeys } = useContext(CollapseContext);
  const prefixCls = getPrefixCls('collapse-item', configContext.prefixCls, customisedCls);
  const active = activeKeys.includes(itemKey);
  const cls = classNames(prefixCls, className, {
    [`${prefixCls}_active`]: active,
  });

  const headerOnClick = () => {
    if (!disabled) {
      onItemClick && onItemClick(itemKey);
    }
  };

  /**
   * Remove a item from collapse only the header is enabled
   * @param e
   * @private
   */
  const removeItem = (e: React.MouseEvent<HTMLSpanElement>) => {
    e.stopPropagation();
    if (!disabled) {
      const node = itemRef.current;
      node && node.parentNode?.removeChild(node);
    }
  };

  const renderHeader = () => {
    const headerCls = classNames(`${prefixCls}__header`, {
      [`${prefixCls}__header_disabled`]: disabled,
    });
    const arrowCls = classNames(`${prefixCls}__arrow`, {
      [`${prefixCls}__arrow_active`]: active,
    });

    return (
      <div className={headerCls} onClick={headerOnClick}>
        {showArrow && <ArrowDown size={10} className={arrowCls} />}
        <div className={`${prefixCls}__title`}>{richNode(header, active)}</div>
        <div className={`${prefixCls}__extra`}>
          {deletable ? <span onClick={removeItem}>✕</span> : richNode(extra, active)}
        </div>
      </div>
    );
  };

  return (
    <div className={cls} style={style} ref={itemRef}>
      {renderHeader()}
      <CollapseTransition isShow={active}>
        <div className={`${prefixCls}__content`}>{richNode(children, active)}</div>
      </CollapseTransition>
    </div>
  );
};

CollapsePanel.displayName = 'CollapsePanel';

export default CollapsePanel;
