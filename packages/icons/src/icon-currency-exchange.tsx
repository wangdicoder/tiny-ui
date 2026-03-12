import { forwardRef } from 'react';
import type { IconProps } from './types';

const IconCurrencyExchange = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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
        <path d="M512 800C281.6 800 96 614.4 96 384c0-96.672 33.6-185.984 88-256H96v-64h192v192H224v-72.992A342.816 342.816 0 0 0 160 384C160 579.2 316.8 736 512 736c57.6 0 112-12.416 160-38.016V768c-48 19.2-102.4 32-160 32z m224-96v-192h64V584.992c40.928-57.376 64-125.984 64-200.992 0-195.2-156.8-352-352-352-57.6 0-112 12.384-160 38.016V0c48-19.2 102.4-32 160-32 230.4 0 416 185.6 416 416 0 96.672-33.6 185.984-88 256H928V704h-192z m-256-64v-64.992c-53.856-8.032-96-55.04-96-111.008 0-61.568 50.432-112 112-112h32c28.032 0 48-19.968 48-48s-19.968-48-48-48H416v-64h64v-64h64v64.992c53.856 8.032 96 55.04 96 111.008 0 61.568-50.432 112-112 112h-32c-28.032 0-48 19.968-48 48s19.968 48 48 48H608v64h-64V640h-64z" />
      </g>
    </svg>
  );
});

IconCurrencyExchange.displayName = 'IconCurrencyExchange';

export { IconCurrencyExchange };
