import React from 'react';
import { render } from '@testing-library/react';
import StrengthIndicator from '../index';

describe('<StrengthIndicator />', () => {
  it('should match the snapshot', () => {
    const { asFragment } = render(<StrengthIndicator value="" />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('should render correctly', () => {
    const { container } = render(<StrengthIndicator value="" />);
    expect(container.firstChild).toHaveClass('ty-strength-indicator');
  });
});
