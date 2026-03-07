import React from 'react';
import { render } from '@testing-library/react';
import Card from '../index';

describe('<Card />', () => {
  it('should match the snapshot', () => {
    const { asFragment } = render(<Card>Content</Card>);
    expect(asFragment()).toMatchSnapshot();
  });

  it('should render correctly', () => {
    const { container } = render(<Card>Content</Card>);
    expect(container.firstChild).toHaveClass('ty-card');
  });

  it('should render bordered by default', () => {
    const { container } = render(<Card>Content</Card>);
    expect(container.firstChild).toHaveClass('ty-card_bordered');
  });

  it('should render hoverable', () => {
    const { container } = render(<Card hoverable>Content</Card>);
    expect(container.firstChild).toHaveClass('ty-card_hoverable');
  });

  it('should render title', () => {
    const { getByText } = render(<Card title="Title">Content</Card>);
    expect(getByText('Title')).toBeTruthy();
  });

  it('should render extra content', () => {
    const { getByText } = render(<Card title="Title" extra={<span>More</span>}>Content</Card>);
    expect(getByText('More')).toBeTruthy();
  });

  it('should render footer', () => {
    const { getByText } = render(<Card footer={<div>Footer</div>}>Content</Card>);
    expect(getByText('Footer')).toBeTruthy();
  });
});
