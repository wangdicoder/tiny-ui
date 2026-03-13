import { forwardRef } from 'react';
import type { IconProps } from './types';

const IconTrademark = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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
        <path d="M96 640v-64h128v-416h64V576h128V640H96z m384 0v-480h64V548l132.992-212.992 27.008-43.008 27.008 43.008L864 548V160h64V640H845.984l-8.96-15.008L704 412l-132.992 212.992L561.984 640H480z" />
      </g>
    </svg>
  );
});

IconTrademark.displayName = 'IconTrademark';

export { IconTrademark };
