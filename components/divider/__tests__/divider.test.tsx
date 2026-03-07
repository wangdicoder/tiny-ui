import React from 'react';
import { render } from '@testing-library/react';
import Divider from '../index';

describe('<Divider />', () => {
  it('should match the snapshot', () => {
    const { asFragment } = render(<Divider />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('should render correctly', () => {
    const { container } = render(<Divider />);
    expect(container.firstChild).toHaveClass('ty-divider');
  });

  it('should render horizontal type by default', () => {
    const { container } = render(<Divider />);
    expect(container.firstChild).toHaveClass('ty-divider_horizontal');
  });

  it('should render vertical type', () => {
    const { container } = render(<Divider type="vertical" />);
    expect(container.firstChild).toHaveClass('ty-divider_vertical');
  });

  it('should render dashed style', () => {
    const { container } = render(<Divider dashed />);
    expect(container.firstChild).toHaveClass('ty-divider_dashed');
  });

  it('should render with text', () => {
    const { getByText } = render(<Divider>Section</Divider>);
    expect(getByText('Section')).toBeTruthy();
  });

  it('should render text with alignment', () => {
    const { container } = render(<Divider align="left">Left</Divider>);
    expect(container.querySelector('.ty-divider__text')).toBeTruthy();
  });
});
