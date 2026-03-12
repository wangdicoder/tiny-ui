import { forwardRef } from 'react';
import type { IconProps } from './types';

const IconCopyright = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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
        <path d="M512 800C282.624 800 96 613.376 96 384s186.624-416 416-416 416 186.624 416 416S741.376 800 512 800z m0-64c194.784 0 352-157.216 352-352s-157.216-352-352-352S160 189.216 160 384 317.216 736 512 736z m-3.008-160c-106.368 0-192-85.632-192-192s85.632-192 192-192c76.8 0 142.432 46.048 172.992 111.008l-57.984 26.976C603.36 286.144 560.192 256 508.992 256c-72.832 0-128 55.168-128 128s55.168 128 128 128c51.2 0 94.4-30.144 115.008-74.016l58.016 27.008C651.424 529.952 585.76 576 508.96 576z" />
      </g>
    </svg>
  );
});

IconCopyright.displayName = 'IconCopyright';

export { IconCopyright };
