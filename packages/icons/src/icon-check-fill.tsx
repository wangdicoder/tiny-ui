import { forwardRef } from 'react';
import type { IconProps } from './types';

const IconCheckFill = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
  const { size = '1em', color = 'currentColor', className, style, ...rest } = props;
  return (
    <svg
      ref={ref}
      viewBox="0 0 1024 1024"
      width={size}
      height={size}
      fill={color}
      className={className}
      style={{ verticalAlign: "middle", ...style }}
      {...rest}
    >
      <g transform="translate(0, 896) scale(1, -1)">
        <path d="M512 832C264.6 832 64 631.4 64 384s200.6-448 448-448 448 200.6 448 448S759.4 832 512 832z m193.5-301.7l-210.6-292c-12.7-17.7-39-17.7-51.7 0L318.5 411.1c-3.8 5.3 0 12.7 6.5 12.7h46.9c10.2 0 19.9-4.9 25.9-13.3l71.2-98.8 157.2 218c6 8.3 15.6 13.3 25.9 13.3H699c6.5 0 10.3-7.4 6.5-12.7z" />
      </g>
    </svg>
  );
});

IconCheckFill.displayName = 'IconCheckFill';

export { IconCheckFill };
