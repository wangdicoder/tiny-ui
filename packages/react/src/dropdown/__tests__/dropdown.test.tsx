import React from 'react';
import { render } from '@testing-library/react';
import Dropdown from '../index';

describe('<Dropdown />', () => {
  it('should match the snapshot', () => {
    const overlay = <div>Menu</div>;
    const { asFragment } = render(<Dropdown overlay={overlay}><button>Trigger</button></Dropdown>);
    expect(asFragment()).toMatchSnapshot();
  });

  it('should render trigger', () => {
    const overlay = <div>Menu</div>;
    const { getByText } = render(<Dropdown overlay={overlay}><button>Click me</button></Dropdown>);
    expect(getByText('Click me')).toBeInTheDocument();
  });
});
