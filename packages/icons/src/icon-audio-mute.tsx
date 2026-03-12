import { forwardRef } from 'react';
import type { IconProps } from './types';

const IconAudioMute = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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
        <path d="M682 441V585l-76-76v-68c-0.1-50.7-42-92.1-94-92-19.1-0.1-36.8 5.4-52 15l-54-55c29.1-22.4 65.9-36 106-36 93.8 0 170 75.1 170 168z m151 9h-60c-4.4 0-8-3.6-8-8 0-140.3-113.7-254-254-254-63 0-120.7 23-165 61l-54-54c48.9-43.2 110.8-72.3 179-81v-102H326c-13.9 0-24.9-14.3-25-32v-36c0.1-4.4 2.9-8 6-8h408c3.2 0 6 3.6 6 8v36c0 17.7-11 32-25 32H547V114c165.3 17.9 294 157.9 294 328 0 4.4-3.6 8-8 8z m13.1 377.7l-43.5 41.9c-3.1 3-8.1 3-11.2-0.1l-129-129C634.3 794.8 577 832 511 832c-93.9 0-170-75.3-170-168v-224c0-6.7 0.4-13.3 1.2-19.8l-68-68c-10.5 27.9-16.3 58.2-16.2 89.8-0.2 4.4-3.8 8-8 8h-60c-4.4 0-8-3.6-8-8 0-53 12.5-103 34.6-147.4l-137-137c-3.1-3.1-3.1-8.2 0-11.3l42.7-42.7c3.1-3.1 8.2-3.1 11.3 0L846.2 816.2l0.1 0.1c3.1 3.2 3 8.3-0.2 11.4zM417 495V664c0 50.6 41.9 92 94 92 46 0 84.1-32.3 92.3-74.7L417 495z" />
      </g>
    </svg>
  );
});

IconAudioMute.displayName = 'IconAudioMute';

export { IconAudioMute };
