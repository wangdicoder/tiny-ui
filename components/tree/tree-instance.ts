import { TreeData } from './types';
import React from 'react';

export type Node = {
  // data source key provided by user
  key: string;
  // unique key managed by TreeInstance. x-x-x
  uniqueKey: string;
  title: string;
  checked: boolean;
  selected: boolean;
  expanded: boolean;
  disabled: boolean;
  disableCheckbox: boolean;
  icon?: (isExpanded: boolean) => React.ReactNode;
  parentKey?: string;
  children?: Node[];
};

export class TreeInstance {
  private readonly treeNodes: Node[];

  constructor(
    data: TreeData[],
    defaultCheckedKeys: string[],
    defaultSelectedKeys: string[],
    defaultExpandedKeys: string[],
    defaultExpandAll: boolean
  ) {
    this.treeNodes = this.handleTreeNode(
      data,
      defaultCheckedKeys,
      defaultSelectedKeys,
      defaultExpandedKeys,
      defaultExpandAll,
      ''
    );
  }

  private handleTreeNode(
    data: TreeData[],
    defaultCheckedKeys: string[],
    defaultSelectedKeys: string[],
    defaultExpandedKeys: string[],
    defaultExpandAll: boolean,
    parentKey: string
  ): Node[] {
    return data.map((item, idx) => {
      const { title, children, disableCheckbox, disabled, ...otherProps } = item;
      const key = parentKey ? parentKey + `-${idx}` : `${idx}`;
      const node: Node = {
        ...otherProps,
        uniqueKey: key,
        title: title || '---',
        disabled: disabled || false,
        disableCheckbox: disableCheckbox || false,
        checked: defaultCheckedKeys.includes(item.key),
        selected: defaultSelectedKeys.includes(item.key),
        expanded: defaultExpandAll || defaultExpandedKeys.includes(item.key),
        parentKey,
      };

      if (children) {
        return {
          ...node,
          children: this.handleTreeNode(
            children,
            defaultCheckedKeys,
            defaultSelectedKeys,
            defaultExpandedKeys,
            defaultExpandAll,
            key
          ),
        };
      }
      return node;
    });
  }

  get nodes(): Node[] {
    return this.treeNodes;
  }

  getNodeByUniqueKey(uniqueKey: string): Node | undefined {
    const keys = uniqueKey.split('-').map((item) => parseInt(item));

    let curr: Node[] | undefined = this.treeNodes;
    let target: Node | undefined = undefined;
    for (const key of keys) {
      if (curr) {
        target = curr[key];
        curr = target.children;
      }
    }

    return target;
  }

  setNodeChecked(uniqueKey: string, isChecked: boolean): void {
    const node = this.getNodeByUniqueKey(uniqueKey);
    if (node) {
      node.checked = isChecked;
    }
  }

  setNodeExpanded(uniqueKey: string, isExpanded: boolean): void {
    const node = this.getNodeByUniqueKey(uniqueKey);
    if (node) {
      node.expanded = isExpanded;
    }
  }

  setNodeSelected(uniqueKey: string, isSelected: boolean): void {
    const node = this.getNodeByUniqueKey(uniqueKey);
    if (node) {
      node.selected = isSelected;
    }
  }
}
