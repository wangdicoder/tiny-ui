import { forwardRef } from 'react';
import type { IconProps } from './types';

const IconDislike = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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
        <path d="M320 736c-123.04 0-224-100.96-224-224 0-42.656 19.2-79.264 36.992-106.016a329.472 329.472 0 0 1 36-44.992l320-320 23.008-21.984 23.008 21.984 320 320s18.176 18.272 36 45.024C908.8 432.736 928 469.312 928 512c0 123.04-100.96 224-224 224-100.544 0-165.152-59.008-192-86.016C485.152 677.024 420.544 736 320 736z m0-64c61.44 0 120.032-43.2 148.992-68l-79.008-104.992-25.984-35.008 42.016-14.016 148.992-49.984-100-124 49.984-40 128 160 29.024 36-44 14.016-150.016 49.984 68 91.008 2.016 1.984C543.68 594.816 620.96 672 704 672c88.16 0 160-71.84 160-160 0-21.344-12.8-48.736-27.008-70.016-14.176-21.248-28-34.976-28-34.976L512 110.01599999999996l-296.992 296.96s-13.824 13.76-28 35.04C172.8 463.232 160 490.624 160 512c0 88.16 71.84 160 160 160z" />
      </g>
    </svg>
  );
});

IconDislike.displayName = 'IconDislike';

export { IconDislike };
