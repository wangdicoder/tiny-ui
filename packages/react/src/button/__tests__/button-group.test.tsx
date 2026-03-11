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

  it('should render two buttons', () => {
    const { container } = render(
      <ButtonGroup>
        <Button>Default</Button>
        <Button>Default</Button>
      </ButtonGroup>
    );
    expect(container.querySelectorAll('.ty-btn_default').length).toBe(2);
  });

  it('should render correct type of buttons', () => {
    const { container } = render(
      <ButtonGroup btnType="primary">
        <Button>Default</Button>
        <Button>Default</Button>
      </ButtonGroup>
    );
    expect(container.querySelectorAll('.ty-btn_primary').length).toBe(2);
  });

  it('should render correct size of buttons', () => {
    const { container } = render(
      <ButtonGroup size="lg">
        <Button>Default</Button>
        <Button>Default</Button>
      </ButtonGroup>
    );
    expect(container.querySelectorAll('.ty-btn_lg').length).toBe(2);
  });

  it('should render correct disabled of buttons', () => {
    const { container } = render(
      <ButtonGroup disabled>
        <Button>Default</Button>
        <Button>Default</Button>
      </ButtonGroup>
    );
    expect(container.querySelectorAll('.ty-btn_disabled').length).toBe(2);
  });

  it('should only disable one button', () => {
    const { container } = render(
      <ButtonGroup>
        <Button disabled>Default</Button>
        <Button>Default</Button>
      </ButtonGroup>
    );
    expect(container.querySelectorAll('.ty-btn_disabled').length).toBe(1);
  });
});
