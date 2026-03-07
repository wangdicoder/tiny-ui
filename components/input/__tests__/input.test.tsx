import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Input from '../index';

describe('<Input />', () => {
  it('should match the snapshot', () => {
    const { asFragment } = render(<Input />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('should render correctly', () => {
    const { container } = render(<Input />);
    expect(container.firstChild).toHaveClass('ty-input');
  });

  it('should render different sizes', () => {
    const { container: sm } = render(<Input size="sm" />);
    expect(sm.firstChild).toHaveClass('ty-input_sm');

    const { container: lg } = render(<Input size="lg" />);
    expect(lg.firstChild).toHaveClass('ty-input_lg');
  });

  it('should render disabled', () => {
    const { container } = render(<Input disabled />);
    expect(container.querySelector('input')).toBeDisabled();
  });

  it('should fire onChange', () => {
    const fn = jest.fn();
    const { container } = render(<Input onChange={fn} />);
    const input = container.querySelector('input')!;
    fireEvent.change(input, { target: { value: 'test' } });
    expect(fn).toHaveBeenCalledTimes(1);
  });

  it('should render prefix and suffix', () => {
    const { getByText } = render(<Input prefix={<span>$</span>} suffix={<span>.00</span>} />);
    expect(getByText('$')).toBeInTheDocument();
    expect(getByText('.00')).toBeInTheDocument();
  });

  it('should render clearable button', () => {
    const { container } = render(<Input clearable defaultValue="test" />);
    expect(container.querySelector('.ty-input__clear-btn')).toBeTruthy();
  });
});
