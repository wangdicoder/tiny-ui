import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Segmented from '../index';

describe('<Segmented />', () => {
  it('should match the snapshot', () => {
    const { asFragment } = render(<Segmented options={['Daily', 'Weekly', 'Monthly']} />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('should render correctly', () => {
    const { container } = render(<Segmented options={['A', 'B', 'C']} />);
    expect(container.firstChild).toHaveClass('ty-segmented');
  });

  it('should render options', () => {
    const { getByText } = render(<Segmented options={['Foo', 'Bar']} />);
    expect(getByText('Foo')).toBeInTheDocument();
    expect(getByText('Bar')).toBeInTheDocument();
  });

  it('should select default value', () => {
    const { container } = render(
      <Segmented options={['A', 'B', 'C']} defaultValue="B" />
    );
    const active = container.querySelector('.ty-segmented__item_active');
    expect(active).toBeTruthy();
    expect(active!.textContent).toBe('B');
  });

  it('should handle onChange', () => {
    const onChange = jest.fn();
    const { getByText } = render(
      <Segmented options={['A', 'B']} onChange={onChange} />
    );
    fireEvent.click(getByText('B'));
    expect(onChange).toHaveBeenCalledWith('B');
  });

  it('should support object options', () => {
    const { getByText } = render(
      <Segmented
        options={[
          { label: 'Option A', value: 'a' },
          { label: 'Option B', value: 'b' },
        ]}
      />
    );
    expect(getByText('Option A')).toBeInTheDocument();
  });

  it('should support block mode', () => {
    const { container } = render(
      <Segmented options={['A', 'B']} block />
    );
    expect(container.firstChild).toHaveClass('ty-segmented_block');
  });

  it('should support disabled', () => {
    const onChange = jest.fn();
    const { getByText } = render(
      <Segmented options={['A', 'B']} disabled onChange={onChange} />
    );
    fireEvent.click(getByText('B'));
    expect(onChange).not.toHaveBeenCalled();
  });
});
