import { forwardRef } from 'react';
import type { IconProps } from './types';

const IconShare = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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
        <path d="M752 232c-28.5 0-54.8-10-75.4-26.7L469.4 355.20000000000005c1.7 9.3 2.6 19 2.6 28.8s-0.9 19.4-2.6 28.8l207.2 149.9C697.2 546 723.5 536 752 536c66.2 0 120 53.8 120 120s-53.8 120-120 120-120-53.8-120-120c0-11.6 1.6-22.7 4.7-33.3L439.9 480.2C410.7 518.9 364.3 544 312 544c-88.4 0-160-71.6-160-160s71.6-160 160-160c52.3 0 98.7 25.1 127.9 63.8l196.8-142.5c-3.1-10.6-4.7-21.8-4.7-33.3 0-66.2 53.8-120 120-120s120 53.8 120 120-53.8 120-120 120z m0 476c28.7 0 52-23.3 52-52s-23.3-52-52-52-52 23.3-52 52 23.3 52 52 52zM312 296c-48.5 0-88 39.5-88 88s39.5 88 88 88 88-39.5 88-88-39.5-88-88-88z m440-236c-28.7 0-52 23.3-52 52s23.3 52 52 52 52-23.3 52-52-23.3-52-52-52z" />
      </g>
    </svg>
  );
});

IconShare.displayName = 'IconShare';

export { IconShare };
