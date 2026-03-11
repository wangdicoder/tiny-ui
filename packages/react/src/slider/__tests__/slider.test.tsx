import React from 'react';
import { render } from '@testing-library/react';
import Slider from '../index';

describe('<Slider />', () => {
  it('should match the snapshot', () => {
    const { asFragment } = render(<Slider />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('should render correctly', () => {
    const { container } = render(<Slider />);
    expect(container.firstChild).toHaveClass('ty-slider');
  });

  it('should render disabled', () => {
    const { container } = render(<Slider disabled />);
    expect(container.firstChild).toHaveClass('ty-slider_disabled');
  });

  it('should render with default value', () => {
    const { container } = render(<Slider defaultValue={50} />);
    expect(container.firstChild).toBeTruthy();
  });
});
