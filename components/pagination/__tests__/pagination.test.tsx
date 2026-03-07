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

  it('should fire onChange', () => {
    const fn = jest.fn();
    const { container } = render(<Pagination total={100} onChange={fn} />);
    const items = container.querySelectorAll('.ty-pagination__item');
    if (items.length > 1) {
      fireEvent.click(items[1]);
      expect(fn).toHaveBeenCalled();
    }
  });
});
