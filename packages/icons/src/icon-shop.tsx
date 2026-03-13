import { forwardRef } from 'react';
import type { IconProps } from './types';

const IconShop = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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
        <path d="M128 768v-116.992l-90.016-120-5.984-8V512c0-52.64 43.36-96 96-96v-416h512v288h64v-288h192V416c52.64 0 96 43.36 96 96v11.008l-6.016 8L896 651.008V768H128z m64-64h640v-32H192V704z m-16-96h672l76.992-103.008c-3.52-13.888-13.984-24.992-28.992-24.992-17.76 0-32 14.24-32 32h-64c0-17.76-14.24-32-32-32-17.76 0-32 14.24-32 32h-64c0-17.76-14.24-32-32-32-17.76 0-32 14.24-32 32h-64c0-17.76-14.24-32-32-32-17.76 0-32 14.24-32 32h-64c0-17.76-14.24-32-32-32-17.76 0-32 14.24-32 32H288c0-17.76-14.24-32-32-32-17.76 0-32 14.24-32 32H160c0-17.76-14.24-32-32-32-15.04 0-25.504 11.104-28.992 24.992L176 608z m16-167.008A95.392 95.392 0 0 1 256 416c24.544 0 46.944 9.6 64 24.992A95.392 95.392 0 0 1 384 416c24.544 0 46.944 9.6 64 24.992A95.392 95.392 0 0 1 512 416c24.544 0 46.944 9.6 64 24.992A95.392 95.392 0 0 1 640 416c24.544 0 46.944 9.6 64 24.992A95.392 95.392 0 0 1 768 416c24.544 0 46.944 9.6 64 24.992V64h-64v288h-192v-288H192V440.992zM256 352v-224h256v224H256z m64-64h128v-96h-128v96z" />
      </g>
    </svg>
  );
});

IconShop.displayName = 'IconShop';

export { IconShop };
