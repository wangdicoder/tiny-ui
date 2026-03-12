import React, { createRef } from 'react';
import { render } from '@testing-library/react';
import { IconClose, IconPlus, IconSearch, IconHeart, IconStar } from '../index';

const sampleIcons = [
  { name: 'IconClose', Component: IconClose },
  { name: 'IconPlus', Component: IconPlus },
  { name: 'IconSearch', Component: IconSearch },
  { name: 'IconHeart', Component: IconHeart },
  { name: 'IconStar', Component: IconStar },
];

describe('Icon components', () => {
  describe.each(sampleIcons)('$name', ({ Component }) => {
    it('renders with default props', () => {
      const { container } = render(<Component />);
      const svg = container.querySelector('svg')!;
      expect(svg).toBeInTheDocument();
      expect(svg.getAttribute('width')).toBe('1em');
      expect(svg.getAttribute('height')).toBe('1em');
      expect(svg.getAttribute('fill')).toBe('currentColor');
      expect(svg.getAttribute('viewBox')).toBe('0 0 1024 1024');
    });

    it('applies size prop', () => {
      const { container } = render(<Component size={24} />);
      const svg = container.querySelector('svg')!;
      expect(svg.getAttribute('width')).toBe('24');
      expect(svg.getAttribute('height')).toBe('24');
    });

    it('applies color prop', () => {
      const { container } = render(<Component color="red" />);
      const svg = container.querySelector('svg')!;
      expect(svg.getAttribute('fill')).toBe('red');
    });

    it('applies className prop', () => {
      const { container } = render(<Component className="my-icon" />);
      const svg = container.querySelector('svg')!;
      expect(svg).toHaveClass('my-icon');
    });

    it('applies style prop', () => {
      const { container } = render(<Component style={{ marginRight: 8 }} />);
      const svg = container.querySelector('svg')!;
      expect(svg.style.marginRight).toBe('8px');
    });

    it('forwards ref', () => {
      const ref = createRef<SVGSVGElement>();
      render(<Component ref={ref} />);
      expect(ref.current).toBeInstanceOf(SVGSVGElement);
    });

    it('matches snapshot', () => {
      const { container } = render(<Component />);
      expect(container.firstChild).toMatchSnapshot();
    });
  });

  it('contains the Y-axis flip transform', () => {
    const { container } = render(<IconClose />);
    const g = container.querySelector('g')!;
    expect(g.getAttribute('transform')).toBe('translate(0, 896) scale(1, -1)');
  });

  it('passes through extra SVG attributes', () => {
    const { container } = render(<IconClose data-testid="close-icon" aria-hidden="true" />);
    const svg = container.querySelector('svg')!;
    expect(svg.getAttribute('data-testid')).toBe('close-icon');
    expect(svg.getAttribute('aria-hidden')).toBe('true');
  });

});
