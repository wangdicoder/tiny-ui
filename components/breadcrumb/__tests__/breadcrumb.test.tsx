import React from 'react';
import { render } from '@testing-library/react';
import Breadcrumb from '../index';

describe('<Breadcrumb />', () => {
  it('should match the snapshot', () => {
    const { asFragment } = render(
      <Breadcrumb>
        <Breadcrumb.Item>Home</Breadcrumb.Item>
        <Breadcrumb.Item>Page</Breadcrumb.Item>
      </Breadcrumb>
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it('should render correctly', () => {
    const { container } = render(
      <Breadcrumb>
        <Breadcrumb.Item>Home</Breadcrumb.Item>
      </Breadcrumb>
    );
    expect(container.firstChild).toHaveClass('ty-breadcrumb');
  });

  it('should render items', () => {
    const { getByText } = render(
      <Breadcrumb>
        <Breadcrumb.Item>Home</Breadcrumb.Item>
        <Breadcrumb.Item>Page</Breadcrumb.Item>
      </Breadcrumb>
    );
    expect(getByText('Home')).toBeInTheDocument();
    expect(getByText('Page')).toBeInTheDocument();
  });

  it('should render custom separator', () => {
    const { container } = render(
      <Breadcrumb separator=">">
        <Breadcrumb.Item>Home</Breadcrumb.Item>
        <Breadcrumb.Item>Page</Breadcrumb.Item>
      </Breadcrumb>
    );
    expect(container).toHaveTextContent(/>/);
  });
});
