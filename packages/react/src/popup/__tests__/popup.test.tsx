import React from 'react';
import { render } from '@testing-library/react';
import Popup from '../index';

describe('<Popup />', () => {
  it('should match the snapshot', () => {
    const { asFragment } = render(
      <Popup content="Popup content"><button>Trigger</button></Popup>
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it('should render trigger element', () => {
    const { getByText } = render(
      <Popup content="Content"><button>Trigger</button></Popup>
    );
    expect(getByText('Trigger')).toBeInTheDocument();
  });
});
