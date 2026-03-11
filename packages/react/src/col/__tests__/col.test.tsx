import React from 'react';
import { render } from '@testing-library/react';
import Col from '../index';

describe('<Col />', () => {
  it('should match the snapshot', () => {
    const { asFragment } = render(<Col span={12}>Content</Col>);
    expect(asFragment()).toMatchSnapshot();
  });

  it('should render correctly', () => {
    const { container } = render(<Col span={12}>Content</Col>);
    expect(container.firstChild).toHaveClass('ty-col');
  });

  it('should render with span', () => {
    const { container } = render(<Col span={6}>Content</Col>);
    expect(container.firstChild).toHaveClass('ty-col-6');
  });

  it('should render with offset', () => {
    const { container } = render(<Col span={6} offset={3}>Content</Col>);
    expect(container.firstChild).toHaveClass('ty-col-offset-3');
  });
});
