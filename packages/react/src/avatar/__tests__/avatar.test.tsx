import React from 'react';
import { render } from '@testing-library/react';
import Avatar from '../index';

describe('<Avatar />', () => {
  it('should match the snapshot', () => {
    const { asFragment } = render(<Avatar>A</Avatar>);
    expect(asFragment()).toMatchSnapshot();
  });

  it('should render correctly', () => {
    const { container } = render(<Avatar>A</Avatar>);
    expect(container.firstChild).toHaveClass('ty-avatar');
  });

  it('should render circle shape by default', () => {
    const { container } = render(<Avatar>A</Avatar>);
    expect(container.firstChild).toHaveClass('ty-avatar_circle');
  });

  it('should render square shape', () => {
    const { container } = render(<Avatar shape="square">A</Avatar>);
    expect(container.firstChild).toHaveClass('ty-avatar_square');
  });

  it('should render with image', () => {
    const { container } = render(<Avatar src="test.jpg" />);
    expect(container.querySelector('img')).toBeTruthy();
  });

  it('should render text content', () => {
    const { getByText } = render(<Avatar>AB</Avatar>);
    expect(getByText('AB')).toBeInTheDocument();
  });

  it('should render with custom size', () => {
    const { container } = render(<Avatar size={50}>A</Avatar>);
    expect(container.firstChild).toHaveStyle({ width: '50px', height: '50px' });
  });
});
