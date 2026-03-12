import { forwardRef } from 'react';
import type { IconProps } from './types';

const IconTodoList = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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
        <path d="M328.992 727.008L224 621.9839999999999 183.008 663.04 136.96 616.96l64-64 23.008-21.984 23.008 21.984 128 128L328.96 727.04zM480 672v-64h416V672H480z m-151.008-200.992L224 366.01599999999996l-40.992 40.96-46.016-45.984 64-64 23.008-21.984 23.008 21.984 128 128-46.016 46.016zM480 416v-64h416v64H480z m-151.008-200.992L224 109.98400000000004 183.008 151.03999999999996 136.96 104.96000000000004l64-64 23.008-21.984 23.008 21.984 128 128-46.016 46.016zM480 160v-64h416v64H480z" />
      </g>
    </svg>
  );
});

IconTodoList.displayName = 'IconTodoList';

export { IconTodoList };
