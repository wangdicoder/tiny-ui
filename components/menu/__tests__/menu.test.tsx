import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Menu from '../index';

describe('<Menu />', () => {
  it('should match the snapshot', () => {
    const { asFragment } = render(
      <Menu>
        <Menu.Item>Item 1</Menu.Item>
        <Menu.Item>Item 2</Menu.Item>
      </Menu>
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it('should render correctly', () => {
    const { container } = render(
      <Menu>
        <Menu.Item>Item 1</Menu.Item>
      </Menu>
    );
    expect(container.firstChild).toHaveClass('ty-menu');
  });

  it('should render items', () => {
    const { getByText } = render(
      <Menu>
        <Menu.Item>Item 1</Menu.Item>
        <Menu.Item>Item 2</Menu.Item>
      </Menu>
    );
    expect(getByText('Item 1')).toBeInTheDocument();
    expect(getByText('Item 2')).toBeInTheDocument();
  });

  it('should render horizontal mode', () => {
    const { container } = render(
      <Menu mode="horizontal">
        <Menu.Item>Item</Menu.Item>
      </Menu>
    );
    expect(container.firstChild).toHaveClass('ty-menu_horizontal');
  });
});
