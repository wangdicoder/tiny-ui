import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import SplitButton from '../index';

describe('<SplitButton />', () => {
  it('should match the snapshot', () => {
    const { asFragment } = render(<SplitButton overlay={<div>Menu</div>}>Action</SplitButton>);
    expect(asFragment()).toMatchSnapshot();
  });

  it('should render correctly', () => {
    const { container } = render(<SplitButton overlay={<div>Menu</div>}>Action</SplitButton>);
    expect(container.firstChild).toHaveClass('ty-split-btn');
  });

  it('should render button text', () => {
    const { getByText } = render(<SplitButton overlay={<div>Menu</div>}>Click</SplitButton>);
    expect(getByText('Click')).toBeTruthy();
  });

  it('should fire onClick', () => {
    const fn = jest.fn();
    const { getByText } = render(
      <SplitButton overlay={<div>Menu</div>} onClick={fn}>Action</SplitButton>
    );
    fireEvent.click(getByText('Action'));
    expect(fn).toHaveBeenCalledTimes(1);
  });
});
