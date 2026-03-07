import { render } from '@testing-library/react';
import LoadingBarComponent from '../loading-bar';

// eslint-disable-next-line @typescript-eslint/no-empty-function
const noop = () => {};

describe('<LoadingBar />', () => {
  it('should match the snapshot', () => {
    const { asFragment } = render(<LoadingBarComponent didMount={noop} />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('should render correctly', () => {
    const { container } = render(<LoadingBarComponent didMount={noop} />);
    expect(container.querySelector('#ty-loading-bar')).toBeTruthy();
  });
});
