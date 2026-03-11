import React from 'react';
import { render } from '@testing-library/react';
import Row from '../../row/index';
import Col from '../../col/index';

describe('Grid System', () => {
  it('should render Row and Cols', () => {
    const { container } = render(
      <Row>
        <Col span={12}>Left</Col>
        <Col span={12}>Right</Col>
      </Row>
    );
    expect(container.querySelector('.ty-row')).toBeTruthy();
    expect(container.querySelectorAll('.ty-col').length).toBe(2);
  });

  it('should render with gutter', () => {
    const { container } = render(
      <Row gutter={16}>
        <Col span={12}>Left</Col>
        <Col span={12}>Right</Col>
      </Row>
    );
    expect(container.firstChild).toBeTruthy();
  });
});
