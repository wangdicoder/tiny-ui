import { forwardRef } from 'react';
import type { IconProps } from './types';

const IconCandleSticks = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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
        <path d="M768 768v-64h-64v-224h64v-64h64v64h64V704h-64V768h-64zM352 704v-64H288v-224h64v-64h64v64h64V640h-64V704h-64z m416-64h64v-96h-64V640z m-416-64h64v-96h-64v96z m224-160v-64h-64v-224h64v-64h64v64h64v224h-64v64h-64zM192 352v-64H128v-224h64v-64h64v64h64v224H256v64H192z m384-64h64v-96h-64v96zM192 224h64v-96H192v96z" />
      </g>
    </svg>
  );
});

IconCandleSticks.displayName = 'IconCandleSticks';

export { IconCandleSticks };
