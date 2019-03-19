import * as React from 'react';
import {shallow, render} from 'enzyme';
import Button from '../index';
import Icon from '../../icon';

describe('<Button />', () => {
    it('should match snapshot', () => {
        const wrapper = render(<Button>Default</Button>);
        expect(wrapper).toMatchSnapshot();
    });

    it('should render primary correctly', () => {
        const wrapper = shallow(<Button color="primary">Primary Button</Button>);
        expect(wrapper.find('.ty-btn_primary').length).toBe(1);
    });

    it('should render loading', () => {
        const wrapper = shallow(<Button loading>Default</Button>);
        expect(wrapper.find('.ty-btn__loader').length).toBe(1);
    });

    it('should render icon rather than loading icon', () => {
        const wrapper = shallow(<Button icon={<Icon type="plus-circle"/>}>Default</Button>);
        expect(wrapper.find('.ty-btn__loader').length).toBe(0);
    });

    it('should disabled', () => {
        const wrapper = shallow(<Button disabled>Disabled</Button>);
        expect(wrapper.find('.ty-btn_default_disabled').length).toBe(1);
    });

    it('should render link', () => {
        const wrapper = shallow(<Button link>Default</Button>);
        expect(wrapper.find('.ty-btn_default_link').length).toBe(1);
        expect(wrapper.find('.ty-btn_default').length).toBe(0);
    });
});
