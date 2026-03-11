import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import InputPassword from '../index';

describe('<InputPassword />', () => {
  it('should match the snapshot', () => {
    const { asFragment } = render(<InputPassword />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('should render correctly', () => {
    const { container } = render(<InputPassword />);
    expect(container.firstChild).toHaveClass('ty-input');
  });

  it('should render password type by default', () => {
    const { container } = render(<InputPassword />);
    expect(container.querySelector('input')?.getAttribute('type')).toBe('password');
  });

  it('should toggle visibility', () => {
    const { container } = render(<InputPassword />);
    const toggleBtn = container.querySelector('.ty-input-password__toggle');
    if (toggleBtn) {
      fireEvent.click(toggleBtn);
      expect(container.querySelector('input')?.getAttribute('type')).toBe('text');
    }
  });
});
