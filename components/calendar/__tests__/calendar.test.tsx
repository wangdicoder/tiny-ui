import React from 'react';
import { render } from '@testing-library/react';
import Calendar from '../index';

describe('<Calendar />', () => {
  it('should match the snapshot', () => {
    const { asFragment } = render(<Calendar />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('should render correctly', () => {
    const { container } = render(<Calendar />);
    expect(container.firstChild).toHaveClass('ty-calendar');
  });
});
