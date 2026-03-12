import { forwardRef, useRef, type ForwardRefExoticComponent, type RefAttributes, type CSSProperties } from 'react';
import type { IconProps } from './types';

type IconComponent = ForwardRefExoticComponent<IconProps & RefAttributes<SVGSVGElement>>;

const STYLE_ID = '__tiny_icon_spin__';

function ensureKeyframes() {
  if (typeof document === 'undefined') return;
  if (document.getElementById(STYLE_ID)) return;
  const style = document.createElement('style');
  style.id = STYLE_ID;
  style.textContent =
    '@keyframes tiny-icon-spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }';
  document.head.appendChild(style);
}

const spinStyle: CSSProperties = { animation: 'tiny-icon-spin 1s linear infinite' };

export function withSpin(Icon: IconComponent): IconComponent {
  const SpinIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
    const injected = useRef(false);
    if (!injected.current) {
      ensureKeyframes();
      injected.current = true;
    }

    return (
      <Icon
        ref={ref}
        {...props}
        style={{ ...spinStyle, ...props.style }}
      />
    );
  });

  const name = Icon.displayName || 'Icon';
  SpinIcon.displayName = `withSpin(${name})`;

  return SpinIcon;
}
