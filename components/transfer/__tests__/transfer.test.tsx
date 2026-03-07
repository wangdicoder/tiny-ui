import React from 'react';
import { render } from '@testing-library/react';
import Transfer from '../index';

describe('<Transfer />', () => {
  const dataSource = [
    { key: '1', title: 'Item 1' },
    { key: '2', title: 'Item 2' },
    { key: '3', title: 'Item 3' },
  ];

  it('should match the snapshot', () => {
    const { asFragment } = render(<Transfer dataSource={dataSource} />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('should render correctly', () => {
    const { container } = render(<Transfer dataSource={dataSource} />);
    expect(container.firstChild).toHaveClass('ty-transfer');
  });

  it('should render two panels', () => {
    const { container } = render(<Transfer dataSource={dataSource} />);
    expect(container.querySelectorAll('.ty-transfer__panel').length).toBe(2);
  });
});
