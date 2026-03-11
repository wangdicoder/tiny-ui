import React from 'react';
import { render } from '@testing-library/react';
import Popover from '../index';

describe('<Popover />', () => {
  it('should match the snapshot', () => {
    const { asFragment } = render(<Popover content="Content"><button>Click</button></Popover>);
    expect(asFragment()).toMatchSnapshot();
  });

  it('should render children', () => {
    const { getByText } = render(<Popover content="Content"><button>Trigger</button></Popover>);
    expect(getByText('Trigger')).toBeInTheDocument();
  });
});
