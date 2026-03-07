import { render } from '@testing-library/react';
import Row from '../index';
import Col from '../../col/index';

describe('<Row />', () => {
  it('should match the snapshot', () => {
    const { asFragment } = render(<Row><Col span={12}>A</Col><Col span={12}>B</Col></Row>);
    expect(asFragment()).toMatchSnapshot();
  });

  it('should render correctly', () => {
    const { container } = render(<Row><Col span={12}>A</Col><Col span={12}>B</Col></Row>);
    expect(container.firstChild).toHaveClass('ty-row');
  });

  it('should render with gutter', () => {
    const { container } = render(<Row gutter={16}><Col span={12}>A</Col><Col span={12}>B</Col></Row>);
    expect(container.firstChild).toBeInTheDocument();
  });
});
