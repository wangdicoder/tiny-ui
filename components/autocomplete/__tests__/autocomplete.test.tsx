import React from 'react';
import { render } from '@testing-library/react';
import Autocomplete from '../index';

describe('<Autocomplete />', () => {
  it('should match the snapshot', () => {
    const { asFragment } = render(<Autocomplete options={['Apple', 'Banana']} />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('should render correctly', () => {
    const { container } = render(<Autocomplete options={['Apple', 'Banana']} />);
    expect(container.firstChild).toHaveClass('ty-autocomplete');
  });

  it('should render input', () => {
    const { container } = render(<Autocomplete options={[]} />);
    expect(container.querySelector('input')).toBeTruthy();
  });
});
