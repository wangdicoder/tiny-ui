import React from 'react';
import { render } from '@testing-library/react';
import Overlay from '../index';

describe('<Overlay />', () => {
  it('should match the snapshot', () => {
    const { asFragment } = render(<Overlay isShow>Content</Overlay>);
    expect(asFragment()).toMatchSnapshot();
  });

  it('should render when visible', () => {
    const { getByText } = render(<Overlay isShow>Overlay Content</Overlay>);
    expect(getByText('Overlay Content')).toBeInTheDocument();
  });

  it('should render blurred', () => {
    const { container } = render(<Overlay isShow blurred>Content</Overlay>);
    expect(container.querySelector('.ty-overlay_blurred')).toBeTruthy();
  });
});
