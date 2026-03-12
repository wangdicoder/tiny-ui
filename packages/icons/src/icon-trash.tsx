import { forwardRef } from 'react';
import type { IconProps } from './types';

const IconTrash = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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
        <path d="M160 768v-160h35.008l54.976-522.016C254.912 36.799999999999955 296.96 0 346.016 0h332.032c49.056 0 91.072 36.768 96 86.016L828.96 608H864V768H160z m64-64h576v-32H224V704z m36-96h504l-52.992-515.008c-1.472-14.752-18.08-28.992-33.024-28.992H346.016c-14.912 0-31.52 14.24-32.96 28.992L259.968 608z" />
      </g>
    </svg>
  );
});

IconTrash.displayName = 'IconTrash';

export { IconTrash };
