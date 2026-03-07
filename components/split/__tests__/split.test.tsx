import React from 'react';
import { render } from '@testing-library/react';
import Split from '../index';

describe('<Split />', () => {
  it('should match the snapshot', () => {
    const { asFragment } = render(<Split>Content</Split>);
    expect(asFragment()).toMatchSnapshot();
  });

  it('should render correctly', () => {
    const { container } = render(<Split>Content</Split>);
    expect(container.firstChild).toHaveClass('ty-split');
  });
});
