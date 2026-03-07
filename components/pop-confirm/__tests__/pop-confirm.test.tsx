import React from 'react';
import { render } from '@testing-library/react';
import PopConfirm from '../index';

describe('<PopConfirm />', () => {
  it('should match the snapshot', () => {
    const { asFragment } = render(<PopConfirm title="Sure?"><button>Delete</button></PopConfirm>);
    expect(asFragment()).toMatchSnapshot();
  });

  it('should render children', () => {
    const { getByText } = render(<PopConfirm title="Sure?"><button>Delete</button></PopConfirm>);
    expect(getByText('Delete')).toBeTruthy();
  });
});
