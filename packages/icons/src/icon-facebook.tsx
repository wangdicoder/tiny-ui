import { forwardRef } from 'react';
import type { IconProps } from './types';

const IconFacebook = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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
        <path d="M880 784H144c-17.7 0-32-14.3-32-32v-736c0-17.7 14.3-32 32-32h736c17.7 0 32 14.3 32 32V752c0 17.7-14.3 32-32 32z m-92.4-233.5h-63.9c-50.1 0-59.8-23.8-59.8-58.8v-77.1h119.6l-15.6-120.7h-104V-16H539.2V293.79999999999995H434.9V414.6h104.3v89c0 103.3 63.1 159.6 155.3 159.6 44.2 0 82.1-3.3 93.2-4.8v-107.9z" />
      </g>
    </svg>
  );
});

IconFacebook.displayName = 'IconFacebook';

export { IconFacebook };
