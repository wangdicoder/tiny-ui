import React from 'react';
import { render } from '@testing-library/react';
import Upload from '../index';

describe('<Upload />', () => {
  it('should match the snapshot', () => {
    const { asFragment } = render(<Upload action="/upload" />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('should render correctly', () => {
    const { container } = render(<Upload action="/upload" />);
    expect(container.firstChild).toHaveClass('ty-upload');
  });

  it('should render file input', () => {
    const { container } = render(<Upload action="/upload" />);
    expect(container.querySelector('input[type="file"]')).toBeTruthy();
  });

  it('should render disabled', () => {
    const { container } = render(<Upload action="/upload" disabled />);
    expect(container.firstChild).toHaveClass('ty-upload_disabled');
  });
});
