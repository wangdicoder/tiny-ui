import React, { createRef } from 'react';
import { render } from '@testing-library/react';
import { IconClose } from '@tiny-design/icons';
import { withSpin } from '../with-spin';

describe('withSpin HOC', () => {
  const SpinClose = withSpin(IconClose);

  it('applies ty-icon-spin CSS class', () => {
    const { container } = render(<SpinClose />);
    const svg = container.querySelector('svg')!;
    expect(svg).toHaveClass('ty-icon-spin');
  });

  it('passes through icon props', () => {
    const { container } = render(<SpinClose size={24} color="red" />);
    const svg = container.querySelector('svg')!;
    expect(svg.getAttribute('width')).toBe('24');
    expect(svg.getAttribute('fill')).toBe('red');
  });

  it('merges className with existing className prop', () => {
    const { container } = render(<SpinClose className="custom" />);
    const svg = container.querySelector('svg')!;
    expect(svg).toHaveClass('ty-icon-spin');
    expect(svg).toHaveClass('custom');
  });

  it('forwards ref', () => {
    const ref = createRef<SVGSVGElement>();
    render(<SpinClose ref={ref} />);
    expect(ref.current).toBeInstanceOf(SVGSVGElement);
  });

  it('sets displayName', () => {
    expect(SpinClose.displayName).toBe('withSpin(IconClose)');
  });
});
