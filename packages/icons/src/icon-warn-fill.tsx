import { forwardRef } from 'react';
import type { IconProps } from './types';

const IconWarnFill = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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
        <path d="M512 832C264.6 832 64 631.4 64 384s200.6-448 448-448 448 200.6 448 448S759.4 832 512 832z m-32-232c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8v-272c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8V600z m32-440c-26.5 0-48 21.5-48 48s21.5 48 48 48 48-21.5 48-48-21.5-48-48-48z" />
      </g>
    </svg>
  );
});

IconWarnFill.displayName = 'IconWarnFill';

export { IconWarnFill };
