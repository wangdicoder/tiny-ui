import { forwardRef } from 'react';
import type { IconProps } from './types';

const IconFrame = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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
        <path d="M64 736v-704h896V736H64z m64-64h768v-576H128V672z m64-64v-448h640V608H192z m64-64h512v-320H256V544z" />
      </g>
    </svg>
  );
});

IconFrame.displayName = 'IconFrame';

export { IconFrame };
