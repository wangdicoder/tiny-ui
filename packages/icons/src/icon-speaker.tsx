import { forwardRef } from 'react';
import type { IconProps } from './types';

const IconSpeaker = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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
        <path d="M512 800c-88 0-160-72-160-160 0-49.984 23.776-94.592 60-124A191.52 191.52 0 0 1 320 352h64c0 72.832 55.168 128 128 128s128-55.168 128-128h64a191.52 191.52 0 0 1-92 164C648.224 545.408 672 590.0160000000001 672 640c0 88-72 160-160 160z m0-64c53.408 0 96-42.592 96-96s-42.592-96-96-96-96 42.592-96 96 42.592 96 96 96z m288-192a64 64 0 0 1-64-64c0-23.68 12.896-43.936 32-55.008V352h64v72.992c19.104 11.072 32 31.36 32 55.008a64 64 0 0 1-64 64zM128 320v-64h76.992L256 128h64v-128h64v128h256v-128h64v128h64l51.008 128H896v64H128z m140.992-64h486.016l-25.024-64H293.984l-24.96 64z" />
      </g>
    </svg>
  );
});

IconSpeaker.displayName = 'IconSpeaker';

export { IconSpeaker };
