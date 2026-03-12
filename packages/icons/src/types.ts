import type { SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: string | number;
  color?: string;
}
