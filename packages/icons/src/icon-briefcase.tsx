import { forwardRef } from 'react';
import type { IconProps } from './types';

const IconBriefcase = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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
        <path d="M512 800c-59.648 0-108.8-40.8-123.008-96H96v-640h832V704h-292.992c-14.24 55.2-63.36 96-123.008 96z m0-64c25.92 0 45.696-12.32 56-32h-112c10.304 19.68 30.08 32 56 32zM160 640h704v-288H160V640z m352-192a32 32 0 1 1 0-64 32 32 0 0 1 0 64zM160 288h704v-160H160v160z" />
      </g>
    </svg>
  );
});

IconBriefcase.displayName = 'IconBriefcase';

export { IconBriefcase };
