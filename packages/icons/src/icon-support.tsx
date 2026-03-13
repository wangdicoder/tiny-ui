import { forwardRef } from 'react';
import type { IconProps } from './types';

const IconSupport = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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
        <path d="M672 800c-141.76 0-256-114.24-256-256 0-7.52 1.184-17.696 2.016-27.008L144 243.00800000000004a160 160 0 0 1 0-227.008 160 160 0 0 1 227.008 0l273.984 274.016c9.312-0.832 19.52-2.016 27.008-2.016 141.76 0 256 114.24 256 256a243.2 243.2 0 0 1-30.016 118.016l-20 36.992-29.984-30.016-138.016-136.992-49.984 50.016L796.992 720l30.016 30.016-37.024 20A243.2 243.2 0 0 1 672 800z m0-64c15.552 0 27.136-6.688 40.992-10.016L592 605.056l-23.008-23.04 23.008-21.984 96-96 22.016-23.008 22.976 23.008 121.024 120.992c3.296-13.856 9.984-25.44 9.984-40.992 0-107.84-84.16-192-192-192-12.8 0-23.04 0-31.008 2.016l-16.992 4.992-12.992-13.024-285.024-284.992c-39.392-39.392-97.568-39.392-136.96 0l-1.024 1.024c-38.4 39.36-38.08 96.928 0.992 136l285.024 284.992 12.992 12.992-4.992 16.992C480 520.96 480 531.2 480 544c0 107.84 84.16 192 192 192z" />
      </g>
    </svg>
  );
});

IconSupport.displayName = 'IconSupport';

export { IconSupport };
