import { render } from '@testing-library/react';
import Transfer from '../index';

describe('<Transfer />', () => {
  const dataSource = [
    { key: '1', label: 'Item 1', disabled: false },
    { key: '2', label: 'Item 2', disabled: false },
    { key: '3', label: 'Item 3', disabled: false },
  ];

  it('should match the snapshot', () => {
    const { asFragment } = render(<Transfer dataSource={dataSource} />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('should render correctly', () => {
    const { container } = render(<Transfer dataSource={dataSource} />);
    expect(container.firstChild).toHaveClass('ty-transfer');
  });

  it('should render two panels', () => {
    const { container } = render(<Transfer dataSource={dataSource} />);
    expect(container.querySelectorAll('.ty-transfer-panel').length).toBe(2);
  });
});
