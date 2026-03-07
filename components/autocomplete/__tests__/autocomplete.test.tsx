import { render } from '@testing-library/react';
import Autocomplete from '../index';

describe('<Autocomplete />', () => {
  it('should match the snapshot', () => {
    const { asFragment } = render(<Autocomplete />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('should render correctly', () => {
    const { container } = render(<Autocomplete />);
    expect(container.firstChild).toHaveClass('ty-autocomplete');
  });

  it('should render input', () => {
    const { container } = render(<Autocomplete />);
    expect(container.querySelector('input')).toBeInTheDocument();
  });
});
