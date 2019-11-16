import React from 'react';
import ReactDOM from 'react-dom';

export interface PortalProps {
  container?: HTMLElement;
  children?: React.ReactNode;
}

const Portal = ({ container = document.body, ...restProps }: PortalProps) => {
  const { children } = restProps;
  return ReactDOM.createPortal(children, container);
};

export default Portal;
