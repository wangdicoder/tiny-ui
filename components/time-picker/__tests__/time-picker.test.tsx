import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import TimePicker from '../index';

describe('<TimePicker />', () => {
  it('should match the snapshot', () => {
    const { asFragment } = render(<TimePicker defaultValue={new Date(2024, 0, 1, 10, 30, 0)} />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('should render correctly', () => {
    const { container } = render(<TimePicker />);
    expect(container.firstChild).toHaveClass('ty-time-picker');
  });

  it('should render input', () => {
    const { container } = render(<TimePicker />);
    expect(container.querySelector('input')).toBeTruthy();
  });

  it('should render disabled', () => {
    const { container } = render(<TimePicker disabled />);
    expect(container.firstChild).toHaveClass('ty-time-picker_disabled');
    expect(container.querySelector('input')).toBeDisabled();
  });

  it('should render placeholder', () => {
    const { container } = render(<TimePicker placeholder="Choose time" />);
    expect(container.querySelector('input')?.getAttribute('placeholder')).toBe('Choose time');
  });

  it('should open dropdown on click', () => {
    const { container } = render(<TimePicker />);
    const inputWrapper = container.querySelector('.ty-time-picker__input-wrapper');
    inputWrapper && fireEvent.click(inputWrapper);
    expect(container.querySelector('.ty-time-picker__dropdown')).toBeTruthy();
  });

  it('should render formatted time', () => {
    const date = new Date(2024, 0, 1, 14, 30, 45);
    const { container } = render(<TimePicker defaultValue={date} />);
    expect(container.querySelector('input')?.value).toBe('14:30:45');
  });
});
