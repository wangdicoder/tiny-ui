import React from 'react';
import { render, mount } from 'enzyme';
import Button from '../../components/button';

const { Group } = Button;

describe('<ButtonGroup />', () => {
  it('should match the snapshot', () => {
    const wrapper = render(
      <Group>
        <Button>Default</Button>
      </Group>
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('should render child button correctly', () => {
    const wrapper = mount(
      <Group color="primary">
        <Button>Default</Button>
      </Group>
    );
    expect(wrapper.childAt(0).find('.ty-btn_primary').length).toBe(1);
  });
});
