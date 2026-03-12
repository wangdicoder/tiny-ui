import { forwardRef } from 'react';
import type { IconProps } from './types';

const IconMoneyTransfer = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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
        <path d="M256 800V667.008l-146.016-96L96 560.96V0h832V560.992l-14.016 10.016-145.984 96V800H256z m124.992-64h262.016a49.536 49.536 0 0 1-3.008-16A48 48 0 0 1 688 672c5.536 0 11.072 1.28 16 3.008v-235.008l-70.016-52C618.432 441.12 570.208 480 512 480c-58.176 0-106.432-38.88-122.016-92L320 440V675.008c4.928-1.728 10.464-3.008 16-3.008A48 48 0 0 1 384 720c0 5.536-1.28 11.072-3.008 16zM512 624a48 48 0 1 1 0-96 48 48 0 0 1 0 96zM256 589.9839999999999v-101.984l-72 54.016L256 589.9839999999999z m512 0l72-48L768 488V590.0160000000001zM160 480l332.992-250.016 19.008-13.984 19.008 14.016L864 480v-416H160V480z m352-64c38.08 0 64-25.92 64-64v-8l-64-48-64 48V352c0 38.08 25.92 64 64 64z" />
      </g>
    </svg>
  );
});

IconMoneyTransfer.displayName = 'IconMoneyTransfer';

export { IconMoneyTransfer };
