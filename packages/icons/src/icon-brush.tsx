import { forwardRef } from 'react';
import type { IconProps } from './types';

const IconBrush = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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
        <path d="M840 704h-56v72c0 13.3-10.7 24-24 24H168c-13.3 0-24-10.7-24-24v-272c0-13.3 10.7-24 24-24h592c13.3 0 24 10.7 24 24V640h32v-200H465c-22.1 0-40-17.9-40-40v-136h-44c-4.4 0-8-3.6-8-8v-228c0-0.6 0.1-1.3 0.2-1.9-0.1-2-0.2-4.1-0.2-6.1 0-46.4 37.6-84 84-84s84 37.6 84 84c0 2.1-0.1 4.1-0.2 6.1 0.1 0.6 0.2 1.2 0.2 1.9V256c0 4.4-3.6 8-8 8h-44V376h351c22.1 0 40 17.9 40 40V664c0 22.1-17.9 40-40 40zM720 544H208V736h512v-192zM477 20c0-11-9-20-20-20s-20 9-20 20V200h40v-180z" />
      </g>
    </svg>
  );
});

IconBrush.displayName = 'IconBrush';

export { IconBrush };
