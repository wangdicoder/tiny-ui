import { forwardRef } from 'react';
import type { IconProps } from './types';

const IconAddressBook = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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
        <path d="M192 768v-160H160v-64h96V704h512v-640H256v96H192v-160h640V768H192z m320-192c-70.304 0-128-57.696-128-128 0-35.648 15.2-67.712 39.008-91.008A161.344 161.344 0 0 1 352 224h64c0 52.96 43.04 96 96 96s96-43.04 96-96h64a161.344 161.344 0 0 1-71.008 132.992C624.8 380.288 640 412.352 640 448c0 70.304-57.696 128-128 128zM192 512v-64H160v-64h96v128H192z m320 0c35.712 0 64-28.288 64-64s-28.288-64-64-64-64 28.288-64 64 28.288 64 64 64zM192 352v-64H160v-64h96v128H192z" />
      </g>
    </svg>
  );
});

IconAddressBook.displayName = 'IconAddressBook';

export { IconAddressBook };
