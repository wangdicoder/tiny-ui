import { forwardRef } from 'react';
import type { IconProps } from './types';

const IconRating = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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
        <path d="M128 768v-768h768V768H128z m64-64h640v-640H192V704z m320-76.992l-74.016-166.016L256 441.984 394.016 320l-39.04-179.008L512 234.01599999999996l156.992-93.024L630.016 320 768 442.016l-182.016 18.976L512 627.008z m0-156.992l16-35.008 16-35.008 38.016-3.008 38.976-3.008-28.992-25.984-28.992-26.016 6.976-34.976 9.024-38.016L544 288l-32 19.008L480 288l-32-19.008 10.016 38.016 5.984 34.976-28.992 26.016-28.992 26.016 38.976 2.976 38.016 3.008 16 35.008 12.992 35.008z" />
      </g>
    </svg>
  );
});

IconRating.displayName = 'IconRating';

export { IconRating };
