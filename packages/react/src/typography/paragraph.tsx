import React, { useContext } from 'react';
import classNames from 'classnames';
import { ConfigContext } from '../config-provider/config-context';
import { getPrefixCls } from '../_utils/general';
import { ParagraphProps } from './types';

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
