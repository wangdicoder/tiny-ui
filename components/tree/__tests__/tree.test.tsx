import React from 'react';
import { render } from '@testing-library/react';
import Tree from '../index';

describe('<Tree />', () => {
  const treeData = [
    {
      key: '1',
      title: 'Node 1',
      children: [
        { key: '1-1', title: 'Node 1-1' },
        { key: '1-2', title: 'Node 1-2' },
      ],
    },
    { key: '2', title: 'Node 2' },
  ];

  it('should match the snapshot', () => {
    const { asFragment } = render(<Tree data={treeData} />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('should render correctly', () => {
    const { container } = render(<Tree data={treeData} />);
    expect(container.firstChild).toHaveClass('ty-tree');
  });

  it('should render tree nodes', () => {
    const { getByText } = render(<Tree data={treeData} />);
    expect(getByText('Node 1')).toBeTruthy();
    expect(getByText('Node 2')).toBeTruthy();
  });
});
