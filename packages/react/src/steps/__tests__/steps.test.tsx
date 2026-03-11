import React from 'react';
import { render } from '@testing-library/react';
import Steps from '../index';

describe('<Steps />', () => {
  it('should match the snapshot', () => {
    const { asFragment } = render(
      <Steps current={1}>
        <Steps.Step title="Step 1" />
        <Steps.Step title="Step 2" />
        <Steps.Step title="Step 3" />
      </Steps>
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it('should render correctly', () => {
    const { container } = render(
      <Steps current={0}>
        <Steps.Step title="Step 1" />
      </Steps>
    );
    expect(container.firstChild).toHaveClass('ty-steps');
  });

  it('should render items', () => {
    const { getByText } = render(
      <Steps current={0}>
        <Steps.Step title="First" />
        <Steps.Step title="Second" />
      </Steps>
    );
    expect(getByText('First')).toBeInTheDocument();
    expect(getByText('Second')).toBeInTheDocument();
  });
});
