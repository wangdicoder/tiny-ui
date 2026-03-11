import React from 'react';
import { render } from '@testing-library/react';
import Icon from '../index';

describe('<Icon />', () => {
  it('should match the snapshot', () => {
    const { asFragment } = render(<Icon name="wifi" />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('should render correctly', () => {
    const { container } = render(<Icon name="wifi" />);
    expect(container.firstChild).toHaveClass('ty-icon');
  });

  it('should render with spin', () => {
    const { container } = render(<Icon name="loading" spin />);
    expect(container.firstChild).toHaveClass('ty-icon_spin');
  });

  it('should apply custom color', () => {
    const { container } = render(<Icon name="wifi" color="red" />);
    expect(container.firstChild).toHaveStyle({ color: 'red' });
  });

  it('should apply custom size', () => {
    const { container } = render(<Icon name="wifi" size={24} />);
    expect(container.firstChild).toHaveStyle({ fontSize: 24 });
  });
});
