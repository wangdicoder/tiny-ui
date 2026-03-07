import React from 'react';
import { render } from '@testing-library/react';
import LoadingBarComponent from '../loading-bar';

describe('<LoadingBar />', () => {
  it('should match the snapshot', () => {
    const { asFragment } = render(<LoadingBarComponent didMount={() => {}} />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('should render correctly', () => {
    const { container } = render(<LoadingBarComponent didMount={() => {}} />);
    expect(container.querySelector('#ty-loading-bar')).toBeTruthy();
  });
});
