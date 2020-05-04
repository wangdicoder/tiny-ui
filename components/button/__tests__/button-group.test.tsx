import React from 'react';
import { render } from '@testing-library/react';
import Button from '../button';
import ButtonGroup from '../button-group';

describe('<ButtonGroup />', () => {
  it('should match the snapshot', () => {
    const { asFragment } = render(
      <ButtonGroup>
        <Button>Default</Button>
      </ButtonGroup>
    );
    expect(asFragment()).toMatchSnapshot();
  });

  // it('should render child button correctly', () => {
  //   const wrapper = mount(
  //     <ButtonGroup btnType="primary">
  //       <Button>Default</Button>
  //     </ButtonGroup>
  //   );
  //   expect(wrapper.childAt(0).find('.ty-btn_primary').length).toBe(1);
  // });
});
