import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Switch from '../index';

describe('<Switch />', () => {
  it('should match the snapshot', () => {
    const { asFragment } = render(<Switch />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('should render correctly', () => {
    const { container } = render(<Switch />);
    expect(container.firstChild).toHaveClass('ty-switch');
  });

  it('should render different sizes', () => {
    const { container: sm } = render(<Switch size="sm" />);
    expect(sm.firstChild).toHaveClass('ty-switch_sm');
  });

  it('should render disabled', () => {
    const { container } = render(<Switch disabled />);
    expect(container.firstChild).toHaveClass('ty-switch_disabled');
  });

  it('should fire onChange on click', () => {
    const fn = jest.fn();
    const { container } = render(<Switch onChange={fn} />);
    container.firstChild && fireEvent.click(container.firstChild);
    expect(fn).toHaveBeenCalledTimes(1);
  });

  it('should render checked/unchecked text', () => {
    const { getByText } = render(<Switch checkedText="ON" uncheckedText="OFF" defaultChecked={false} />);
    expect(getByText('OFF')).toBeTruthy();
  });

  it('should render loading state', () => {
    const { container } = render(<Switch loading />);
    expect(container.firstChild).toHaveClass('ty-switch_disabled');
  });
});
