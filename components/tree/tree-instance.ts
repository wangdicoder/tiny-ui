import { TreeData } from './types';
import React from 'react';

export type Node = {
  // data source key provided by user
  key: string;
  // unique key managed by TreeInstance. x-x-x
  uniqueKey: string;
  title: string;
  checked: boolean;
  indeterminate: boolean;
  expanded: boolean;
  disabled: boolean;
  disableCheckbox: boolean;
  parentKey: string;
  icon?: (isExpanded: boolean) => React.ReactNode;
  children?: Node[];
};

export class TreeInstance {
  private readonly treeNodes: Node[];

  constructor(
    data: TreeData[],
    defaultCheckedKeys: string[],
    defaultExpandedKeys: string[],
    defaultExpandAll: boolean
  ) {
    this.treeNodes = this.handleTreeNode(
      data,
      defaultCheckedKeys,
      defaultExpandedKeys,
      defaultExpandAll,
      ''
    );
  }

  private handleTreeNode(
    data: TreeData[],
    defaultCheckedKeys: string[],
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
        indeterminate: false,
        expanded: defaultExpandAll || defaultExpandedKeys.includes(item.key),
        parentKey,
      };

      if (children) {
        node.children = this.handleTreeNode(
          children,
          defaultCheckedKeys,
          defaultExpandedKeys,
          defaultExpandAll,
          key
        );
        const indeterminate = this.isIndeterminate(node);
        return {
          ...node,
          indeterminate,
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
        curr = target?.children;
      }
    }

    return target;
  }

  isIndeterminate(node: Node): boolean {
    if (node.children) {
      if (node.children.some((n) => n.indeterminate)) {
        return true;
      }
      const numOfChecked = node.children.filter((n) => n.checked).length;
      return numOfChecked > 0 && numOfChecked < node.children.length;
    }
    return false;
  }

  checkChildren(children: Node[], isChecked: boolean): void {
    children.forEach((child) => {
      child.checked = isChecked;
      child.indeterminate = this.isIndeterminate(child);
      if (child.children) {
        this.checkChildren(child.children, isChecked);
      }
    });
  }

  checkParent(node: Node): void {
    const children = node.children as Node[];
    const numOfChecked = children.filter((n) => n.checked).length;
    node.checked = numOfChecked === children.length;
    node.indeterminate = this.isIndeterminate(node);
    const parentNode = this.getNodeByUniqueKey(node.parentKey);
    if (parentNode) {
      this.checkParent(parentNode);
    }
  }

  setNodeChecked(uniqueKey: string, isChecked: boolean): void {
    const node = this.getNodeByUniqueKey(uniqueKey);
    if (node) {
      node.checked = isChecked;
      // update children node
      // if children are existing, make them all checked
      if (node.children) {
        this.checkChildren(node.children, isChecked);
      }
      node.indeterminate = this.isIndeterminate(node);
      // check parent node
      // if siblings of current node are all checked, set the parent node checked
      const parentNode = this.getNodeByUniqueKey(node.parentKey);
      if (parentNode) {
        this.checkParent(parentNode);
      }
    }
  }

  setNodeExpanded(uniqueKey: string, isExpanded: boolean): void {
    const node = this.getNodeByUniqueKey(uniqueKey);
    if (node) {
      node.expanded = isExpanded;
    }
  }
}
