import { forwardRef } from 'react';
import type { IconProps } from './types';

const IconQuestionFill = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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
        <path d="M512 832C264.6 832 64 631.4 64 384s200.6-448 448-448 448 200.6 448 448S759.4 832 512 832z m0-708c-22.1 0-40 17.9-40 40s17.9 40 40 40 40-17.9 40-40-17.9-40-40-40z m62.9 219.5c-18.5-7.1-30.9-25.1-30.9-44.8V276c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v21.5c0 23.1 6.7 45.9 19.9 64.9 12.9 18.6 30.9 32.8 52.1 40.9 34 13.1 56 41.6 56 72.7 0 44.1-43.1 80-96 80s-96-35.9-96-80v-7.6c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8V476c0 39.3 17.2 76 48.4 103.3C430.4 605.6 470 620 512 620s81.6-14.5 111.6-40.7C654.8 552 672 515.3 672 476c0-57.8-38.1-109.8-97.1-132.5z" />
      </g>
    </svg>
  );
});

IconQuestionFill.displayName = 'IconQuestionFill';

export { IconQuestionFill };
