import { forwardRef } from 'react';
import type { IconProps } from './types';

const IconQrcode = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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
        <path d="M468 768H160c-17.7 0-32-14.3-32-32v-308c0-4.4 3.6-8 8-8h332c4.4 0 8 3.6 8 8V760c0 4.4-3.6 8-8 8z m-56-284H192V704h220v-220z m-138 74h56c4.4 0 8 3.6 8 8v56c0 4.4-3.6 8-8 8h-56c-4.4 0-8-3.6-8-8v-56c0-4.4 3.6-8 8-8z m194-210H136c-4.4 0-8-3.6-8-8v-308c0-17.7 14.3-32 32-32h308c4.4 0 8 3.6 8 8V340c0 4.4-3.6 8-8 8z m-56-284H192V284h220v-220z m-138 74h56c4.4 0 8 3.6 8 8v56c0 4.4-3.6 8-8 8h-56c-4.4 0-8-3.6-8-8v-56c0-4.4 3.6-8 8-8z m590 630H556c-4.4 0-8-3.6-8-8v-332c0-4.4 3.6-8 8-8h332c4.4 0 8 3.6 8 8V736c0 17.7-14.3 32-32 32z m-32-284H612V704h220v-220z m-138 74h56c4.4 0 8 3.6 8 8v56c0 4.4-3.6 8-8 8h-56c-4.4 0-8-3.6-8-8v-56c0-4.4 3.6-8 8-8z m194-210h-48c-4.4 0-8-3.6-8-8v-134h-78V340c0 4.4-3.6 8-8 8H556c-4.4 0-8-3.6-8-8v-332c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8V252h78v-102c0-4.4 3.6-8 8-8h190c4.4 0 8 3.6 8 8V340c0 4.4-3.6 8-8 8zM746 64h-48c-4.4 0-8-3.6-8-8v-48c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v48c0 4.4-3.6 8-8 8z m142 0h-48c-4.4 0-8-3.6-8-8v-48c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v48c0 4.4-3.6 8-8 8z" />
      </g>
    </svg>
  );
});

IconQrcode.displayName = 'IconQrcode';

export { IconQrcode };
