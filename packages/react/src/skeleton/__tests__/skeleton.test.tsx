import React from 'react';
import { render } from '@testing-library/react';
import Skeleton from '../index';

describe('<Skeleton />', () => {
  it('should match the snapshot', () => {
    const { asFragment } = render(<Skeleton />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('should render correctly', () => {
    const { container } = render(<Skeleton />);
    expect(container.firstChild).toHaveClass('ty-skeleton');
  });

  it('should render with active animation', () => {
    const { container } = render(<Skeleton active />);
    expect(container.firstChild).toHaveClass('ty-skeleton_active');
  });

  it('should render rounded', () => {
    const { container } = render(<Skeleton rounded />);
    expect(container.firstChild).toHaveClass('ty-skeleton_rounded');
  });

  it('should render children', () => {
    const { getByText } = render(<Skeleton>Loading content</Skeleton>);
    expect(getByText('Loading content')).toBeInTheDocument();
  });
});
