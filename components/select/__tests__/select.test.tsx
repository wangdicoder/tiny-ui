import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Select from '../index';

describe('<Select />', () => {
  it('should match the snapshot', () => {
    const { asFragment } = render(
      <Select>
        <Select.Option value="a">A</Select.Option>
        <Select.Option value="b">B</Select.Option>
      </Select>
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it('should render correctly', () => {
    const { container } = render(
      <Select>
        <Select.Option value="a">A</Select.Option>
      </Select>
    );
    expect(container.firstChild).toHaveClass('ty-select');
  });

  it('should render disabled', () => {
    const { container } = render(
      <Select disabled>
        <Select.Option value="a">A</Select.Option>
      </Select>
    );
    expect(container.firstChild).toHaveClass('ty-select_disabled');
  });

  it('should render placeholder', () => {
    const { getByText } = render(
      <Select placeholder="Choose...">
        <Select.Option value="a">A</Select.Option>
      </Select>
    );
    expect(getByText('Choose...')).toBeInTheDocument();
  });

  it('should render different sizes', () => {
    const { container } = render(
      <Select size="sm">
        <Select.Option value="a">A</Select.Option>
      </Select>
    );
    expect(container.firstChild).toHaveClass('ty-select_sm');
  });
});
