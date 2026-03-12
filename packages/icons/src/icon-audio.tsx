import { forwardRef } from 'react';
import type { IconProps } from './types';

const IconAudio = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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
        <path d="M842 442c0 4.4-3.6 8-8 8h-60c-4.4 0-8-3.6-8-8 0-140.3-113.7-254-254-254S258 301.70000000000005 258 442c0 4.4-3.6 8-8 8h-60c-4.4 0-8-3.6-8-8 0-168.7 126.6-307.9 290-327.6V12H326.7c-13.7 0-24.7-14.3-24.7-32v-36c0-4.4 2.8-8 6.2-8h407.6c3.4 0 6.2 3.6 6.2 8v36c0 17.7-11 32-24.7 32H548V113.89999999999998c165.3 18 294 158 294 328.1zM512 272c93.9 0 170 75.2 170 168V664c0 92.8-76.1 168-170 168s-170-75.2-170-168v-224c0-92.8 76.1-168 170-168z m-94 392c0 50.6 41.9 92 94 92s94-41.4 94-92v-224c0-50.6-41.9-92-94-92s-94 41.4-94 92V664z" />
      </g>
    </svg>
  );
});

IconAudio.displayName = 'IconAudio';

export { IconAudio };
