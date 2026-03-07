import React from 'react';
import { render } from '@testing-library/react';
import ScrollIndicator from '../index';

describe('<ScrollIndicator />', () => {
  it('should match the snapshot', () => {
    const { asFragment } = render(<ScrollIndicator />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('should render correctly', () => {
    const { container } = render(<ScrollIndicator />);
    expect(container.firstChild).toHaveClass('ty-scroll-indicator');
  });
});
