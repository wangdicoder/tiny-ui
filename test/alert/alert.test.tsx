import React from 'react';
import { shallow, render } from 'enzyme';
import Alert from '../../components/alert';

describe('<Alert />', () => {
  it('should match the snapshot', () => {
    const wrapper = render(<Alert>Alert</Alert>);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render correct title', () => {
    const title = 'This is title';
    const wrapper = shallow(<Alert title={title}>Body</Alert>);
    expect(wrapper.find('.ty-alert__title').text()).toBe(title);
  });

  it('should render correct types', () => {
    expect(shallow(<Alert type="success" />).find('.ty-alert_success').length).toBe(1);
    expect(shallow(<Alert type="info" />).find('.ty-alert_info').length).toBe(1);
    expect(shallow(<Alert type="warning" />).find('.ty-alert_warning').length).toBe(1);
    expect(shallow(<Alert type="error" />).find('.ty-alert_error').length).toBe(1);
  });

  it('should render cross icon', () => {
    const wrapper = shallow(<Alert closable>This is closable.</Alert>);
    expect(wrapper.find('.ty-alert__close-btn').length).toBe(1);
  });

  it('should trigger onClose event', () => {
    const mockCallback = jest.fn();
    const wrapper = shallow(
      <Alert closable onClose={mockCallback}>
        This is a alert
      </Alert>
    );
    wrapper
      .find('.ty-alert__close-btn')
      .first()
      .simulate('click');
    expect(mockCallback.mock.calls.length).toBe(1);
  });
});
