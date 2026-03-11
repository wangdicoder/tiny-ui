import React from 'react';
import { render } from '@testing-library/react';
import Portal from '../index';

describe('<Portal />', () => {
  it('should render children into body', () => {
    const { baseElement } = render(
      <Portal><div data-testid="portal-content">Portal Content</div></Portal>
    );
    expect(baseElement.querySelector('[data-testid="portal-content"]')).toBeTruthy();
  });
});
