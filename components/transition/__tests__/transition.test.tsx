import React from 'react';
import { render } from '@testing-library/react';
import Transition from '../index';

describe('<Transition />', () => {
  it('should match the snapshot', () => {
    const { asFragment } = render(
      <Transition in={true} animation="zoom-top">
        <div>Content</div>
      </Transition>
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it('should render children when in', () => {
    const { getByText } = render(
      <Transition in={true} animation="zoom-top">
        <div>Visible</div>
      </Transition>
    );
    expect(getByText('Visible')).toBeTruthy();
  });
});
