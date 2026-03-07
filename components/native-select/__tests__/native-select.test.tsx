import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import NativeSelect from '../index';

describe('<NativeSelect />', () => {
  it('should match the snapshot', () => {
    const { asFragment } = render(
      <NativeSelect>
        <option value="a">A</option>
        <option value="b">B</option>
      </NativeSelect>
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it('should render correctly', () => {
    const { container } = render(
      <NativeSelect>
        <option value="a">A</option>
      </NativeSelect>
    );
    expect(container.firstChild).toHaveClass('ty-native-select');
  });

  it('should render disabled', () => {
    const { container } = render(
      <NativeSelect disabled>
        <option value="a">A</option>
      </NativeSelect>
    );
    expect(container.querySelector('select')).toBeDisabled();
  });

  it('should fire onChange', () => {
    const fn = jest.fn();
    const { container } = render(
      <NativeSelect onChange={fn}>
        <option value="a">A</option>
        <option value="b">B</option>
      </NativeSelect>
    );
    const select = container.querySelector('select')!;
    fireEvent.change(select, { target: { value: 'b' } });
    expect(fn).toHaveBeenCalled();
  });
});
