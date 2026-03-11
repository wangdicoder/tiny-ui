import React from 'react';
import { render } from '@testing-library/react';
import ConfigProvider from '../index';
import Button from '../../button';

describe('<ConfigProvider />', () => {
  it('should match the snapshot', () => {
    const { asFragment } = render(
      <ConfigProvider prefixCls="custom">
        <Button>Button</Button>
      </ConfigProvider>
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it('should render children', () => {
    const { getByText } = render(
      <ConfigProvider>
        <div>Content</div>
      </ConfigProvider>
    );
    expect(getByText('Content')).toBeInTheDocument();
  });

  it('should provide custom prefix', () => {
    const { container } = render(
      <ConfigProvider prefixCls="my">
        <Button>Btn</Button>
      </ConfigProvider>
    );
    expect(container.querySelector('.my-btn')).toBeTruthy();
  });
});
