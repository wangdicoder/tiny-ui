import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Tabs from '../index';

describe('<Tabs />', () => {
  it('should match the snapshot', () => {
    const { asFragment } = render(
      <Tabs>
        <Tabs.Panel tab="Tab 1">Content 1</Tabs.Panel>
        <Tabs.Panel tab="Tab 2">Content 2</Tabs.Panel>
      </Tabs>
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it('should render correctly', () => {
    const { container } = render(
      <Tabs>
        <Tabs.Panel tab="Tab 1">Content 1</Tabs.Panel>
      </Tabs>
    );
    expect(container.firstChild).toHaveClass('ty-tabs');
  });

  it('should render tab headers', () => {
    const { getByText } = render(
      <Tabs>
        <Tabs.Panel tab="Tab A">Content A</Tabs.Panel>
        <Tabs.Panel tab="Tab B">Content B</Tabs.Panel>
      </Tabs>
    );
    expect(getByText('Tab A')).toBeInTheDocument();
    expect(getByText('Tab B')).toBeInTheDocument();
  });

  it('should switch tabs on click', () => {
    const fn = jest.fn();
    const { getByText } = render(
      <Tabs onChange={fn}>
        <Tabs.Panel tab="Tab 1">Content 1</Tabs.Panel>
        <Tabs.Panel tab="Tab 2">Content 2</Tabs.Panel>
      </Tabs>
    );
    fireEvent.click(getByText('Tab 2'));
    expect(fn).toHaveBeenCalledWith(1);
  });

  it('should not switch to disabled tab', () => {
    const fn = jest.fn();
    const { getByText } = render(
      <Tabs onChange={fn}>
        <Tabs.Panel tab="Tab 1">Content 1</Tabs.Panel>
        <Tabs.Panel tab="Tab 2" disabled>Content 2</Tabs.Panel>
      </Tabs>
    );
    fireEvent.click(getByText('Tab 2'));
    expect(fn).not.toHaveBeenCalled();
  });

  it('should render card type', () => {
    const { container } = render(
      <Tabs type="card">
        <Tabs.Panel tab="Tab 1">Content 1</Tabs.Panel>
      </Tabs>
    );
    expect(container.firstChild).toHaveClass('ty-tabs_card');
  });
});
