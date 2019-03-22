import * as React from 'react';
import * as ReactDOM from 'react-dom';

export type PortalProps = {
    container?: HTMLElement,
    children?: React.ReactNode,
} & typeof defaultProps;

const defaultProps = {
    container: document.body,
};

const Portal = (props: PortalProps) => {
    const { container, children } = props;

    return ReactDOM.createPortal(children, container);
};

Portal.defaultProps = defaultProps;

export default Portal;
