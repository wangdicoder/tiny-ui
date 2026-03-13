import { forwardRef } from 'react';
import type { IconProps } from './types';

const IconHome = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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
        <path d="M512 812.992l-23.008-21.984-416-416L119.04 328.96000000000004 160 370.01599999999996V0h288V320h128v-320h288V370.01599999999996l40.992-41.024 46.016 46.016-416 416L512 812.992z m0-91.008l288-288V64h-160V384h-256v-320H224V434.016l288 288z" />
      </g>
    </svg>
  );
});

IconHome.displayName = 'IconHome';

export { IconHome };
