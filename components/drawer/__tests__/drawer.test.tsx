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
    expect(getByText('Drawer Content')).toBeInTheDocument();
  });

  it('should render header', () => {
    const { getByText } = render(<Drawer visible header="Title">Content</Drawer>);
    expect(getByText('Title')).toBeInTheDocument();
  });

  it('should render close button when closable', () => {
    const { baseElement } = render(<Drawer visible closable>Content</Drawer>);
    expect(baseElement.querySelector('.ty-drawer__close-btn')).toBeInTheDocument();
  });

  it('should render footer', () => {
    const { getByText } = render(<Drawer visible footer={<div>Footer</div>}>Content</Drawer>);
    expect(getByText('Footer')).toBeInTheDocument();
  });
});
