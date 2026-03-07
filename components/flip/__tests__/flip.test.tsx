import React from 'react';
import { render } from '@testing-library/react';
import Flip from '../index';

describe('<Flip />', () => {
  it('should match the snapshot', () => {
    const { asFragment } = render(
      <Flip front={<div>Front</div>} back={<div>Back</div>} />
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it('should render correctly', () => {
    const { container } = render(
      <Flip front={<div>Front</div>} back={<div>Back</div>} />
    );
    expect(container.firstChild).toHaveClass('ty-flip');
  });

  it('should render front content', () => {
    const { getByText } = render(
      <Flip front={<div>Front Side</div>} back={<div>Back Side</div>} />
    );
    expect(getByText('Front Side')).toBeInTheDocument();
  });
});
