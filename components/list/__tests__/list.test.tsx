import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import List from '../index';

const data = ['Item 1', 'Item 2', 'Item 3'];

describe('<List />', () => {
  it('should match the snapshot', () => {
    const { asFragment } = render(
      <List dataSource={data} renderItem={(item) => <List.Item>{item}</List.Item>} />
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it('should render correctly', () => {
    const { container } = render(
      <List dataSource={data} renderItem={(item) => <List.Item>{item}</List.Item>} />
    );
    expect(container.firstChild).toHaveClass('ty-list');
  });

  it('should render items', () => {
    const { getByText } = render(
      <List dataSource={data} renderItem={(item) => <List.Item>{item}</List.Item>} />
    );
    expect(getByText('Item 1')).toBeInTheDocument();
    expect(getByText('Item 2')).toBeInTheDocument();
  });

  it('should render header and footer', () => {
    const { getByText } = render(
      <List header="Header" footer="Footer" dataSource={data} renderItem={(item) => <List.Item>{item}</List.Item>} />
    );
    expect(getByText('Header')).toBeInTheDocument();
    expect(getByText('Footer')).toBeInTheDocument();
  });

  it('should render bordered', () => {
    const { container } = render(
      <List bordered dataSource={data} renderItem={(item) => <List.Item>{item}</List.Item>} />
    );
    expect(container.firstChild).toHaveClass('ty-list_bordered');
  });

  it('should show empty state', () => {
    const { getByText } = render(<List dataSource={[]} renderItem={() => null} />);
    expect(getByText('No Data')).toBeInTheDocument();
  });

  it('should render loading state', () => {
    const { getByText } = render(
      <List loading dataSource={data} renderItem={(item) => <List.Item>{item}</List.Item>} />
    );
    expect(getByText('Loading...')).toBeInTheDocument();
  });
});

describe('<List.Item />', () => {
  it('should render actions', () => {
    const { getByText } = render(
      <List.Item actions={[<a key="edit">Edit</a>, <a key="delete">Delete</a>]}>
        Content
      </List.Item>
    );
    expect(getByText('Edit')).toBeInTheDocument();
    expect(getByText('Delete')).toBeInTheDocument();
  });
});

describe('<List.ItemMeta />', () => {
  it('should render meta', () => {
    const { getByText } = render(
      <List.ItemMeta title="Title" description="Description" />
    );
    expect(getByText('Title')).toBeInTheDocument();
    expect(getByText('Description')).toBeInTheDocument();
  });
});
