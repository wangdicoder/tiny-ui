import React from 'react';
import { render } from '@testing-library/react';
import Drawer from '../index';

describe('<Drawer />', () => {
  it('should match the snapshot', () => {
    const { asFragment } = render(<Drawer visible>Content</Drawer>);
    expect(asFragment()).toMatchSnapshot();
  });

  it('should render when visible', () => {
    const { getByText } = render(<Drawer visible>Drawer Content</Drawer>);
    expect(getByText('Drawer Content')).toBeTruthy();
  });

  it('should render header', () => {
    const { getByText } = render(<Drawer visible header="Title">Content</Drawer>);
    expect(getByText('Title')).toBeTruthy();
  });

  it('should render close button when closable', () => {
    const { container } = render(<Drawer visible closable>Content</Drawer>);
    expect(container.querySelector('.ty-drawer__close-btn')).toBeTruthy();
  });

  it('should render footer', () => {
    const { getByText } = render(<Drawer visible footer={<div>Footer</div>}>Content</Drawer>);
    expect(getByText('Footer')).toBeTruthy();
  });
});
