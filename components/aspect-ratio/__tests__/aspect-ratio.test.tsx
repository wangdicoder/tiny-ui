import React from 'react';
import { render } from '@testing-library/react';
import AspectRatio from '../index';

describe('<AspectRatio />', () => {
  it('should match the snapshot', () => {
    const { asFragment } = render(<AspectRatio />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('should render children', () => {
    const wrapper = render(<AspectRatio>children</AspectRatio>);
    expect(wrapper.getByText('children')).toBeInTheDocument();
  });

  it('should render correct ratio container', () => {
    // const wrapper = render(<AspectRatio ratio={4 / 3} width={40} />);
  });

  it('should render correct width', () => {
    // const wrapper = render(<AspectRatio width={20} />);
  });
});
