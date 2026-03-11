import { render } from '@testing-library/react';
import MessageComponent from '../message';

// eslint-disable-next-line @typescript-eslint/no-empty-function
const noop = () => {};

describe('<Message />', () => {
  it('should match the snapshot', () => {
    const { asFragment } = render(
      <MessageComponent type="success" content="Success message" duration={3000} willUnmount={noop} />
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it('should render correctly', () => {
    const { container } = render(
      <MessageComponent type="info" content="Hello" duration={3000} willUnmount={noop} />
    );
    expect(container.querySelector('.ty-message')).toBeInTheDocument();
  });

  it('should render content text', () => {
    const { getByText } = render(
      <MessageComponent type="info" content="Test message" duration={3000} willUnmount={noop} />
    );
    expect(getByText('Test message')).toBeInTheDocument();
  });

  it('should render icon for success type', () => {
    const { container } = render(
      <MessageComponent type="success" content="Success" duration={3000} willUnmount={noop} />
    );
    expect(container.querySelector('.ty-message__icon')).toBeInTheDocument();
  });

  it('should render extra content', () => {
    const { getByText } = render(
      <MessageComponent type="info" content="Msg" duration={3000} willUnmount={noop} extra={<span>Extra</span>} />
    );
    expect(getByText('Extra')).toBeInTheDocument();
  });
});
