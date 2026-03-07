import React from 'react';
import { render } from '@testing-library/react';
import Keyboard from '../index';

describe('<Keyboard />', () => {
  it('should match the snapshot', () => {
    const { asFragment } = render(<Keyboard>Ctrl</Keyboard>);
    expect(asFragment()).toMatchSnapshot();
  });

  it('should render correctly', () => {
    const { container } = render(<Keyboard>Ctrl</Keyboard>);
    expect(container.querySelector('kbd')).toBeTruthy();
  });

  it('should render children', () => {
    const { getByText } = render(<Keyboard>Enter</Keyboard>);
    expect(getByText('Enter')).toBeInTheDocument();
  });

  it('should have correct class', () => {
    const { container } = render(<Keyboard>A</Keyboard>);
    expect(container.firstChild).toHaveClass('ty-kbd');
  });
});
