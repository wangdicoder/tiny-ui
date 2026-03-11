import React from 'react';
import { render } from '@testing-library/react';
import Timeline from '../index';

describe('<Timeline />', () => {
  it('should match the snapshot', () => {
    const { asFragment } = render(
      <Timeline>
        <Timeline.Item>Event 1</Timeline.Item>
        <Timeline.Item>Event 2</Timeline.Item>
      </Timeline>
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it('should render correctly', () => {
    const { container } = render(
      <Timeline>
        <Timeline.Item>Event 1</Timeline.Item>
      </Timeline>
    );
    expect(container.firstChild).toHaveClass('ty-timeline');
  });

  it('should render items', () => {
    const { getByText } = render(
      <Timeline>
        <Timeline.Item>Event 1</Timeline.Item>
        <Timeline.Item>Event 2</Timeline.Item>
      </Timeline>
    );
    expect(getByText('Event 1')).toBeInTheDocument();
    expect(getByText('Event 2')).toBeInTheDocument();
  });
});
