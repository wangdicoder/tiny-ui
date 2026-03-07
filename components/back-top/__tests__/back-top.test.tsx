import React from 'react';
import { render } from '@testing-library/react';
import BackTop from '../index';

describe('<BackTop />', () => {
  it('should match the snapshot', () => {
    const { asFragment } = render(<BackTop />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('should render correctly', () => {
    const { container } = render(<BackTop />);
    expect(container.firstChild).toBeTruthy();
  });
});
