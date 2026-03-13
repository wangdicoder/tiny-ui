import { forwardRef } from 'react';
import type { IconProps } from './types';

const IconMedium = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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
        <path d="M834.7 616.2l61.3 58.9V688H683.7L532.4 309.6 360.3 688H137.7v-12.9l71.6-86.6c7-6.4 10.6-15.8 9.7-25.2V223c2.2-12.3-1.7-24.8-10.3-33.7L128 91v-12.7h228.6v12.9l-80.6 98c-8.7 8.9-12.9 21.3-11.1 33.7V517.3l200.7-439.2h23.3l172.6 439.2v-349.9c0-9.2 0-11.1-6-17.2l-62.1-60.3V77h301.2v12.9l-59.9 58.9c-5.2 4-7.9 10.7-6.8 17.2V599c-1.1 6.5 1.6 13.2 6.8 17.2z" />
      </g>
    </svg>
  );
});

IconMedium.displayName = 'IconMedium';

export { IconMedium };
