import React, { useContext } from 'react';
import classNames from 'classnames';
import { ConfigContext } from '../config-provider/config-context';
import { getPrefixCls } from '../_utils/general';
import { BaseProps } from '../_utils/props';
import { TreeArrow } from '../_utils/components';
import CollapseTransition from '../collapse-transition';
import Checkbox from '../checkbox/checkbox';
import { Node } from './tree-instance';

interface TreeNodeProps extends BaseProps {
  node: Node;
  level: number;
  treeClassName: string;
  onCheckboxChange: (uniqueKey: string, e: React.ChangeEvent<HTMLInputElement>) => void;
  onExpandChange: (key: string, isExpanded: boolean, e: React.MouseEvent) => void;
  // tree props
  indent: number;
  blockNode: boolean;
  checkable: boolean;
  disabled: boolean;
  icon?: (isExpanded: boolean) => React.ReactNode;
}

const TreeNode = (props: TreeNodeProps): JSX.Element => {
  const {
    indent,
    blockNode,
    level,
    node,
    checkable,
    className,
    treeClassName,
    onCheckboxChange,
    onExpandChange,
    prefixCls: customisedCls,
  } = props;
  const configContext = useContext(ConfigContext);
  const prefixCls = getPrefixCls('tree-node', configContext.prefixCls, customisedCls);
  const { title, checked, icon, expanded, disableCheckbox, indeterminate } = node;
  const nodeIcon = icon || props.icon;
  const disabled = node.disabled || props.disabled;
  const cls = classNames(prefixCls, className, {
    [`${prefixCls}_block`]: blockNode,
    [`${prefixCls}_disabled`]: disabled,
  });

  const switcherOnClick = (e: React.MouseEvent<HTMLSpanElement>) => {
    e.stopPropagation();
    onExpandChange(node.uniqueKey, !expanded, e);
  };

  const checkboxOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.stopPropagation();
    onCheckboxChange(node.uniqueKey, e);
  };

  return (
    <li className={cls}>
      <div className={`${prefixCls}__title`} style={{ paddingLeft: indent * level }}>
        <span className={`${prefixCls}__switcher`} onClick={switcherOnClick}>
          {node.children &&
            (nodeIcon ? (
              nodeIcon(expanded)
            ) : (
              <TreeArrow
                className={classNames(`${prefixCls}__arrow`, {
                  [`${prefixCls}__arrow_active`]: expanded,
                })}
              />
            ))}
        </span>
        {checkable && (
          <Checkbox
            checked={checked}
            indeterminate={indeterminate}
            onChange={checkboxOnChange}
            disabled={disabled || disableCheckbox}
          />
        )}
        <span className={`${prefixCls}__label`} onClick={switcherOnClick}>
          {title}
        </span>
      </div>
      {node.children && (
        <CollapseTransition isShow={expanded}>
          <ul className={treeClassName} aria-level={level + 1}>
            {node.children &&
              node.children.map((node) => (
                <TreeNode {...props} key={node.uniqueKey} node={node} level={level + 1} />
              ))}
          </ul>
        </CollapseTransition>
      )}
    </li>
  );
};

TreeNode.displayName = 'TreeNode';

export default TreeNode;
