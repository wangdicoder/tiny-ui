import { forwardRef } from 'react';
import type { IconProps } from './types';

const IconLinkedin = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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
        <path d="M880 784H144c-17.7 0-32-14.3-32-32v-736c0-17.7 14.3-32 32-32h736c17.7 0 32 14.3 32 32V752c0 17.7-14.3 32-32 32zM349.3 102.29999999999995H230.6V484.1h118.7v-381.8z m-59.3 434c-38 0-68.8 30.8-68.8 68.8s30.8 68.8 68.8 68.8c37.9 0 68.8-30.8 68.8-68.8-0.1-38-30.9-68.8-68.8-68.8z m503.7-434H675.1V288c0 44.3-0.8 101.2-61.7 101.2-61.7 0-71.2-48.2-71.2-98v-188.9H423.7V484.1h113.8v-52.2h1.6c15.8 30 54.5 61.7 112.3 61.7 120.2 0 142.3-79.1 142.3-181.9v-209.4z" />
      </g>
    </svg>
  );
});

IconLinkedin.displayName = 'IconLinkedin';

export { IconLinkedin };
