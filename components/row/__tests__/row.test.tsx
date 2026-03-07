import React from 'react';
import { render } from '@testing-library/react';
import Row from '../index';

describe('<Row />', () => {
  it('should match the snapshot', () => {
    const { asFragment } = render(<Row><div>Col</div></Row>);
    expect(asFragment()).toMatchSnapshot();
  });

  it('should render correctly', () => {
    const { container } = render(<Row><div>Col</div></Row>);
    expect(container.firstChild).toHaveClass('ty-row');
  });

  it('should render with gutter', () => {
    const { container } = render(<Row gutter={16}><div>Col</div></Row>);
    expect(container.firstChild).toBeTruthy();
  });
});
