import { render, fireEvent } from '@testing-library/react';
import NativeSelect from '../index';

describe('<NativeSelect />', () => {
  it('should match the snapshot', () => {
    const { asFragment } = render(
      <NativeSelect>
        <NativeSelect.Option value="a">A</NativeSelect.Option>
      </NativeSelect>
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it('should render correctly', () => {
    const { container } = render(
      <NativeSelect>
        <NativeSelect.Option value="a">A</NativeSelect.Option>
      </NativeSelect>
    );
    expect(container.firstChild).toHaveClass('ty-select-native');
  });

  it('should render disabled', () => {
    const { container } = render(
      <NativeSelect disabled>
        <NativeSelect.Option value="a">A</NativeSelect.Option>
      </NativeSelect>
    );
    expect(container.firstChild).toHaveClass('ty-select-native_disabled');
  });

  it('should fire onChange', () => {
    const fn = jest.fn();
    const { container } = render(
      <NativeSelect onChange={fn}>
        <NativeSelect.Option value="a">A</NativeSelect.Option>
      </NativeSelect>
    );
    const select = container.querySelector('select')!;
    fireEvent.change(select, { target: { value: 'a' } });
    expect(fn).toHaveBeenCalled();
  });
});
