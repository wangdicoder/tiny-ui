import React from 'react';
import { shallow, render } from 'enzyme';
import AspectRatio from '../../components/aspect-ratio';

describe('<AspectRatio />', () => {
  it('should match the snapshot', () => {
    const wrapper = render(<AspectRatio />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render children', () => {
    const wrapper = shallow(<AspectRatio>children</AspectRatio>);
    expect(wrapper.contains('children')).toBeTruthy();
  });

  it('should render correct ratio container', () => {
    const wrapper = shallow(<AspectRatio ratio={4 / 3} width={40} />);
    const paddingTop = wrapper.find('.ty-aspect-ratio__padding').get(0).props.style.paddingTop;
    expect(paddingTop).toBe(`${(3 / 4) * 100}%`);
  });

  it('should render correct width', () => {
    const wrapper = shallow(<AspectRatio width={20} />);
    expect(wrapper.get(0).props.style.width).toBe(20);
  });
});
