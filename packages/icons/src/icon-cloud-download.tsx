import { forwardRef } from 'react';
import type { IconProps } from './types';

const IconCloudDownload = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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
        <path d="M512 736c-131.808 0-235.488-100.16-250.016-228a156.64 156.64 0 0 1-122.976-103.008C60.288 382.20799999999997 0 312.03200000000004 0 224c0-106.368 85.632-192 192-192h640c106.368 0 192 85.632 192 192 0 56.32-27.36 106.752-67.008 142.016-7.424 112.448-97.12 202.176-209.984 208C708.48 667.808 620.096 736 512 736z m0-64c88.384 0 159.072-56.672 184-136.992l7.008-23.008H736c88.16 0 160-71.84 160-160v-16l12.992-10.016A130.336 130.336 0 0 0 960 224c0-72.832-55.168-128-128-128H192c-72.832 0-128 55.168-128 128a126.112 126.112 0 0 0 104.992 124.992l21.024 4 4 21.024C203.584 417.152 241.792 448 288 448h32v32c0 107.84 84.16 192 192 192z m-32-160v-210.016l-72.992 73.024-46.016-46.016 128-128 23.008-21.984 23.008 21.984 128 128-46.016 46.016L544 301.98400000000004V512h-64z" />
      </g>
    </svg>
  );
});

IconCloudDownload.displayName = 'IconCloudDownload';

export { IconCloudDownload };
