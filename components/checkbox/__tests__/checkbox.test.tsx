import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Checkbox from '../index';

describe('<Checkbox />', () => {
  it('should match the snapshot', () => {
    const { asFragment } = render(<Checkbox>Check me</Checkbox>);
    expect(asFragment()).toMatchSnapshot();
  });

  it('should render correctly', () => {
    const { container } = render(<Checkbox>Check me</Checkbox>);
    expect(container.firstChild).toHaveClass('ty-checkbox');
  });

  it('should render label', () => {
    const { getByText } = render(<Checkbox>Label</Checkbox>);
    expect(getByText('Label')).toBeTruthy();
  });

  it('should render disabled', () => {
    const { container } = render(<Checkbox disabled>Disabled</Checkbox>);
    expect(container.firstChild).toHaveClass('ty-checkbox_disabled');
  });

  it('should fire onChange', () => {
    const fn = jest.fn();
    const { container } = render(<Checkbox onChange={fn}>Check</Checkbox>);
    const input = container.querySelector('input')!;
    fireEvent.click(input);
    expect(fn).toHaveBeenCalledTimes(1);
  });

  it('should render indeterminate state', () => {
    const { container } = render(<Checkbox indeterminate>Partial</Checkbox>);
    expect(container.firstChild).toHaveClass('ty-checkbox_indeterminate');
  });
});

describe('<Checkbox.Group />', () => {
  it('should render group', () => {
    const { container } = render(
      <Checkbox.Group>
        <Checkbox value="a">A</Checkbox>
        <Checkbox value="b">B</Checkbox>
      </Checkbox.Group>
    );
    expect(container.firstChild).toHaveClass('ty-checkbox-group');
  });
});
