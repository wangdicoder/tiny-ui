import { forwardRef } from 'react';
import type { IconProps } from './types';

const IconArrowUp = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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
        <path d="M868 350.5L536.1 733c-12.7 14.7-35.5 14.7-48.3 0L156 350.5c-4.5-5.2-0.8-13.2 6-13.2h81c4.6 0 9 2 12.1 5.5L474 595.1V32c0-4.4 3.6-8 8-8h60c4.4 0 8 3.6 8 8V595.1l218.9-252.3c3-3.5 7.4-5.5 12.1-5.5h81c6.8 0 10.5 8 6 13.2z" />
      </g>
    </svg>
  );
});

IconArrowUp.displayName = 'IconArrowUp';

export { IconArrowUp };
