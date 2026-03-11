import React from 'react';
import { render } from '@testing-library/react';
import Image from '../index';

describe('<Image />', () => {
  it('should match the snapshot', () => {
    const { asFragment } = render(<Image src="test.jpg" />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('should render correctly', () => {
    const { container } = render(<Image src="test.jpg" />);
    expect(container.querySelector('img')).toBeTruthy();
  });

  it('should render with round style', () => {
    const { container } = render(<Image src="test.jpg" round />);
    expect(container.firstChild).toHaveClass('ty-image_round');
  });

  it('should render with alt text', () => {
    const { container } = render(<Image src="test.jpg" alt="photo" />);
    expect(container.querySelector('img')?.getAttribute('alt')).toBe('photo');
  });

  it('should apply object-fit style', () => {
    const { container } = render(<Image src="test.jpg" objectFit="contain" />);
    expect(container.querySelector('img')).toHaveStyle({ objectFit: 'contain' });
  });
});
