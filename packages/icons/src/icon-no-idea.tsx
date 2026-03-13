import { forwardRef } from 'react';
import type { IconProps } from './types';

const IconNoIdea = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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
        <path d="M119.008 823.008L72.96 776.96l832-832 46.016 46.016-274.016 273.984c7.264 9.28 15.04 18.176 24 26.016 60.8 54.4 99.008 134.784 99.008 217.984 0 169.6-147.2 307.392-320 284.992-83.616-10.112-158.08-59.648-204.992-126.976L119.008 823.008z m392-88.992C634.4 735.072 736 635.008 736 508.96c0-64-28.992-125.184-76.992-169.984-9.888-8.64-18.464-18.656-27.008-29.024L319.008 623.04c35.104 59.648 96.16 102.656 167.008 109.984 8.384 1.024 16.768 0.96 24.96 1.024zM227.008 544c-9.6-96 25.376-189.216 98.976-250.016 35.2-32 58.016-76 58.016-124V0h72.992c11.104-19.104 31.424-32 55.008-32 23.584 0 43.904 12.896 55.008 32H640v128l-64 64h-128c-6.4 57.6-35.2 111.616-80 150.016-41.6 35.2-67.392 83.584-76.992 137.984l-64 64zM448 128h128v-64h-128v64z" />
      </g>
    </svg>
  );
});

IconNoIdea.displayName = 'IconNoIdea';

export { IconNoIdea };
