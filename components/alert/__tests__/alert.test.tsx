import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Alert from '../index';

describe('<Alert />', () => {
  it('should match the snapshot', () => {
    const { asFragment } = render(<Alert>Alert</Alert>);
    expect(asFragment()).toMatchSnapshot();
  });

  it('should render correct', () => {
    const wrapper = render(<Alert>Alert</Alert>);
    const element = wrapper.getByRole('alert');
    expect(element).toBeInTheDocument();
    expect(element).toHaveClass('ty-alert');
  });

  it('should render correct types', () => {
    expect(
      render(
        <Alert type="success" data-testid="success">
          Alert
        </Alert>
      ).getByTestId('success')
    ).toHaveClass('ty-alert_success');
    expect(
      render(
        <Alert type="info" data-testid="info">
          Alert
        </Alert>
      ).getByTestId('info')
    ).toHaveClass('ty-alert_info');
    expect(
      render(
        <Alert type="warning" data-testid="warning">
          Alert
        </Alert>
      ).getByTestId('warning')
    ).toHaveClass('ty-alert_warning');
    expect(
      render(
        <Alert type="error" data-testid="error">
          Alert
        </Alert>
      ).getByTestId('error')
    ).toHaveClass('ty-alert_error');
  });

  it('should render cross icon', () => {
    const wrapper = render(<Alert closable>This is closable.</Alert>);
    expect(wrapper.getByText('✕')).toBeInTheDocument();
  });

  it('should trigger onClose event', () => {
    const mockCallback = jest.fn();
    const wrapper = render(
      <Alert closable onClose={mockCallback}>
        This is a alert
      </Alert>
    );
    const closeBtn = wrapper.getByText('✕');
    fireEvent.click(closeBtn);
    expect(mockCallback).toHaveBeenCalled();
  });
});
