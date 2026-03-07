import React from 'react';
import { render } from '@testing-library/react';
import Result from '../index';

describe('<Result />', () => {
  it('should match the snapshot', () => {
    const { asFragment } = render(<Result title="Success" />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('should render correctly', () => {
    const { container } = render(<Result title="Success" />);
    expect(container.firstChild).toHaveClass('ty-result');
  });

  it('should render info status by default', () => {
    const { container } = render(<Result title="Info" />);
    expect(container.querySelector('.ty-result__icon')).toBeTruthy();
  });

  it('should render success status', () => {
    const { container } = render(<Result status="success" title="Done" />);
    expect(container.firstChild).toBeTruthy();
  });

  it('should render error status', () => {
    const { container } = render(<Result status="error" title="Error" />);
    expect(container.firstChild).toBeTruthy();
  });

  it('should render title and subtitle', () => {
    const { getByText } = render(<Result title="Title" subtitle="Subtitle" />);
    expect(getByText('Title')).toBeInTheDocument();
    expect(getByText('Subtitle')).toBeInTheDocument();
  });

  it('should render extra actions', () => {
    const { getByText } = render(<Result title="Done" extra={<button>OK</button>} />);
    expect(getByText('OK')).toBeInTheDocument();
  });
});
