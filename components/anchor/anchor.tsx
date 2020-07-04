import React, { useContext } from 'react';
import classNames from 'classnames';
import { ConfigContext } from '../config-provider/config-context';
import { getPrefixCls } from '../_utils/general';
import { BaseProps } from '../_utils/props';
import Sticky from '../sticky';

export interface AnchorProps extends BaseProps {
  children?: React.ReactNode;
}

const Anchor = (props: AnchorProps): JSX.Element => {
  const { className, style, children, prefixCls: customisedCls } = props;
  const configContext = useContext(ConfigContext);
  const prefixCls = getPrefixCls('anchor', configContext.prefixCls, customisedCls);
  const cls = classNames(prefixCls, className);

  return (
    <Sticky>
      <div className={cls} style={style}>
        {children}
      </div>
    </Sticky>
  );
};

Anchor.displayName = 'Anchor';

export default Anchor;
