import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Table from '../index';

const columns = [
  { title: 'Name', dataIndex: 'name', key: 'name' },
  { title: 'Age', dataIndex: 'age', key: 'age', sorter: (a: any, b: any) => a.age - b.age },
];

const dataSource = [
  { key: '1', name: 'Alice', age: 30 },
  { key: '2', name: 'Bob', age: 25 },
  { key: '3', name: 'Charlie', age: 35 },
];

describe('<Table />', () => {
  it('should match the snapshot', () => {
    const { asFragment } = render(<Table columns={columns} dataSource={dataSource} />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('should render correctly', () => {
    const { container } = render(<Table columns={columns} dataSource={dataSource} />);
    expect(container.firstChild).toHaveClass('ty-table');
  });

  it('should render data rows', () => {
    const { getByText } = render(<Table columns={columns} dataSource={dataSource} />);
    expect(getByText('Alice')).toBeInTheDocument();
    expect(getByText('Bob')).toBeInTheDocument();
  });

  it('should render column headers', () => {
    const { getByText } = render(<Table columns={columns} dataSource={dataSource} />);
    expect(getByText('Name')).toBeInTheDocument();
    expect(getByText('Age')).toBeInTheDocument();
  });

  it('should render bordered', () => {
    const { container } = render(<Table columns={columns} dataSource={dataSource} bordered />);
    expect(container.firstChild).toHaveClass('ty-table_bordered');
  });

  it('should show empty state', () => {
    const { getByText } = render(<Table columns={columns} dataSource={[]} />);
    expect(getByText('No Data')).toBeInTheDocument();
  });

  it('should sort on header click', () => {
    const { container, getAllByRole } = render(
      <Table columns={columns} dataSource={dataSource} pagination={false} />
    );
    const ageHeader = container.querySelector('.ty-table__cell_sortable');
    fireEvent.click(ageHeader!);
    const rows = container.querySelectorAll('.ty-table__tbody .ty-table__row');
    expect(rows[0].textContent).toContain('Bob');
  });

  it('should handle row selection', () => {
    const onChange = jest.fn();
    const { container } = render(
      <Table
        columns={columns}
        dataSource={dataSource}
        rowSelection={{ onChange }}
        pagination={false}
      />
    );
    const checkboxes = container.querySelectorAll('input[type="checkbox"]');
    // first is select all, second is first row
    fireEvent.click(checkboxes[1]);
    expect(onChange).toHaveBeenCalled();
  });

  it('should show loading state', () => {
    const { getByText } = render(<Table columns={columns} dataSource={dataSource} loading />);
    expect(getByText('Loading...')).toBeInTheDocument();
  });
});
