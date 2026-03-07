import React from 'react';
import { render } from '@testing-library/react';
import NotificationComponent from '../notification';

describe('<Notification />', () => {
  it('should match the snapshot', () => {
    const { asFragment } = render(
      <NotificationComponent
        title="Notice"
        description="Something happened"
        willUnmount={() => {}}
      />
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it('should render title', () => {
    const { getByText } = render(
      <NotificationComponent title="Alert" description="Details" willUnmount={() => {}} />
    );
    expect(getByText('Alert')).toBeTruthy();
  });

  it('should render description', () => {
    const { getByText } = render(
      <NotificationComponent title="Title" description="Body text" willUnmount={() => {}} />
    );
    expect(getByText('Body text')).toBeTruthy();
  });
});
