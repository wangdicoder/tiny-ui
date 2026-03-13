import { forwardRef } from 'react';
import type { IconProps } from './types';

const IconFeedback = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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
        <path d="M512 837.984l-18.016-10.976-384-256L96 560.96V0h832V560.992l-14.016 10.016-384 256L512 838.016z m0-76.992l328-218.976L544 320v226.016l72.992-73.024 46.016 46.016-128 128L512 668.992l-23.008-21.984-128-128 46.016-46.016L480 545.9839999999999V320l-296 222.016L512 760.96zM160 480l332.992-250.016 19.008-13.984 19.008 14.016L864 480v-416H160V480z" />
      </g>
    </svg>
  );
});

IconFeedback.displayName = 'IconFeedback';

export { IconFeedback };
