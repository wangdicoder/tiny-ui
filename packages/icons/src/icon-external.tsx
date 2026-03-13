import { forwardRef } from 'react';
import type { IconProps } from './types';

const IconExternal = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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
        <path d="M339.008 761.984C196.704 696.064 96 550.496 96 384c0-228.64 187.36-416 416-416s416 187.36 416 416c0 166.496-100.704 312.064-243.008 378.016L659.008 704C779.104 648.3199999999999 864 524.704 864 384c0-193.76-158.24-352-352-352S160 190.24 160 384c0 140.704 84.896 264.32 204.992 320l-25.984 58.016zM512 701.024l-23.008-21.984-160-160 46.016-46.016L480 577.9839999999999V256h64V578.0160000000001l104.992-105.024 46.016 46.016-160 160L512 700.992z" />
      </g>
    </svg>
  );
});

IconExternal.displayName = 'IconExternal';

export { IconExternal };
