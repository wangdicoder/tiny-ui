import React from 'react';
import { render } from '@testing-library/react';
import Countdown from '../index';

describe('<Countdown />', () => {
  it('should match the snapshot', () => {
    const futureDate = new Date(Date.now() + 100000);
    const { asFragment } = render(<Countdown deadline={futureDate} />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('should render correctly', () => {
    const futureDate = new Date(Date.now() + 100000);
    const { container } = render(<Countdown deadline={futureDate} />);
    expect(container.firstChild).toHaveClass('ty-countdown');
  });
});
