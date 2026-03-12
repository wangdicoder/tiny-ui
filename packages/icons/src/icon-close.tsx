import { forwardRef } from 'react';
import type { IconProps } from './types';

const IconClose = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
  const { size = '1em', color = 'currentColor', className, style, ...rest } = props;
  return (
    <svg
      ref={ref}
      viewBox="0 0 1024 1024"
      width={size}
      height={size}
      fill={color}
      className={className}
      style={style}
      {...rest}
    >
      <g transform="translate(0, 896) scale(1, -1)">
        <path d="M809.984 621.9946669999999l-237.994667-237.994667 237.994667-237.994667-59.989333-59.989333-237.994667 237.994667-237.994667-237.994667-59.989333 59.989333 237.994667 237.994667-237.994667 237.994667 59.989333 59.989333 237.994667-237.994667 237.994667 237.994667z" />
      </g>
    </svg>
  );
});

IconClose.displayName = 'IconClose';

export { IconClose };
