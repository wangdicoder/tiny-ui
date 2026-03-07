import React from 'react';
import { render } from '@testing-library/react';
import Layout from '../index';

const { Header, Content, Footer, Sidebar } = Layout;

describe('<Layout />', () => {
  it('should match the snapshot', () => {
    const { asFragment } = render(
      <Layout>
        <Header>Header</Header>
        <Content>Content</Content>
        <Footer>Footer</Footer>
      </Layout>
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it('should render correctly', () => {
    const { container } = render(<Layout>Content</Layout>);
    expect(container.firstChild).toHaveClass('ty-layout');
  });

  it('should render header', () => {
    const { getByText } = render(
      <Layout><Header>My Header</Header></Layout>
    );
    expect(getByText('My Header')).toBeInTheDocument();
  });

  it('should render sidebar', () => {
    const { container } = render(
      <Layout>
        <Sidebar>Sidebar</Sidebar>
        <Content>Content</Content>
      </Layout>
    );
    expect(container.querySelector('.ty-layout-sidebar')).toBeTruthy();
  });

  it('should render footer', () => {
    const { getByText } = render(
      <Layout><Footer>My Footer</Footer></Layout>
    );
    expect(getByText('My Footer')).toBeInTheDocument();
  });
});
