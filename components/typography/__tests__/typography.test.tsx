import React from 'react';
import { render } from '@testing-library/react';
import Typography from '../index';

describe('<Typography />', () => {
  it('should match the snapshot', () => {
    const { asFragment } = render(<Typography.Heading>Heading</Typography.Heading>);
    expect(asFragment()).toMatchSnapshot();
  });

  it('should render Title correctly', () => {
    const { getByText } = render(<Typography.Heading>Heading</Typography.Heading>);
    expect(getByText('Heading')).toBeInTheDocument();
  });

  it('should render Paragraph', () => {
    const { getByText } = render(<Typography.Paragraph>Text</Typography.Paragraph>);
    expect(getByText('Text')).toBeInTheDocument();
  });

  it('should render Text', () => {
    const { getByText } = render(<Typography.Text>Inline</Typography.Text>);
    expect(getByText('Inline')).toBeInTheDocument();
  });
});
