import React from 'react';
import { render } from '@testing-library/react';
import Typography from '../index';

describe('<Typography />', () => {
  it('should match the snapshot', () => {
    const { asFragment } = render(<Typography.Title>Heading</Typography.Title>);
    expect(asFragment()).toMatchSnapshot();
  });

  it('should render Title correctly', () => {
    const { getByText } = render(<Typography.Title>Heading</Typography.Title>);
    expect(getByText('Heading')).toBeTruthy();
  });

  it('should render Paragraph', () => {
    const { getByText } = render(<Typography.Paragraph>Text</Typography.Paragraph>);
    expect(getByText('Text')).toBeTruthy();
  });

  it('should render Text', () => {
    const { getByText } = render(<Typography.Text>Inline</Typography.Text>);
    expect(getByText('Inline')).toBeTruthy();
  });
});
