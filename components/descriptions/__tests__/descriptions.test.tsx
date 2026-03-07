import React from 'react';
import { render } from '@testing-library/react';
import Descriptions from '../index';

describe('<Descriptions />', () => {
  it('should match the snapshot', () => {
    const { asFragment } = render(
      <Descriptions>
        <Descriptions.Item label="Name">John</Descriptions.Item>
        <Descriptions.Item label="Age">30</Descriptions.Item>
      </Descriptions>
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it('should render correctly', () => {
    const { container } = render(
      <Descriptions>
        <Descriptions.Item label="Name">John</Descriptions.Item>
      </Descriptions>
    );
    expect(container.firstChild).toHaveClass('ty-descriptions');
  });

  it('should render title', () => {
    const { getByText } = render(
      <Descriptions title="User Info">
        <Descriptions.Item label="Name">John</Descriptions.Item>
      </Descriptions>
    );
    expect(getByText('User Info')).toBeInTheDocument();
  });

  it('should render items', () => {
    const { getByText } = render(
      <Descriptions>
        <Descriptions.Item label="Name">John</Descriptions.Item>
      </Descriptions>
    );
    expect(getByText('Name')).toBeInTheDocument();
    expect(getByText('John')).toBeInTheDocument();
  });
});
