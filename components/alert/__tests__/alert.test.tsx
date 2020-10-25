import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Alert from '../index';

describe('<Alert />', () => {
  it('should match the snapshot', () => {
    const { asFragment } = render(<Alert>Alert</Alert>);
    expect(asFragment()).toMatchSnapshot();
  });

  it('should render correctly', () => {
    const { container } = render(<Alert>Alert</Alert>);
    expect(container.firstChild).toHaveClass('ty-alert');
  });

  it('should render correct types', () => {
    expect(render(<Alert type="success">Alert</Alert>).container.firstChild).toHaveClass(
      'ty-alert_success'
    );

    expect(render(<Alert type="info">Alert</Alert>).container.firstChild).toHaveClass(
      'ty-alert_info'
    );

    expect(render(<Alert type="warning">Alert</Alert>).container.firstChild).toHaveClass(
      'ty-alert_warning'
    );

    expect(render(<Alert type="error">Alert</Alert>).container.firstChild).toHaveClass(
      'ty-alert_error'
    );
  });

  it('should render title', () => {
    const { container } = render(<Alert title="This is a title">Alert Component</Alert>);
    expect(container.querySelector('.ty-alert__title')).toBeTruthy();
  });

  it('should render cross icon', () => {
    const { container } = render(<Alert closable>This is closable.</Alert>);
    expect(container.querySelector('.ty-alert__close-btn')).toBeTruthy();
  });

  it('should render custom close text', () => {
    const { container } = render(<Alert closeText="close now">This is closable.</Alert>);
    expect(container.querySelector('.ty-alert__close-btn')).toBeTruthy();
    expect(container.querySelector('.ty-alert__close-btn')?.innerHTML).toBe('close now');
  });

  it('should trigger onClose event', () => {
    const fn = jest.fn();
    const wrapper = render(
      <Alert closable onClose={fn}>
        This is a alert
      </Alert>
    );
    const closeBtn = wrapper.getByText('✕');

    fireEvent.click(closeBtn);

    expect(fn).toHaveBeenCalledTimes(1);
  });
});
