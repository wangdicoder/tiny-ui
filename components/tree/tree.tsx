import React, { useContext } from 'react';
import classNames from 'classnames';
import { ConfigContext } from '../config-provider/config-context';
import { getPrefixCls } from '../_utils/general';
import { TreeProps } from './types';
import TreeNode from './tree-node';

const Tree = React.forwardRef<HTMLUListElement, TreeProps>(
  (props: TreeProps, ref): JSX.Element => {
    const {
      indent = 20,
      data,
      checkable,
      selectable,
      icon,
      className,
      prefixCls: customisedCls,
    } = props;
    const configContext = useContext(ConfigContext);
    const prefixCls = getPrefixCls('tree', configContext.prefixCls, customisedCls);
    const cls = classNames(prefixCls, className);
    const level = 'aria-level' in props ? (props['aria-level'] as number) : 0;

    return (
      <ul className={cls} ref={ref} aria-level={level}>
        {data &&
          data.map((item) => (
            <TreeNode
              key={item.id}
              data={item}
              indent={indent}
              level={level}
              checkable={checkable}
              selectable={selectable}
              icon={icon}
            />
          ))}
      </ul>
    );
  }
);

Tree.displayName = 'Tree';

export default Tree;
