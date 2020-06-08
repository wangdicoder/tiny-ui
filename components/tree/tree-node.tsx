import React, { useContext, useState } from 'react';
import classNames from 'classnames';
import { ConfigContext } from '../config-provider/config-context';
import { getPrefixCls } from '../_utils/general';
import { BaseProps } from '../_utils/props';
import { TreeData } from './types';
import { TreeArrow } from '../_utils/components';
import CollapseTransition from '../collapse-transition';
import Tree from './tree';
import Checkbox from '../checkbox/checkbox';

interface TreeNodeProps extends BaseProps {
  data: TreeData;
  level: number;
  indent: number;
  checkable?: boolean;
  disableCheckbox?: boolean;
  disabled?: boolean;
  icon?: (isCollapsed: boolean) => React.ReactNode;
  selectable?: boolean;
}

const TreeNode = (props: TreeNodeProps): JSX.Element => {
  const {
    level,
    checkable,
    selectable,
    disableCheckbox,
    disabled,
    indent,
    icon,
    data,
    className,
    prefixCls: customisedCls,
  } = props;
  const configContext = useContext(ConfigContext);
  const prefixCls = getPrefixCls('tree-node', configContext.prefixCls, customisedCls);
  const cls = classNames(prefixCls, className, {
    [`${prefixCls}_disabled`]: disabled,
  });
  const [isCollapsed, setCollapsed] = useState(false);

  const titleOnClick = () => {
    setCollapsed(!isCollapsed);
  };

  const checkboxOnClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  return (
    <li className={cls}>
      <div
        className={`${prefixCls}__title`}
        style={{ paddingLeft: indent * level }}
        onClick={titleOnClick}>
        <span className={`${prefixCls}__switcher`}>
          {data.children &&
            (icon ? (
              icon(isCollapsed)
            ) : (
              <TreeArrow
                className={classNames(`${prefixCls}__arrow`, {
                  [`${prefixCls}__arrow_active`]: isCollapsed,
                })}
              />
            ))}
        </span>
        {checkable && <Checkbox onClick={checkboxOnClick} disabled={disableCheckbox} />}
        <span className={`${prefixCls}__label`}>{data.title}</span>
      </div>
      {data.children && (
        <CollapseTransition isShow={isCollapsed}>
          <Tree
            data={data.children}
            aria-level={level + 1}
            checkable={checkable}
            selectable={selectable}
          />
        </CollapseTransition>
      )}
    </li>
  );
};

TreeNode.displayName = 'TreeNode';

export default TreeNode;
