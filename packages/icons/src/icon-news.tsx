import { forwardRef } from 'react';
import type { IconProps } from './types';

const IconNews = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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
        <path d="M96 736v-576a128 128 0 0 1 128-128h576a128 128 0 0 1 128 128V512h-192V736H96z m64-64h512v-512c0-23.36 7.072-45.12 18.016-64H224c-38.08 0-64 25.92-64 64V672z m64-64v-160h384V608H224z m64-64h256v-32H288v32z m448-96h128v-288c0-38.08-25.92-64-64-64s-64 25.92-64 64v288zM224 416v-64h160v64H224z m224 0v-64h160v64h-160z m-224-96v-64h160v64H224z m224 0v-64h160v64h-160z m-224-96v-64h160v64H224z m224 0v-64h160v64h-160z" />
      </g>
    </svg>
  );
});

IconNews.displayName = 'IconNews';

export { IconNews };
