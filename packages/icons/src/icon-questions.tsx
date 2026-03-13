import { forwardRef } from 'react';
import type { IconProps } from './types';

const IconQuestions = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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
        <path d="M192 768v-640h128v-128h512V640h-128V768H192z m64-64h384v-512H256V704z m192-64a128 128 0 0 1-128-128h64c0 38.08 25.92 64 64 64s64-25.92 64-64-25.92-64-64-64h-32v-96h64v38.016c54.88 14.4 96 62.56 96 121.984a128 128 0 0 1-128 128z m256-64h64v-512H384v64h320V576z m-288-256v-64h64v64h-64z" />
      </g>
    </svg>
  );
});

IconQuestions.displayName = 'IconQuestions';

export { IconQuestions };
