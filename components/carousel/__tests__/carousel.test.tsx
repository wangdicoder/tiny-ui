import React from 'react';
import { render } from '@testing-library/react';
import Carousel from '../index';

describe('<Carousel />', () => {
  it('should match the snapshot', () => {
    const { asFragment } = render(
      <Carousel autoplay={false}>
        <Carousel.Item><div>Slide 1</div></Carousel.Item>
        <Carousel.Item><div>Slide 2</div></Carousel.Item>
        <Carousel.Item><div>Slide 3</div></Carousel.Item>
      </Carousel>
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it('should render correctly', () => {
    const { container } = render(
      <Carousel autoplay={false}>
        <Carousel.Item><div>Slide 1</div></Carousel.Item>
        <Carousel.Item><div>Slide 2</div></Carousel.Item>
      </Carousel>
    );
    expect(container.firstChild).toHaveClass('ty-carousel');
  });

  it('should render slides', () => {
    const { getByText } = render(
      <Carousel autoplay={false}>
        <Carousel.Item><div>Slide A</div></Carousel.Item>
        <Carousel.Item><div>Slide B</div></Carousel.Item>
      </Carousel>
    );
    expect(getByText('Slide A')).toBeTruthy();
    expect(getByText('Slide B')).toBeTruthy();
  });

  it('should render dots', () => {
    const { container } = render(
      <Carousel autoplay={false} dots>
        <Carousel.Item><div>1</div></Carousel.Item>
        <Carousel.Item><div>2</div></Carousel.Item>
      </Carousel>
    );
    expect(container.querySelectorAll('.ty-carousel__dot').length).toBe(2);
  });

  it('should render arrows', () => {
    const { container } = render(
      <Carousel autoplay={false} arrows>
        <Carousel.Item><div>1</div></Carousel.Item>
        <Carousel.Item><div>2</div></Carousel.Item>
      </Carousel>
    );
    expect(container.querySelector('.ty-carousel__arrow-left')).toBeTruthy();
    expect(container.querySelector('.ty-carousel__arrow-right')).toBeTruthy();
  });

  it('should hide dots when dots is false', () => {
    const { container } = render(
      <Carousel autoplay={false} dots={false}>
        <Carousel.Item><div>1</div></Carousel.Item>
        <Carousel.Item><div>2</div></Carousel.Item>
      </Carousel>
    );
    expect(container.querySelectorAll('.ty-carousel__dot').length).toBe(0);
  });
});
