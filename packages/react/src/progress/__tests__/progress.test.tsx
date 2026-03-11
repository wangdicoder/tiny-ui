import React from 'react';
import { render } from '@testing-library/react';
import Progress from '../index';

describe('<Progress.Bar />', () => {
  it('should match the snapshot', () => {
    const { asFragment } = render(<Progress.Bar percent={50} />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('should render correctly', () => {
    const { container } = render(<Progress.Bar percent={50} />);
    expect(container.firstChild).toHaveClass('ty-progress-bar');
  });

  it('should render with percentage text', () => {
    const { getByText } = render(<Progress.Bar percent={75} showInfo />);
    expect(getByText('75%')).toBeInTheDocument();
  });
});

describe('<Progress.Circle />', () => {
  it('should match the snapshot', () => {
    const { asFragment } = render(<Progress.Circle percent={50} />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('should render correctly', () => {
    const { container } = render(<Progress.Circle percent={50} />);
    expect(container.firstChild).toHaveClass('ty-progress-circle');
  });

  it('should render SVG', () => {
    const { container } = render(<Progress.Circle percent={50} />);
    expect(container.querySelector('svg')).toBeTruthy();
  });
});
