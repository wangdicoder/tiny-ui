import React from 'react';
import { render, mount } from 'enzyme';
import Button from '../button';
import ButtonGroup from '../button-group';

describe('<ButtonGroup />', () => {
  it('should match the snapshot', () => {
    const wrapper = render(
      <ButtonGroup>
        <Button>Default</Button>
      </ButtonGroup>
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('should render child button correctly', () => {
    const wrapper = mount(
      <ButtonGroup btnType="primary">
        <Button>Default</Button>
      </ButtonGroup>
    );
    expect(wrapper.childAt(0).find('.ty-btn_primary').length).toBe(1);
  });
});
