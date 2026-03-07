import { render } from '@testing-library/react';
import Select from '../index';

describe('<Select />', () => {
  it('should match the snapshot', () => {
    const { asFragment } = render(
      <Select>
        <Select.Option value="a">A</Select.Option>
        <Select.Option value="b">B</Select.Option>
      </Select>
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it('should render correctly', () => {
    const { container } = render(
      <Select>
        <Select.Option value="a">A</Select.Option>
      </Select>
    );
    expect(container.firstChild).toHaveClass('ty-select');
  });
});
