import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Rate from '../index';

describe('<Rate />', () => {
  it('should match the snapshot', () => {
    const { asFragment } = render(<Rate />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('should render correctly', () => {
    const { container } = render(<Rate />);
    expect(container.firstChild).toHaveClass('ty-rate');
  });

  it('should render 5 stars by default', () => {
    const { container } = render(<Rate />);
    expect(container.querySelectorAll('.ty-rate__item').length).toBe(5);
  });

  it('should render custom count', () => {
    const { container } = render(<Rate count={3} />);
    expect(container.querySelectorAll('.ty-rate__item').length).toBe(3);
  });

  it('should render disabled', () => {
    const { container } = render(<Rate disabled />);
    expect(container.firstChild).toHaveClass('ty-rate_disabled');
  });

  it('should fire onChange on click', () => {
    const fn = jest.fn();
    const { container } = render(<Rate onChange={fn} />);
    const items = container.querySelectorAll('.ty-rate__item');
    items[2] && fireEvent.click(items[2]);
    expect(fn).toHaveBeenCalled();
  });
});
