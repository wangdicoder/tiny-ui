import React from 'react';
import { render } from 'react-dom';
import Message, { MessageProps, MessageType } from './message';

type CreateComponent = (
    content: string, duration: number, onClose: () => void, props: MessageProps,
) => void;

const createComponent: CreateComponent = (content, duration, onClose, props) => {
    const containers = document.querySelectorAll('.ty-message-container');
    const lastContainer = containers.length > 0 ? (containers[containers.length - 1] as HTMLElement) : null;

    const offset = props.offset || 15;
    const top = lastContainer ? parseInt(lastContainer.style.top || '0', 10) +
        lastContainer.offsetHeight + offset : offset;

    const div = document.createElement('div');
    div.className = 'ty-message-container';
    document.body.appendChild(div);
    div.style.top = `${top}px`;

    const component = React.createElement(Message, { type: props.type, content, duration, onClose, ...props });
    render(component, div);
};

const messageContainer: any = {};

['success', 'error', 'warning', 'info', 'loading'].forEach((type) => {
    messageContainer[type] = (
        content: string, duration: number, onClose: () => void, options: MessageProps = { type: (type as MessageType) },
    ) => createComponent(content, duration, onClose, options);
});

export default messageContainer;
