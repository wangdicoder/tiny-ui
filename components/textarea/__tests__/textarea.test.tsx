import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Textarea from '../index';

describe('<Textarea />', () => {
  it('should match the snapshot', () => {
    const { asFragment } = render(<Textarea />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('should render correctly', () => {
    const { container } = render(<Textarea />);
    expect(container.querySelector('textarea')).toBeTruthy();
  });

  it('should render disabled', () => {
    const { container } = render(<Textarea disabled />);
    expect(container.querySelector('textarea')).toBeDisabled();
  });

  it('should fire onChange', () => {
    const fn = jest.fn();
    const { container } = render(<Textarea onChange={fn} />);
    const textarea = container.querySelector('textarea')!;
    fireEvent.change(textarea, { target: { value: 'test' } });
    expect(fn).toHaveBeenCalledTimes(1);
  });

  it('should render placeholder', () => {
    const { container } = render(<Textarea placeholder="Enter text..." />);
    expect(container.querySelector('textarea')?.getAttribute('placeholder')).toBe('Enter text...');
  });
});
