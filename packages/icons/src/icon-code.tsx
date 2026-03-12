import { forwardRef } from 'react';
import type { IconProps } from './types';

const IconCode = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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
        <path d="M137.6 384l204.8 204.8c12.8 12.8 12.8 32 0 44.8-12.8 12.8-32 12.8-44.8 0L70.4 406.4c-6.4-6.4-9.6-12.8-9.6-22.4 0-9.6 3.2-16 9.6-22.4l227.2-227.2c12.8-12.8 32-12.8 44.8 0 12.8 12.8 12.8 32 0 44.8L137.6 384z m464 339.2c-16 3.2-35.2-6.4-38.4-22.4L396.8 83.20000000000005c-3.2-16 6.4-35.2 22.4-38.4 16-3.2 35.2 6.4 38.4 22.4L624 684.8c6.4 16-3.2 35.2-22.4 38.4z m352-316.8L726.4 633.6c-12.8 12.8-32 12.8-44.8 0-12.8-12.8-12.8-32 0-44.8L886.4 384 681.6 179.20000000000005c-12.8-12.8-12.8-32 0-44.8 12.8-12.8 32-12.8 44.8 0l227.2 227.2c6.4 6.4 9.6 16 9.6 22.4 0 9.6-3.2 16-9.6 22.4z" />
      </g>
    </svg>
  );
});

IconCode.displayName = 'IconCode';

export { IconCode };
