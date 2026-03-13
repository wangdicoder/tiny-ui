import { forwardRef } from 'react';
import type { IconProps } from './types';

const IconVoicePerson = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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
        <path d="M876.992 741.984l-54.976-34.976C847.616 646.208 864 582.4 864 512s-16.384-134.208-42.016-195.008l55.04-34.976C908.992 352.384 928 428.8 928 512c0 83.2-19.008 159.584-51.008 230.016zM352 688c-105.664 0-192-86.336-192-192 0-63.488 31.2-120 79.008-155.008C154.368 299.29600000000005 96 212.99199999999996 96 112h64c0 107.84 84.16 192 192 192s192-84.16 192-192h64c0 100.992-58.368 187.296-143.008 228.992A192.096 192.096 0 0 1 544 496c0 105.664-86.336 192-192 192zM768 672l-54.016-35.008c12.8-38.4 22.016-80.192 22.016-124.992 0-44.8-9.216-86.592-22.016-124.992L768 352c19.2 48 32 102.4 32 160 0 57.6-12.8 112-32 160zM352 624c71.072 0 128-56.928 128-128s-56.928-128-128-128-128 56.928-128 128 56.928 128 128 128z m307.008-26.016L601.984 560c3.2-16 6.016-32 6.016-48s-2.784-32-6.016-48l57.024-38.016c9.6 28.8 12.992 57.216 12.992 86.016 0 28.8-3.392 60.384-12.992 86.016z" />
      </g>
    </svg>
  );
});

IconVoicePerson.displayName = 'IconVoicePerson';

export { IconVoicePerson };
