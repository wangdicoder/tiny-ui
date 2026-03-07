import React from 'react';
import { render } from '@testing-library/react';
import Badge from '../index';

describe('<Badge />', () => {
  it('should match the snapshot', () => {
    const { asFragment } = render(<Badge count={5}><div>content</div></Badge>);
    expect(asFragment()).toMatchSnapshot();
  });

  it('should render correctly', () => {
    const { container } = render(<Badge count={5}><div>content</div></Badge>);
    expect(container.firstChild).toHaveClass('ty-badge');
  });

  it('should render count', () => {
    const { getByText } = render(<Badge count={5}><div>content</div></Badge>);
    expect(getByText('5')).toBeTruthy();
  });

  it('should render max+ when count exceeds max', () => {
    const { getByText } = render(<Badge count={100} max={99}><div>content</div></Badge>);
    expect(getByText('99+')).toBeTruthy();
  });

  it('should render as dot', () => {
    const { container } = render(<Badge dot><div>content</div></Badge>);
    expect(container.querySelector('.ty-badge__dot')).toBeTruthy();
  });

  it('should not show zero by default', () => {
    const { container } = render(<Badge count={0}><div>content</div></Badge>);
    expect(container.querySelector('.ty-badge__count')).toBeFalsy();
  });

  it('should show zero when showZero is true', () => {
    const { getByText } = render(<Badge count={0} showZero><div>content</div></Badge>);
    expect(getByText('0')).toBeTruthy();
  });
});
