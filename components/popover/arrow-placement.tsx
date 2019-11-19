import { PlacementType } from '../popup';
import { getRect } from '../_utils/dom';

interface GetArrayPlacementStyle {
  (target: HTMLElement, placement: PlacementType): {
    transform?: string;
    left?: number | string;
    right?: number | string;
    top?: number | string;
    bottom?: number | string;
  };
}

export const getArrowPlacementStyle: GetArrayPlacementStyle = (target, placement) => {
  const rect = getRect(target);
  switch (placement) {
    case 'top-left':
      return { left: rect.width / 2, transform: 'translateX(-50%) rotate(45deg)' };

    case 'top-center':
      return { left: '50%', transform: 'translateX(-50%) rotate(45deg)' };

    case 'top-right':
      return { right: rect.width / 2, transform: 'translateX(50%) rotate(45deg)' };

    case 'bottom-left':
      return { left: rect.width / 2, transform: 'translateX(-50%) rotate(45deg)' };

    case 'bottom-center':
      return { left: '50%', transform: 'translateX(-50%) rotate(45deg)' };

    case 'bottom-right':
      return { right: rect.width / 2, transform: 'translateX(50%) rotate(45deg)' };

    case 'left-top':
      return { top: rect.height / 2, transform: 'translateY(-50%) rotate(45deg)' };

    case 'left-center':
      return { top: '50%', transform: 'translateY(-50%) rotate(45deg)' };

    case 'left-bottom':
      return { bottom: rect.height / 2, transform: 'translateY(50%) rotate(45deg)' };

    case 'right-top':
      return { top: rect.height / 2, transform: 'translateY(-50%) rotate(45deg)' };

    case 'right-center':
      return { top: '50%', transform: 'translateY(-50%) rotate(45deg)' };

    case 'right-bottom':
      return { bottom: rect.height / 2, transform: 'translateY(50%) rotate(45deg)' };

    default:
      return {};
  }
};
