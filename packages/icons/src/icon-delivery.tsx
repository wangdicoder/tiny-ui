import { forwardRef } from 'react';
import type { IconProps } from './types';

const IconDelivery = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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
        <path d="M0 704v-64h608v-480h-196.992c-14.304 55.04-63.68 96-123.008 96-59.296 0-108.704-40.96-123.008-96H128v160H64v-224h100.992c14.304-55.04 63.68-96 123.008-96 59.296 0 108.704 40.96 123.008 96h265.984c14.304-55.04 63.68-96 123.008-96 59.296 0 108.704 40.96 123.008 96H1024v260.992l-2.016 5.024-64 192L951.04 576H672V704H0z m32-128v-64h288v64H32z m640-64h232.992L960 348V160h-36.992c-14.304 55.04-63.68 96-123.008 96-59.296 0-108.704-40.96-123.008-96H672V512zM64 448v-64h192v64H64z m224-256c35.712 0 64-28.288 64-64s-28.288-64-64-64-64 28.288-64 64 28.288 64 64 64z m512 0c35.712 0 64-28.288 64-64s-28.288-64-64-64-64 28.288-64 64 28.288 64 64 64z" />
      </g>
    </svg>
  );
});

IconDelivery.displayName = 'IconDelivery';

export { IconDelivery };
