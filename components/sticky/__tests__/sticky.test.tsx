import React from 'react';
import { render } from '@testing-library/react';
import Sticky from '../index';

describe('<Sticky />', () => {
  it('should match the snapshot', () => {
    const { asFragment } = render(<Sticky><div>Sticky Content</div></Sticky>);
    expect(asFragment()).toMatchSnapshot();
  });

  it('should render correctly', () => {
    const { container } = render(<Sticky><div>Sticky</div></Sticky>);
    expect(container.firstChild).toHaveClass('ty-sticky');
  });

  it('should render children', () => {
    const { getByText } = render(<Sticky><div>Content</div></Sticky>);
    expect(getByText('Content')).toBeInTheDocument();
  });
});
