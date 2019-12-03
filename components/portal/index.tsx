import React from 'react';
import ReactDOM from 'react-dom';

export interface PortalProps {
  container?: HTMLElement;
  children?: React.ReactNode;
}

const Portal = (props: PortalProps) => {
  const { container = document.body, children } = props;
  return ReactDOM.createPortal(children, container);
};

export default Portal;
