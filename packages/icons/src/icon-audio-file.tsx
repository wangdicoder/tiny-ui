import { forwardRef } from 'react';
import type { IconProps } from './types';

const IconAudioFile = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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
        <path d="M192 800v-832h640V800H192z m64-64h512v-704H256V736z m256-151.008V377.98400000000004A93.376 93.376 0 0 1 480 384c-52.64 0-96-43.36-96-96s43.36-96 96-96 96 43.36 96 96v215.008l88-22.016 16 62.016-128 32L512 584.96zM480 320c18.048 0 32-13.952 32-32 0-18.048-13.952-32-32-32-18.048 0-32 13.952-32 32 0 18.048 13.952 32 32 32z" />
      </g>
    </svg>
  );
});

IconAudioFile.displayName = 'IconAudioFile';

export { IconAudioFile };
