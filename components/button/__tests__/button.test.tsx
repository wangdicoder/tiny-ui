import React from 'react';
import { render } from '@testing-library/react';
import Button from '../button';

describe('<Button />', () => {
  it('should match the snapshot', () => {
    const { asFragment } = render(<Button>Default</Button>);
    expect(asFragment()).toMatchSnapshot();
  });

  it('should render primary correctly', () => {
    const wrapper = render(<Button btnType="primary">Primary Button</Button>);
    expect(wrapper.getByRole('button')).toHaveClass('ty-btn_primary');
  });

  it('should disabled', () => {
    const wrapper = render(<Button disabled>Disabled</Button>);
    expect(wrapper.getByRole('button')).toHaveClass('ty-btn_disabled');
  });
});
