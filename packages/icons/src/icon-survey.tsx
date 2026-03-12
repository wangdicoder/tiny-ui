import { forwardRef } from 'react';
import type { IconProps } from './types';

const IconSurvey = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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
        <path d="M512 832c-40.288 0-68.864-28.48-83.008-64H160v-800h704V768h-268.992C580.864 803.52 552.288 832 512 832z m0-64c17.76 0 32-14.24 32-32v-32h96v-64h-256V704h96V736c0 17.76 14.24 32 32 32zM224 704h96v-128h384V704h96v-672H224V704z m64-192v-160h160v160H288z m224-32v-64h224v64h-224z m-160-32h32v-32h-32v32z m-64-160v-160h160v160H288z m224-32v-64h224v64h-224z" />
      </g>
    </svg>
  );
});

IconSurvey.displayName = 'IconSurvey';

export { IconSurvey };
