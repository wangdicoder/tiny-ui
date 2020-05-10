import React, { useContext } from 'react';
import classNames from 'classnames';
import { BaseProps } from '../_utils/props';
import { ConfigContext } from '../config-provider/config-context';
import { getPrefixCls } from '../_utils/general';

export interface TextProps extends BaseProps, React.PropsWithRef<JSX.IntrinsicElements['span']> {
  code?: boolean;
  del?: boolean;
  underline?: boolean;
  strong?: boolean;
  italic?: boolean;
  mark?: boolean;
  sub?: boolean;
  sup?: boolean;
  children: React.ReactNode;
}

const tagGenerator = (
  isRequired: boolean,
  tag: string,
  element: React.ReactNode
): React.ReactNode => {
  if (!isRequired) return element;
  return React.createElement(tag, {}, element);
};

const Text = (props: TextProps): JSX.Element => {
  const {
    code = false,
    del = false,
    underline = false,
    strong = false,
    italic = false,
    mark = false,
    sub = false,
    sup = false,
    className,
    children,
    prefixCls: customisedCls,
    ...otherProps
  } = props;

  let Node = tagGenerator(code, 'code', children);
  Node = tagGenerator(del, 'del', Node);
  Node = tagGenerator(underline, 'u', Node);
  Node = tagGenerator(strong, 'strong', Node);
  Node = tagGenerator(italic, 'i', Node);
  Node = tagGenerator(mark, 'mark', Node);
  Node = tagGenerator(sub, 'sub', Node);
  Node = tagGenerator(sup, 'sup', Node);

  const configContext = useContext(ConfigContext);
  const prefixCls = getPrefixCls('typography', configContext.prefixCls, customisedCls);
  const cls = classNames(className, prefixCls);

  return (
    <span {...otherProps} className={cls}>
      {Node}
    </span>
  );
};

export default Text;
