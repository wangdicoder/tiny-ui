import React, { useContext, useRef, useState } from 'react';
import classNames from 'classnames';
import { ConfigContext } from '../config-provider/config-context';
import { getPrefixCls } from '../_utils/general';
import { TreeProps } from './types';
import { TreeInstance } from './tree-instance';
import TreeNode from './tree-node';
import { deepCopy } from '../_utils/object';

const Tree = React.forwardRef<HTMLUListElement, TreeProps>(
  (props: TreeProps, ref): JSX.Element => {
    const {
      data = [],
      defaultCheckedKeys = [],
      defaultExpandedKeys = [],
      defaultExpandAll = false,
      indent = 20,
      blockNode = true,
      checkable = false,
      disabled = false,
      className,
      prefixCls: customisedCls,
    } = props;
    const configContext = useContext(ConfigContext);
    const prefixCls = getPrefixCls('tree', configContext.prefixCls, customisedCls);
    const cls = classNames(prefixCls, className);
    const treeInstance = useRef(
      new TreeInstance(data, defaultCheckedKeys, defaultExpandedKeys, defaultExpandAll)
    );
    const [treeNodes, setTreeNodes] = useState(treeInstance.current.nodes);

    const onCheckboxChange = (key: string, e: React.ChangeEvent<HTMLInputElement>) => {
      treeInstance.current.setNodeChecked(key, e.currentTarget.checked);
      setTreeNodes(deepCopy(treeInstance.current.nodes));
    };

    const onExpandChange = (key: string, isExpanded: boolean) => {
      treeInstance.current.setNodeExpanded(key, isExpanded);
      setTreeNodes(deepCopy(treeInstance.current.nodes));
    };

    return (
      <ul className={cls} ref={ref} aria-level={0}>
        {treeNodes.map((item) => (
          <TreeNode
            {...props}
            key={item.key}
            node={item}
            level={0}
            indent={indent}
            blockNode={blockNode}
            checkable={checkable}
            disabled={disabled}
            treeClassName={cls}
            onCheckboxChange={onCheckboxChange}
            onExpandChange={onExpandChange}
          />
        ))}
      </ul>
    );
  }
);

Tree.displayName = 'Tree';

export default Tree;
