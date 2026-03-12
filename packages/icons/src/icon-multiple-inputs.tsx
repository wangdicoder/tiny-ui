import { forwardRef } from 'react';
import type { IconProps } from './types';

const IconMultipleInputs = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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
        <path d="M480 768v-226.016L407.008 615.04 360.96 568.96l128-128 23.008-21.984 23.008 21.984 128 128L616.96 615.04 544 542.0160000000001V768h-64zM96 544v-64h96c17.76 0 32-14.24 32-32v-130.016L151.008 391.04 104.96 344.96000000000004l128-128 23.008-21.984 23.008 21.984 128 128-46.016 46.016L288 318.01599999999996V448c0 52.64-43.36 96-96 96H96z m736 0c-52.64 0-96-43.36-96-96v-130.016l-72.992 73.024-46.016-46.016 128-128 23.008-21.984 23.008 21.984 128 128-46.016 46.016L800 318.01599999999996V448c0 17.76 14.24 32 32 32h96v64h-96zM96 192v-160h832v160h-64v-96H160v96H96z" />
      </g>
    </svg>
  );
});

IconMultipleInputs.displayName = 'IconMultipleInputs';

export { IconMultipleInputs };
