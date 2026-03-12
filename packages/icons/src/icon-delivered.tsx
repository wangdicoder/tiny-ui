import { forwardRef } from 'react';
import type { IconProps } from './types';

const IconDelivered = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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
        <path d="M0 704v-608H132.992c14.304-55.04 63.68-96 123.008-96 59.296 0 108.704 40.96 123.008 96H676.992c14.304-55.04 63.68-96 123.008-96 59.296 0 108.704 40.96 123.008 96H1024v260.992l-2.016 5.024-64 192L951.04 576H672V704H0z m64-64h544v-480h-228.992c-14.304 55.04-63.68 96-123.008 96-59.296 0-108.704-40.96-123.008-96H64V640z m424.992-72.992L320 398.016l-104.992 104.96-46.016-45.984 128-128 23.008-21.984 23.008 21.984 192 192-46.016 46.016zM672 512h232.992L960 348V160h-36.992c-14.304 55.04-63.68 96-123.008 96-59.296 0-108.704-40.96-123.008-96H672V512zM256 192c35.712 0 64-28.288 64-64s-28.288-64-64-64-64 28.288-64 64 28.288 64 64 64z m544 0c35.712 0 64-28.288 64-64s-28.288-64-64-64-64 28.288-64 64 28.288 64 64 64z" />
      </g>
    </svg>
  );
});

IconDelivered.displayName = 'IconDelivered';

export { IconDelivered };
