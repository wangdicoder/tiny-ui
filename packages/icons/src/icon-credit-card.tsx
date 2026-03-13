import { forwardRef } from 'react';
import type { IconProps } from './types';

const IconCreditCard = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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
        <path d="M928 736H96c-17.7 0-32-14.3-32-32v-640c0-17.7 14.3-32 32-32h832c17.7 0 32 14.3 32 32V704c0 17.7-14.3 32-32 32z m-792-72h752v-120H136V664z m752-560H136V456h752v-352z m-237 64h165c4.4 0 8 3.6 8 8v72c0 4.4-3.6 8-8 8H651c-4.4 0-8-3.6-8-8v-72c0-4.4 3.6-8 8-8z" />
      </g>
    </svg>
  );
});

IconCreditCard.displayName = 'IconCreditCard';

export { IconCreditCard };
