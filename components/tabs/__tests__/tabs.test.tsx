import { render, fireEvent } from '@testing-library/react';
import Tabs from '../index';

const items = [
  { key: '1', label: 'Tab 1', children: 'Content 1' },
  { key: '2', label: 'Tab 2', children: 'Content 2' },
  { key: '3', label: 'Tab 3', children: 'Content 3' },
];

describe('<Tabs /> items API', () => {
  it('should match the snapshot', () => {
    const { asFragment } = render(<Tabs defaultActiveKey="1" items={items} />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('should render correctly', () => {
    const { container } = render(<Tabs defaultActiveKey="1" items={items} />);
    expect(container.firstChild).toHaveClass('ty-tabs');
  });

  it('should render tab headers', () => {
    const { getByText } = render(<Tabs defaultActiveKey="1" items={items} />);
    expect(getByText('Tab 1')).toBeInTheDocument();
    expect(getByText('Tab 2')).toBeInTheDocument();
    expect(getByText('Tab 3')).toBeInTheDocument();
  });

  it('should render active tab content', () => {
    const { getByText } = render(<Tabs defaultActiveKey="1" items={items} />);
    expect(getByText('Content 1')).toBeInTheDocument();
  });

  it('should switch tabs on click', () => {
    const fn = jest.fn();
    const { getByText } = render(<Tabs defaultActiveKey="1" items={items} onChange={fn} />);
    fireEvent.click(getByText('Tab 2'));
    expect(fn).toHaveBeenCalledWith('2');
  });

  it('should not switch to disabled tab', () => {
    const fn = jest.fn();
    const disabledItems = [
      { key: '1', label: 'Tab 1', children: 'Content 1' },
      { key: '2', label: 'Tab 2', children: 'Content 2', disabled: true },
    ];
    const { getByText } = render(<Tabs defaultActiveKey="1" items={disabledItems} onChange={fn} />);
    fireEvent.click(getByText('Tab 2'));
    expect(fn).not.toHaveBeenCalled();
  });

  it('should render card type', () => {
    const { container } = render(<Tabs type="card" defaultActiveKey="1" items={items} />);
    expect(container.firstChild).toHaveClass('ty-tabs_card');
  });

  it('should fire onTabClick', () => {
    const fn = jest.fn();
    const { getByText } = render(<Tabs defaultActiveKey="1" items={items} onTabClick={fn} />);
    fireEvent.click(getByText('Tab 2'));
    expect(fn).toHaveBeenCalledWith('2', expect.anything());
  });

  it('should render editable-card with add button', () => {
    const { container } = render(
      <Tabs type="editable-card" defaultActiveKey="1" items={items} />
    );
    expect(container.querySelector('.ty-tabs__nav-add')).toBeInTheDocument();
  });

  it('should render close buttons on editable-card tabs', () => {
    const { container } = render(
      <Tabs type="editable-card" defaultActiveKey="1" items={items} />
    );
    expect(container.querySelectorAll('.ty-tabs__tab-remove').length).toBe(3);
  });

  it('should call onEdit with remove action', () => {
    const fn = jest.fn();
    const { container } = render(
      <Tabs type="editable-card" defaultActiveKey="1" items={items} onEdit={fn} />
    );
    const removeButtons = container.querySelectorAll('.ty-tabs__tab-remove');
    fireEvent.click(removeButtons[0]);
    expect(fn).toHaveBeenCalledWith('1', 'remove');
  });

  it('should render tab positions', () => {
    const { container: left } = render(
      <Tabs tabPosition="left" defaultActiveKey="1" items={items} />
    );
    expect(left.firstChild).toHaveClass('ty-tabs_left');

    const { container: bottom } = render(
      <Tabs tabPosition="bottom" defaultActiveKey="1" items={items} />
    );
    expect(bottom.firstChild).toHaveClass('ty-tabs_bottom');
  });

  it('should render centered', () => {
    const { container } = render(
      <Tabs centered defaultActiveKey="1" items={items} />
    );
    expect(container.firstChild).toHaveClass('ty-tabs_centered');
  });
});

describe('<Tabs /> children API (legacy)', () => {
  it('should render with Tabs.Panel children', () => {
    const { getByText } = render(
      <Tabs>
        <Tabs.Panel tab="Panel A">Content A</Tabs.Panel>
        <Tabs.Panel tab="Panel B">Content B</Tabs.Panel>
      </Tabs>
    );
    expect(getByText('Panel A')).toBeInTheDocument();
    expect(getByText('Panel B')).toBeInTheDocument();
  });

  it('should switch tabs with children API', () => {
    const fn = jest.fn();
    const { getByText } = render(
      <Tabs onChange={fn}>
        <Tabs.Panel tab="Tab 1">Content 1</Tabs.Panel>
        <Tabs.Panel tab="Tab 2">Content 2</Tabs.Panel>
      </Tabs>
    );
    fireEvent.click(getByText('Tab 2'));
    expect(fn).toHaveBeenCalledWith('1');
  });
});
