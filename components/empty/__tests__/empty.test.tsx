import React from 'react';
import { render } from '@testing-library/react';
import Empty from '../index';

describe('<Empty />', () => {
  it('should match the snapshot', () => {
    const { asFragment } = render(<Empty />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('should render correctly', () => {
    const { container } = render(<Empty />);
    expect(container.firstChild).toHaveClass('ty-empty');
  });

  it('should render default description', () => {
    const { getByText } = render(<Empty />);
    expect(getByText('No Data')).toBeTruthy();
  });

  it('should render custom description', () => {
    const { getByText } = render(<Empty description="Nothing here" />);
    expect(getByText('Nothing here')).toBeTruthy();
  });

  it('should hide description when false', () => {
    const { container } = render(<Empty description={false} />);
    expect(container.querySelector('.ty-empty__description')).toBeFalsy();
  });

  it('should render children', () => {
    const { getByText } = render(<Empty><button>Create</button></Empty>);
    expect(getByText('Create')).toBeTruthy();
  });
});
