import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Button from '../button';
import Icon from '../../icon';

describe('<Button />', () => {
  it('should match the snapshot', () => {
    const { asFragment } = render(<Button>Default</Button>);
    expect(asFragment()).toMatchSnapshot();
  });

  describe('button type', () => {
    it('should render default button by default', () => {
      const { container } = render(<Button>Default Button</Button>);
      expect(container.firstChild).toHaveClass('ty-btn');
      expect(container.firstChild).toHaveClass('ty-btn_default');
    });

    it('should render primary button', () => {
      const { container } = render(<Button btnType="primary">Primary Button</Button>);
      expect(container.firstChild).toHaveClass('ty-btn_primary');
    });

    it('should render outline button', () => {
      const { container } = render(<Button btnType="outline">Outline Button</Button>);
      expect(container.firstChild).toHaveClass('ty-btn_outline');
    });

    it('should render ghost button', () => {
      const { container } = render(<Button btnType="ghost">Ghost Button</Button>);
      expect(container.firstChild).toHaveClass('ty-btn_ghost');
    });

    it('should render link button', () => {
      const { container } = render(<Button btnType="link">Link Button</Button>);
      expect(container.firstChild).toHaveClass('ty-btn_link');
    });

    it('should render success button', () => {
      const { container } = render(<Button btnType="success">Success Button</Button>);
      expect(container.firstChild).toHaveClass('ty-btn_success');
    });

    it('should render info button', () => {
      const { container } = render(<Button btnType="info">Info Button</Button>);
      expect(container.firstChild).toHaveClass('ty-btn_info');
    });

    it('should render warning button', () => {
      const { container } = render(<Button btnType="warning">Warning Button</Button>);
      expect(container.firstChild).toHaveClass('ty-btn_warning');
    });

    it('should render danger button', () => {
      const { container } = render(<Button btnType="danger">Danger Button</Button>);
      expect(container.firstChild).toHaveClass('ty-btn_danger');
    });
  });

  describe('button size', () => {
    it('should render medium size by default', () => {
      const { container } = render(<Button>Medium Button</Button>);
      expect(container.firstChild).toHaveClass('ty-btn_md');
    });

    it('should render small size', () => {
      const { container } = render(<Button size="sm">Small Button</Button>);
      expect(container.firstChild).toHaveClass('ty-btn_sm');
    });

    it('should render large size', () => {
      const { container } = render(<Button size="lg">Large Button</Button>);
      expect(container.firstChild).toHaveClass('ty-btn_lg');
    });
  });

  it('should have loading icon', () => {
    const { container } = render(<Button loading>Loading</Button>);
    expect(container.firstChild).toHaveClass('ty-btn_loading');
    expect(container.querySelector('.ty-btn__loader')).toBeTruthy();
  });

  it('should have icon placement', () => {
    const { container } = render(<Button icon={<Icon name="wifi" />}>Icon</Button>);
    expect(container.querySelector('.ty-btn__icon-container')).toBeTruthy();
  });

  it('should be disabled', () => {
    const { container } = render(<Button disabled>Disabled</Button>);
    expect(container.firstChild).toHaveClass('ty-btn_disabled');
    expect(container.firstChild).toBeDisabled();
  });

  it('should be a block style', () => {
    const { container } = render(<Button block>Block</Button>);
    expect(container.firstChild).toHaveClass('ty-btn_block');
  });

  it('should fire event when clicking the button', () => {
    const fn = jest.fn();
    const { container } = render(<Button onClick={fn}>Button</Button>);

    const btn = container.firstChild;
    btn && fireEvent.click(btn);

    expect(fn).toHaveBeenCalledTimes(1);
  });
});
