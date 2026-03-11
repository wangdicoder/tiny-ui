import React from 'react';
import ReactDOM from 'react-dom';

export interface PortalProps {
  container?: HTMLElement;
  children?: React.ReactNode;
}

const Portal = (props: PortalProps): React.ReactPortal | null => {
  const { container, children } = props;
  const target = container ?? (typeof document !== 'undefined' ? document.body : null);
  if (!target) return null;
  return ReactDOM.createPortal(children, target);
};

export default Portal;
