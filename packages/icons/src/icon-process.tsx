import { forwardRef } from 'react';
import type { IconProps } from './types';

const IconProcess = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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
        <path d="M512 768c-38.4 0-76.8-6.4-112-16l58.016-54.016C477.184 701.184 492.8 704 512 704c90.336 0 170.24-37.856 228-96H640v-64h192V736h-64v-66.016A380.576 380.576 0 0 1 512 768zM160 704v-64h68C166.944 572.192 128 483.488 128 384c0-35.2 6.592-70.016 12.992-102.016L195.008 336C191.808 352 192 368 192 384c0 90.08 37.76 168.96 96 228V512h64V704H160z m720-218.016l-51.008-56.96c3.2-16 3.008-29.024 3.008-45.024 0-89.984-37.056-169.728-96-228V256h-64v-192h192v64h-64.992C860.16 196.25599999999997 896 285.6 896 384c0 35.2-6.4 70.016-16 102.016zM192 224v-192h64v68C324 38.24000000000001 412.992 0 512 0c32 0 64.192 3.392 92.992 12.992L544 64h-32c-90.336 0-170.24 37.856-228 96H384v64H192z" />
      </g>
    </svg>
  );
});

IconProcess.displayName = 'IconProcess';

export { IconProcess };
