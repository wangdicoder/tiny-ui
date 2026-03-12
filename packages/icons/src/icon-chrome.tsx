import { forwardRef } from 'react';
import type { IconProps } from './types';

const IconChrome = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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
        <path d="M371.8 384c0-77.5 62.7-140.2 140.2-140.2S652.2 306.5 652.2 384 589.5 524.2 512 524.2 371.8 461.6 371.8 384zM900 533.6l-234.3-12.1c63.6-74.3 64.6-181.5 11.1-263.7l-188-289.2c78-4.2 158.4 12.9 231.2 55.2 180 104 253 322.1 180 509.8zM320.3 304.1L163.8 611.9C121 546.5 96 468 96 384c0-208 152.3-380.3 351.4-410.8l106.9 209.4c-96.6-18.2-189.9 34.8-234 121.5zM538.8 589.6l344.4-18.1C848 641.3 792.6 702 719.8 744.3 653.9 782.4 581.5 800.5 510.5 800c-122.5-0.5-242.2-55.2-322.1-154.5l128.2-196.9c32 91.9 124.8 146.7 222.2 141z" />
      </g>
    </svg>
  );
});

IconChrome.displayName = 'IconChrome';

export { IconChrome };
