import React from 'react';
import { render } from '@testing-library/react';
import Steps from '../index';

describe('<Steps />', () => {
  it('should match the snapshot', () => {
    const { asFragment } = render(
      <Steps current={1}>
        <Steps.Item title="Step 1" />
        <Steps.Item title="Step 2" />
        <Steps.Item title="Step 3" />
      </Steps>
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it('should render correctly', () => {
    const { container } = render(
      <Steps current={0}>
        <Steps.Item title="Step 1" />
      </Steps>
    );
    expect(container.firstChild).toHaveClass('ty-steps');
  });

  it('should render items', () => {
    const { getByText } = render(
      <Steps current={0}>
        <Steps.Item title="First" />
        <Steps.Item title="Second" />
      </Steps>
    );
    expect(getByText('First')).toBeTruthy();
    expect(getByText('Second')).toBeTruthy();
  });
});
