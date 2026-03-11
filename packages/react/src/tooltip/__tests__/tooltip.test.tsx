import React from 'react';
import { render } from '@testing-library/react';
import Tooltip from '../index';

describe('<Tooltip />', () => {
  it('should match the snapshot', () => {
    const { asFragment } = render(<Tooltip title="Tip"><button>Hover me</button></Tooltip>);
    expect(asFragment()).toMatchSnapshot();
  });

  it('should render children', () => {
    const { getByText } = render(<Tooltip title="Tip"><button>Hover me</button></Tooltip>);
    expect(getByText('Hover me')).toBeInTheDocument();
  });

  it('should render with trigger element', () => {
    const { container } = render(<Tooltip title="Tip"><span>Text</span></Tooltip>);
    expect(container.firstChild).toBeTruthy();
  });
});
