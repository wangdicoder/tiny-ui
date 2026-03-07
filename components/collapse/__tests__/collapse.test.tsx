import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Collapse from '../index';

describe('<Collapse />', () => {
  it('should match the snapshot', () => {
    const { asFragment } = render(
      <Collapse>
        <Collapse.Panel header="Panel 1" panelKey="1">Content 1</Collapse.Panel>
        <Collapse.Panel header="Panel 2" panelKey="2">Content 2</Collapse.Panel>
      </Collapse>
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it('should render correctly', () => {
    const { container } = render(
      <Collapse>
        <Collapse.Panel header="Panel" panelKey="1">Content</Collapse.Panel>
      </Collapse>
    );
    expect(container.firstChild).toHaveClass('ty-collapse');
  });

  it('should render panel headers', () => {
    const { getByText } = render(
      <Collapse>
        <Collapse.Panel header="Header 1" panelKey="1">Content 1</Collapse.Panel>
        <Collapse.Panel header="Header 2" panelKey="2">Content 2</Collapse.Panel>
      </Collapse>
    );
    expect(getByText('Header 1')).toBeInTheDocument();
    expect(getByText('Header 2')).toBeInTheDocument();
  });

  it('should toggle panel on click', () => {
    const { getByText } = render(
      <Collapse>
        <Collapse.Panel header="Toggle" panelKey="1">Content</Collapse.Panel>
      </Collapse>
    );
    fireEvent.click(getByText('Toggle'));
    expect(getByText('Content')).toBeInTheDocument();
  });
});
