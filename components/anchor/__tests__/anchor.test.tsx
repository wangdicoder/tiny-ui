import React from 'react';
import { render } from '@testing-library/react';
import Anchor from '../index';

describe('<Anchor />', () => {
  it('should match the snapshot', () => {
    const { asFragment } = render(
      <Anchor>
        <Anchor.Link href="#section1" title="Section 1" />
        <Anchor.Link href="#section2" title="Section 2" />
      </Anchor>
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it('should render correctly', () => {
    const { container } = render(
      <Anchor>
        <Anchor.Link href="#section1" title="Section 1" />
      </Anchor>
    );
    expect(container.firstChild).toHaveClass('ty-anchor');
  });

  it('should render links', () => {
    const { getByText } = render(
      <Anchor>
        <Anchor.Link href="#s1" title="Link 1" />
        <Anchor.Link href="#s2" title="Link 2" />
      </Anchor>
    );
    expect(getByText('Link 1')).toBeTruthy();
    expect(getByText('Link 2')).toBeTruthy();
  });
});
