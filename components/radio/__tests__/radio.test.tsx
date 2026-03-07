import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Radio from '../index';

describe('<Radio />', () => {
  it('should match the snapshot', () => {
    const { asFragment } = render(<Radio>Option</Radio>);
    expect(asFragment()).toMatchSnapshot();
  });

  it('should render correctly', () => {
    const { container } = render(<Radio>Option</Radio>);
    expect(container.firstChild).toHaveClass('ty-radio');
  });

  it('should render label', () => {
    const { getByText } = render(<Radio>Label</Radio>);
    expect(getByText('Label')).toBeTruthy();
  });

  it('should render disabled', () => {
    const { container } = render(<Radio disabled>Disabled</Radio>);
    expect(container.firstChild).toHaveClass('ty-radio_disabled');
  });

  it('should fire onChange', () => {
    const fn = jest.fn();
    const { container } = render(<Radio onChange={fn}>Radio</Radio>);
    const input = container.querySelector('input')!;
    fireEvent.click(input);
    expect(fn).toHaveBeenCalledTimes(1);
  });
});

describe('<Radio.Group />', () => {
  it('should render group', () => {
    const { container } = render(
      <Radio.Group>
        <Radio value="a">A</Radio>
        <Radio value="b">B</Radio>
      </Radio.Group>
    );
    expect(container.firstChild).toHaveClass('ty-radio-group');
  });

  it('should fire group onChange', () => {
    const fn = jest.fn();
    const { getAllByRole } = render(
      <Radio.Group onChange={fn}>
        <Radio value="a">A</Radio>
        <Radio value="b">B</Radio>
      </Radio.Group>
    );
    fireEvent.click(getAllByRole('radio')[1]);
    expect(fn).toHaveBeenCalled();
  });
});
