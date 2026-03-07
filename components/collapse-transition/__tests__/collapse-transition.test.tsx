import React from 'react';
import { render } from '@testing-library/react';
import CollapseTransition from '../index';

describe('<CollapseTransition />', () => {
  it('should match the snapshot', () => {
    const { asFragment } = render(
      <CollapseTransition isShow><div>Content</div></CollapseTransition>
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it('should render children when visible', () => {
    const { getByText } = render(
      <CollapseTransition isShow><div>Visible Content</div></CollapseTransition>
    );
    expect(getByText('Visible Content')).toBeInTheDocument();
  });
});
