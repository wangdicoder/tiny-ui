import * as React from 'react';
import classNames from 'classnames';

export type AvatarProps = {
  shape?: 'circle' | 'square',
  size?: 'large' | 'small' | 'default' | number;
  src?: string;
  prefixCls?: string,
  className?: string,
  style?: React.CSSProperties,
};

const Avatar = (props: AvatarProps) => {
  const {prefixCls, className, style} = props;
  const cls = classNames(
    prefixCls,
    className,
  );
  return (
    <div className={cls} style={style}>

    </div>
  );
};

export default Avatar;
