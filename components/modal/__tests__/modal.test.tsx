import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Modal from '../index';

describe('<Modal />', () => {
  it('should match the snapshot', () => {
    const { asFragment } = render(<Modal visible>Content</Modal>);
    expect(asFragment()).toMatchSnapshot();
  });

  it('should render when visible', () => {
    const { getByText } = render(<Modal visible>Modal Content</Modal>);
    expect(getByText('Modal Content')).toBeInTheDocument();
  });

  it('should render header', () => {
    const { getByText } = render(<Modal visible header="Title">Content</Modal>);
    expect(getByText('Title')).toBeInTheDocument();
  });

  it('should render close button when closable', () => {
    const { container } = render(<Modal visible closable>Content</Modal>);
    expect(container.querySelector('.ty-modal__close-btn')).toBeTruthy();
  });

  it('should render footer buttons', () => {
    const { getByText } = render(<Modal visible>Content</Modal>);
    expect(getByText('OK')).toBeInTheDocument();
    expect(getByText('Cancel')).toBeInTheDocument();
  });

  it('should render custom button text', () => {
    const { getByText } = render(<Modal visible confirmText="Yes" cancelText="No">Content</Modal>);
    expect(getByText('Yes')).toBeInTheDocument();
    expect(getByText('No')).toBeInTheDocument();
  });

  it('should render null footer', () => {
    const { container } = render(<Modal visible footer={null}>Content</Modal>);
    expect(container.querySelector('.ty-modal__footer')).toBeFalsy();
  });
});
