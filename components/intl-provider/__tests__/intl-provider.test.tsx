import { render } from '@testing-library/react';
import IntlProvider from '../index';

describe('<IntlProvider />', () => {
  it('should render children', () => {
    const { getByText } = render(
      <IntlProvider locale="en">
        <div>Content</div>
      </IntlProvider>
    );
    expect(getByText('Content')).toBeInTheDocument();
  });
});
