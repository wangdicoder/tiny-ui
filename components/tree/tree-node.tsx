import React, { useCallback, useContext } from 'react';
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
  onSelectChange: (key: string, isSelected: boolean) => void;
  onExpandChange: (key: string, isExpanded: boolean) => void;
  // tree props
  indent: number;
  blockNode: boolean;
  checkable: boolean;
  selectable: boolean;
  disabled: boolean;
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
    // onSelectChange,
    onExpandChange,
    prefixCls: customisedCls,
  } = props;
  const configContext = useContext(ConfigContext);
  const prefixCls = getPrefixCls('tree-node', configContext.prefixCls, customisedCls);
  const { title, selected, checked, icon, expanded, disableCheckbox } = node;
  const disabled = node.disabled || props.disabled;
  const cls = classNames(prefixCls, className, {
    [`${prefixCls}_selected`]: selected,
    [`${prefixCls}_block`]: blockNode,
    [`${prefixCls}_disabled`]: disabled,
  });

  const getIndeterminate = useCallback((): boolean => {
    if (node.children) {
      const numOfChecked = node.children.filter((item) => item.checked).length;
      return numOfChecked > 0 && numOfChecked < node.children.length;
    }
    return false;
  }, [node.children]);

  const switcherOnClick = (e: React.MouseEvent<HTMLSpanElement>) => {
    e.stopPropagation();
    onExpandChange(node.uniqueKey, !expanded);
  };

  const checkboxOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.stopPropagation();
    onCheckboxChange(node.uniqueKey, e);
  };

  // const titleOnClick = (e: React.MouseEvent) => {
  //   e.stopPropagation();
  //   onSelectChange(node.uniqueKey, !selected);
  // };

  return (
    <li className={cls}>
      <div className={`${prefixCls}__title`} style={{ paddingLeft: indent * level }}>
        <span className={`${prefixCls}__switcher`} onClick={switcherOnClick}>
          {node.children &&
            (icon ? (
              icon(expanded)
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
            indeterminate={getIndeterminate()}
            onChange={checkboxOnChange}
            disabled={disableCheckbox}
          />
        )}
        <span className={`${prefixCls}__label`}>{title}</span>
      </div>
      {node.children && (
        <CollapseTransition isShow={expanded}>
          <ul className={treeClassName} aria-level={level + 1}>
            {node.children &&
              node.children.map((node) => (
                <TreeNode {...props} key={node.key} node={node} level={level + 1} />
              ))}
          </ul>
        </CollapseTransition>
      )}
    </li>
  );
};

TreeNode.displayName = 'TreeNode';

export default TreeNode;
