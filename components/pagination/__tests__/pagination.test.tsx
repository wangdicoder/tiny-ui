import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Pagination from '../index';

describe('<Pagination />', () => {
  it('should match the snapshot', () => {
    const { asFragment } = render(<Pagination total={100} />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('should render correctly', () => {
    const { container } = render(<Pagination total={100} />);
    expect(container.firstChild).toHaveClass('ty-pagination');
  });

  it('should render page items', () => {
    const { container } = render(<Pagination total={100} pageSize={10} />);
    expect(container.querySelectorAll('.ty-pagination__item').length).toBeGreaterThan(0);
  });

  it('should render multiple pages', () => {
    const { container } = render(<Pagination total={100} pageSize={10} />);
    expect(container.querySelectorAll('.ty-pagination__item').length).toBeGreaterThan(1);
  });
});
