import { render } from '@testing-library/react';
import BackTop from '../index';

describe('<BackTop />', () => {
  it('should match the snapshot', () => {
    const { asFragment } = render(<BackTop />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('should render null when not scrolled', () => {
    const { container } = render(<BackTop />);
    expect(container).toBeEmptyDOMElement();
  });
});
