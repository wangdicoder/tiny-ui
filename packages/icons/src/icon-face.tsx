import { forwardRef } from 'react';
import type { IconProps } from './types';

const IconFace = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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
        <path d="M512 832c247.136 0 448-200.864 448-448s-200.864-448-448-448S64 136.86400000000003 64 384 264.864 832 512 832z m0-832c211.968 0 384 172.032 384 384S723.968 768 512 768 128 595.9680000000001 128 384s172.032-384 384-384z m96 480a64 64 0 1 0 128 0 64 64 0 0 0-128 0zM288 480a64 64 0 1 0 128 0 64 64 0 0 0-128 0z m407.68-170.848c17.184-11.2 22.4-34.336 11.2-51.52A229.44 229.44 0 0 0 512 150.84799999999996a229.44 229.44 0 0 0-194.88 106.784 37.408 37.408 0 0 0 11.2 51.52 37.408 37.408 0 0 0 51.52-11.2A155.904 155.904 0 0 1 512 225.53599999999994c53.76 0 103.04 26.88 132.16 72.416 11.2 17.184 34.336 22.4 51.52 11.2z" />
      </g>
    </svg>
  );
});

IconFace.displayName = 'IconFace';

export { IconFace };
