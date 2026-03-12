import { forwardRef } from 'react';
import type { IconProps } from './types';

const IconLink = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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
        <path d="M574 230.60000000000002c-3.1 3.1-8.2 3.1-11.3 0L446.5 114.39999999999998c-53.8-53.8-144.6-59.5-204 0-59.5 59.5-53.8 150.2 0 204l116.2 116.2c3.1 3.1 3.1 8.2 0 11.3l-39.8 39.8c-3.1 3.1-8.2 3.1-11.3 0L191.4 369.5c-84.6-84.6-84.6-221.5 0-306s221.5-84.6 306 0l116.2 116.2c3.1 3.1 3.1 8.2 0 11.3L574 230.60000000000002zM832.6 704.6c-84.6 84.6-221.5 84.6-306 0L410.3 588.4c-3.1-3.1-3.1-8.2 0-11.3l39.7-39.7c3.1-3.1 8.2-3.1 11.3 0l116.2 116.2c53.8 53.8 144.6 59.5 204 0 59.5-59.5 53.8-150.2 0-204L665.3 333.4c-3.1-3.1-3.1-8.2 0-11.3l39.8-39.8c3.1-3.1 8.2-3.1 11.3 0l116.2 116.2c84.5 84.6 84.5 221.5 0 306.1zM610.1 523.7c-3.1 3.1-8.2 3.1-11.3 0L372.3 297.29999999999995c-3.1-3.1-3.1-8.2 0-11.3l39.6-39.6c3.1-3.1 8.2-3.1 11.3 0l226.4 226.4c3.1 3.1 3.1 8.2 0 11.3l-39.5 39.6z" />
      </g>
    </svg>
  );
});

IconLink.displayName = 'IconLink';

export { IconLink };
