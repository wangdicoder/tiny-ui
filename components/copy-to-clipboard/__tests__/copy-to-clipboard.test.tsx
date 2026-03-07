import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import CopyToClipboard from '../index';

describe('<CopyToClipboard />', () => {
  it('should match the snapshot', () => {
    const { asFragment } = render(
      <CopyToClipboard text="Hello">
        <button>Copy</button>
      </CopyToClipboard>
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it('should render children', () => {
    const { getByText } = render(
      <CopyToClipboard text="Hello">
        <button>Copy</button>
      </CopyToClipboard>
    );
    expect(getByText('Copy')).toBeTruthy();
  });
});
