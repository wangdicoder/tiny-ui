import { forwardRef } from 'react';
import type { IconProps } from './types';

const IconWord = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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
        <path d="M192 800v-832h640V800H192z m64-64h512v-704H256V736z m320-224v-208c0-6.944-9.056-16-16-16-1.344 0 0.64-1.536-2.016 2.016-2.624 3.52-6.592 12.416-8.96 21.984C544.192 331.13599999999997 544 352 544 352v64h-64v-144c0-6.944-9.056-16-16-16-6.944 0-16 9.056-16 16V480h-128v-64h64v-144c0-44.256 35.744-80 80-80 31.488 0 53.952 20.608 67.008 47.008 9.664-5.952 16.64-15.008 28.992-15.008 44.256 0 80 35.744 80 80V448h64v64h-128z" />
      </g>
    </svg>
  );
});

IconWord.displayName = 'IconWord';

export { IconWord };
