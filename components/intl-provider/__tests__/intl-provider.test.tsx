import { render } from '@testing-library/react';
import IntlProvider from '../index';
import en_US from '../../locale/en_US';

describe('<IntlProvider />', () => {
  it('should render children', () => {
    const { getByText } = render(
      <IntlProvider locale={en_US}>
        <div>Content</div>
      </IntlProvider>
    );
    expect(getByText('Content')).toBeInTheDocument();
  });
});
