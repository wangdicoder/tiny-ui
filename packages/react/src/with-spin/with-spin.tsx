import { forwardRef, type ForwardRefExoticComponent, type RefAttributes } from 'react';
import type { IconProps } from '@tiny-design/icons';
import classNames from 'classnames';

type IconComponent = ForwardRefExoticComponent<IconProps & RefAttributes<SVGSVGElement>>;

export function withSpin(Icon: IconComponent): IconComponent {
  const SpinIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
    const { className, ...rest } = props;

    return (
      <Icon
        ref={ref}
        className={classNames('ty-icon-spin', className)}
        {...rest}
      />
    );
  });

  const name = Icon.displayName || 'Icon';
  SpinIcon.displayName = `withSpin(${name})`;

  return SpinIcon;
}
