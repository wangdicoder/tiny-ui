import { forwardRef } from 'react';
import type { IconProps } from './types';

const IconRightFill = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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
        <path d="M512 832C264.6 832 64 631.4 64 384s200.6-448 448-448 448 200.6 448 448S759.4 832 512 832z m154.7-454.5l-246-178c-5.3-3.8-12.7 0-12.7 6.5v46.9c0 10.2 4.9 19.9 13.2 25.9L566.6 384 421.2 489.2c-8.3 6-13.2 15.6-13.2 25.9V562c0 6.5 7.4 10.3 12.7 6.5l246-178c4.4-3.2 4.4-9.8 0-13z" />
      </g>
    </svg>
  );
});

IconRightFill.displayName = 'IconRightFill';

export { IconRightFill };
