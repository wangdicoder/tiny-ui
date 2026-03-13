import { forwardRef } from 'react';
import type { IconProps } from './types';

const IconSearchReverse = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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
        <path d="M624 800C456.48 800 320 663.52 320 496c0-72 25.92-137.824 68-190.016L104.992 23.039999999999964 151.04-23.039999999999964l282.976 283.008C486.144 217.952 552 192 624 192c167.52 0 304 136.48 304 304S791.52 800 624 800z m0-64c132.928 0 240-107.072 240-240S756.928 256 624 256a239.52 239.52 0 0 0-240 240C384 628.928 491.072 736 624 736z" />
      </g>
    </svg>
  );
});

IconSearchReverse.displayName = 'IconSearchReverse';

export { IconSearchReverse };
