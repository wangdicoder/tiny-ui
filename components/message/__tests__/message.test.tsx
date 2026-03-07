import React from 'react';
import { render } from '@testing-library/react';
import MessageComponent from '../message';

describe('<Message />', () => {
  it('should match the snapshot', () => {
    const { asFragment } = render(
      <MessageComponent
        type="success"
        content="Success message"
        duration={3000}
        willUnmount={() => {}}
      />
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it('should render correctly', () => {
    const { container } = render(
      <MessageComponent content="Hello" duration={3000} willUnmount={() => {}} />
    );
    expect(container.querySelector('.ty-message')).toBeTruthy();
  });

  it('should render content text', () => {
    const { getByText } = render(
      <MessageComponent content="Test message" duration={3000} willUnmount={() => {}} />
    );
    expect(getByText('Test message')).toBeTruthy();
  });

  it('should render icon for success type', () => {
    const { container } = render(
      <MessageComponent type="success" content="Success" duration={3000} willUnmount={() => {}} />
    );
    expect(container.querySelector('.ty-message__icon')).toBeTruthy();
  });

  it('should render icon for error type', () => {
    const { container } = render(
      <MessageComponent type="error" content="Error" duration={3000} willUnmount={() => {}} />
    );
    expect(container.querySelector('.ty-message__icon')).toBeTruthy();
  });

  it('should render extra content', () => {
    const { getByText } = render(
      <MessageComponent content="Msg" duration={3000} willUnmount={() => {}} extra={<span>Extra</span>} />
    );
    expect(getByText('Extra')).toBeTruthy();
  });
});
