import { forwardRef } from 'react';
import type { IconProps } from './types';

const IconScan = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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
        <path d="M136 512h56c4.4 0 8 3.6 8 8V696h176c4.4 0 8 3.6 8 8v56c0 4.4-3.6 8-8 8H196c-37.6 0-68-30.4-68-68v-180c0-4.4 3.6-8 8-8zM648 696h176v-176c0-4.4 3.6-8 8-8h56c4.4 0 8 3.6 8 8V700c0 37.6-30.4 68-68 68H648c-4.4 0-8-3.6-8-8v-56c0-4.4 3.6-8 8-8zM376 72H200V248c0 4.4-3.6 8-8 8h-56c-4.4 0-8-3.6-8-8v-180c0-37.6 30.4-68 68-68h180c4.4 0 8 3.6 8 8v56c0 4.4-3.6 8-8 8zM888 256h-56c-4.4 0-8-3.6-8-8v-176H648c-4.4 0-8-3.6-8-8v-56c0-4.4 3.6-8 8-8h180c37.6 0 68 30.4 68 68V248c0 4.4-3.6 8-8 8zM904 420H120c-4.4 0-8-3.6-8-8v-56c0-4.4 3.6-8 8-8h784c4.4 0 8 3.6 8 8v56c0 4.4-3.6 8-8 8z" />
      </g>
    </svg>
  );
});

IconScan.displayName = 'IconScan';

export { IconScan };
