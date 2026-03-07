import React from 'react';
import { render } from '@testing-library/react';
import Space from '../index';

describe('<Space />', () => {
  it('should match the snapshot', () => {
    const { asFragment } = render(<Space><div>A</div><div>B</div></Space>);
    expect(asFragment()).toMatchSnapshot();
  });

  it('should render correctly', () => {
    const { container } = render(<Space><div>A</div><div>B</div></Space>);
    expect(container.firstChild).toHaveClass('ty-space');
  });

  it('should render horizontal by default', () => {
    const { container } = render(<Space><div>A</div><div>B</div></Space>);
    expect(container.firstChild).toHaveClass('ty-space_horizontal');
  });

  it('should render vertical', () => {
    const { container } = render(<Space direction="vertical"><div>A</div><div>B</div></Space>);
    expect(container.firstChild).toHaveClass('ty-space_vertical');
  });

  it('should wrap children in space items', () => {
    const { container } = render(<Space><div>A</div><div>B</div></Space>);
    expect(container.querySelectorAll('.ty-space__item').length).toBe(2);
  });
});
