import { forwardRef } from 'react';
import type { IconProps } from './types';

const IconMusic = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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
        <path d="M864 775.008l-38.016-8-512-96L288 667.008v-429.024A125.568 125.568 0 0 1 224 256c-70.304 0-128-57.696-128-128s57.696-128 128-128 128 57.696 128 128V486.016l448 83.968v-235.968A125.568 125.568 0 0 1 736 352c-70.304 0-128-57.696-128-128s57.696-128 128-128 128 57.696 128 128V775.008z m-64-76.992v-64l-448-84.032v64l448 84.032zM736 288c35.712 0 64-28.288 64-64s-28.288-64-64-64-64 28.288-64 64 28.288 64 64 64zM224 192c35.712 0 64-28.288 64-64s-28.288-64-64-64-64 28.288-64 64 28.288 64 64 64z" />
      </g>
    </svg>
  );
});

IconMusic.displayName = 'IconMusic';

export { IconMusic };
