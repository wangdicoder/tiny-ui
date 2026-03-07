import { render } from '@testing-library/react';
import NotificationComponent from '../notification';

// eslint-disable-next-line @typescript-eslint/no-empty-function
const noop = () => {};

describe('<Notification />', () => {
  it('should match the snapshot', () => {
    const { asFragment } = render(
      <NotificationComponent
        title="Notice"
        description="Something happened"
        willUnmount={noop}
      />
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it('should render title', () => {
    const { getByText } = render(
      <NotificationComponent title="Alert" description="Details" willUnmount={noop} />
    );
    expect(getByText('Alert')).toBeInTheDocument();
  });

  it('should render description', () => {
    const { getByText } = render(
      <NotificationComponent title="Title" description="Body text" willUnmount={noop} />
    );
    expect(getByText('Body text')).toBeInTheDocument();
  });
});
