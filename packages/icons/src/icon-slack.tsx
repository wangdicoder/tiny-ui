import { forwardRef } from 'react';
import type { IconProps } from './types';

const IconSlack = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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
        <path d="M893.1 498.4c-85.8 286-209.5 352.5-495.5 266.7S45.1 555.6 130.9 269.6s209.5-352.5 495.5-266.7 352.5 209.5 266.7 495.5z m-150-189.9l-50.3-16.3 16.5-50.6c7.7-23.6-5.3-49-28.9-56.7-23.6-7.7-49 5.3-56.7 28.9l-16.5 50.6L506 231.5l16.5-50.6c7.7-23.6-5.3-49-28.9-56.7-23.6-7.7-49 5.3-56.7 28.9l-16.5 50.6-51-16.6c-23.6-7.7-49 5.3-56.7 28.9s5.3 49 28.9 56.7l51 16.6-32.9 101.3-51-16.6c-23.6-7.7-49 5.3-56.7 28.9-7.7 23.6 5.3 49 28.9 56.7l51 16.6-16.5 50.6c-7.7 23.6 5.3 49 28.9 56.7 23.6 7.7 49-5.3 56.7-28.9l16.5-50.6 101.3 32.9-16.5 50.6c-7.7 23.6 5.3 49 28.9 56.7s49-5.3 56.7-28.9l16.5-50.6 50.3 16.3c23.6 7.7 49-5.3 56.7-28.9 7.7-23.6-5.3-49-28.9-56.7L632.1 479 665 377.70000000000005l50.3 16.3c23.6 7.7 49-5.3 56.7-28.9 7.7-23.6-5.3-48.9-28.9-56.6zM445.262 418.327l101.293 32.909 32.908-101.293-101.292-32.908z" />
      </g>
    </svg>
  );
});

IconSlack.displayName = 'IconSlack';

export { IconSlack };
