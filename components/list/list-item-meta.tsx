import React, { useContext } from 'react';
import classNames from 'classnames';
import { ConfigContext } from '../config-provider/config-context';
import { getPrefixCls } from '../_utils/general';
import { ListItemMetaProps } from './types';

const ListItemMeta = (props: ListItemMetaProps): React.ReactElement => {
  const { avatar, title, description, prefixCls: customisedCls, className, style } = props;
  const configContext = useContext(ConfigContext);
  const prefixCls = getPrefixCls('list-item-meta', configContext.prefixCls, customisedCls);
  const cls = classNames(prefixCls, className);

  return (
    <div className={cls} style={style}>
      {avatar && <div className={`${prefixCls}__avatar`}>{avatar}</div>}
      <div className={`${prefixCls}__content`}>
        {title && <div className={`${prefixCls}__title`}>{title}</div>}
        {description && <div className={`${prefixCls}__description`}>{description}</div>}
      </div>
    </div>
  );
};

ListItemMeta.displayName = 'ListItemMeta';
export default ListItemMeta;
