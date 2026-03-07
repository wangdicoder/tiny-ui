import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import DatePicker from '../index';

describe('<DatePicker />', () => {
  it('should match the snapshot', () => {
    const { asFragment } = render(<DatePicker defaultValue={new Date(2024, 0, 15)} />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('should render correctly', () => {
    const { container } = render(<DatePicker />);
    expect(container.firstChild).toHaveClass('ty-date-picker');
  });

  it('should render input', () => {
    const { container } = render(<DatePicker />);
    expect(container.querySelector('input')).toBeTruthy();
  });

  it('should render disabled', () => {
    const { container } = render(<DatePicker disabled />);
    expect(container.firstChild).toHaveClass('ty-date-picker_disabled');
    expect(container.querySelector('input')).toBeDisabled();
  });

  it('should render placeholder', () => {
    const { container } = render(<DatePicker placeholder="Pick a date" />);
    expect(container.querySelector('input')?.getAttribute('placeholder')).toBe('Pick a date');
  });

  it('should open dropdown on click', () => {
    const { container } = render(<DatePicker />);
    const inputWrapper = container.querySelector('.ty-date-picker__input-wrapper');
    inputWrapper && fireEvent.click(inputWrapper);
    expect(container.querySelector('.ty-date-picker__dropdown')).toBeTruthy();
  });

  it('should render formatted value', () => {
    const date = new Date(2024, 0, 15);
    const { container } = render(<DatePicker defaultValue={date} />);
    expect(container.querySelector('input')?.value).toBe('2024-01-15');
  });
});
