import React from 'react';
import { render } from '@testing-library/react';
import Loader from '../index';

describe('<Loader />', () => {
  it('should match the snapshot', () => {
    const { asFragment } = render(<Loader />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('should render correctly', () => {
    const { container } = render(<Loader />);
    expect(container.firstChild).toHaveClass('ty-loader');
  });

  it('should render with different sizes', () => {
    const { container: sm } = render(<Loader size="sm" />);
    expect(sm.firstChild).toHaveClass('ty-loader_sm');

    const { container: lg } = render(<Loader size="lg" />);
    expect(lg.firstChild).toHaveClass('ty-loader_lg');
  });

  it('should render with tip', () => {
    const { getByText } = render(<Loader tip="Loading..." />);
    expect(getByText('Loading...')).toBeTruthy();
  });

  it('should wrap children', () => {
    const { getByText } = render(<Loader><div>Content</div></Loader>);
    expect(getByText('Content')).toBeTruthy();
  });
});
