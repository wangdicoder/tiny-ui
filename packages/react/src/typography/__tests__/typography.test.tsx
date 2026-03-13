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

  it('should forward ref on Heading', () => {
    const ref = React.createRef<HTMLHeadingElement>();
    render(<Typography.Heading ref={ref}>Heading</Typography.Heading>);
    expect(ref.current).toBeInstanceOf(HTMLHeadingElement);
    expect(ref.current!.tagName).toBe('H1');
  });

  it('should render the correct heading level', () => {
    const { container } = render(<Typography.Heading level={3}>H3</Typography.Heading>);
    expect(container.querySelector('h3')).toBeInTheDocument();
  });

  it('should return null for invalid heading level', () => {
    const spy = jest.spyOn(console, 'warn').mockImplementation();
    const { container } = render(
      <Typography.Heading level={0 as any}>Bad</Typography.Heading>
    );
    expect(container.innerHTML).toBe('');
    spy.mockRestore();
  });

  it('should forward ref on Text', () => {
    const ref = React.createRef<HTMLSpanElement>();
    render(<Typography.Text ref={ref}>Inline</Typography.Text>);
    expect(ref.current).toBeInstanceOf(HTMLSpanElement);
  });

  it('should keep the same DOM node after re-render (Heading stability)', () => {
    const ref = React.createRef<HTMLHeadingElement>();
    const { rerender } = render(<Typography.Heading ref={ref}>First</Typography.Heading>);
    const firstNode = ref.current;
    rerender(<Typography.Heading ref={ref}>Second</Typography.Heading>);
    expect(ref.current).toBe(firstNode);
  });
});
