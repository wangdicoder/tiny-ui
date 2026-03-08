import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Calendar from '../index';

describe('<Calendar />', () => {
  it('should match the snapshot', () => {
    const { asFragment } = render(<Calendar value={new Date(2024, 0, 15)} />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('should render correctly', () => {
    const { container } = render(<Calendar />);
    expect(container.firstChild).toHaveClass('ty-calendar');
  });

  it('should render fullscreen by default', () => {
    const { container } = render(<Calendar />);
    expect(container.firstChild).toHaveClass('ty-calendar_fullscreen');
  });

  it('should render as card', () => {
    const { container } = render(<Calendar fullscreen={false} />);
    expect(container.firstChild).toHaveClass('ty-calendar_card');
  });

  it('should render week headers', () => {
    const { getByText } = render(<Calendar />);
    expect(getByText('Su')).toBeInTheDocument();
    expect(getByText('Mo')).toBeInTheDocument();
  });

  it('should call onChange when date selected', () => {
    const onChange = jest.fn();
    const { container } = render(<Calendar value={new Date(2024, 0, 15)} onChange={onChange} />);
    const cells = container.querySelectorAll('.ty-calendar__cell_in-view');
    if (cells.length > 0) {
      fireEvent.click(cells[0]);
      expect(onChange).toHaveBeenCalled();
    }
  });

  it('should switch to year mode', () => {
    const { container, getByText } = render(<Calendar value={new Date(2024, 0, 15)} />);
    const titleBtn = container.querySelector('.ty-calendar__title-btn');
    fireEvent.click(titleBtn!);
    // Should show months
    expect(container.querySelector('.ty-calendar__months')).toBeTruthy();
  });
});
