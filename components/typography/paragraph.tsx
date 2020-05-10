import React, { useContext } from 'react';
import classNames from 'classnames';
import { BaseProps } from '../_utils/props';
import { ConfigContext } from '../config-provider/config-context';
import { getPrefixCls } from '../_utils/general';

export interface ParagraphProps extends BaseProps, React.PropsWithRef<JSX.IntrinsicElements['p']> {
  children?: React.ReactNode;
}

const Paragraph = React.forwardRef<HTMLParagraphElement, ParagraphProps>(
  (props: ParagraphProps, ref): JSX.Element => {
    const { className, children, prefixCls: customisedCls, ...otherProps } = props;
    const configContext = useContext(ConfigContext);
    const prefixCls = getPrefixCls('typography', configContext.prefixCls, customisedCls);
    const cls = classNames(className, prefixCls);
    return (
      <p ref={ref} className={cls} {...otherProps}>
        {children}
      </p>
    );
  }
);

Paragraph.displayName = 'Paragraph';

export default Paragraph;
