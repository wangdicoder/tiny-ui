import React from 'react';
import { render } from '@testing-library/react';
import AspectRatio from '../index';

describe('<AspectRatio />', () => {
  it('should match the snapshot', () => {
    const { asFragment } = render(<AspectRatio />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('should render children', () => {
    const { container } = render(<AspectRatio>children</AspectRatio>);
    expect(container.firstChild).toHaveStyle({ width: '100%' });
    expect(container).toContainHTML('children');
  });

  it('should render correct ratio container', () => {
    const { container } = render(<AspectRatio ratio={4 / 3} />);
    expect(container.querySelector('.ty-aspect-ratio__padding')).toHaveStyle({ paddingTop: '75%' });
  });

  it('should render correct width', () => {
    const { container } = render(<AspectRatio width={20} />);
    expect(container.firstChild).toHaveStyle({ width: '20px' });
  });
});
