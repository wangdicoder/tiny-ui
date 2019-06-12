import React from 'react';
import { render } from 'react-dom';
import Message, { MessageProps } from './message';

const createComponent = (props: MessageProps) => {
    const div = document.createElement('div');
    document.body.appendChild(div);

    // const containers = document.querySelectorAll('.ty-message');
    // const lastContainer = containers.length > 0 ? (containers[containers.length - 1] as HTMLElement) : null;

    // props.top = lastContainer ?
    //     parseInt(lastContainer.style.top!, 10) + lastContainer.offsetHeight + props.offset : props.offset;

    const component = React.createElement(Message, {type: 'info', ...props});

    render(component, div);
};

type MessageContainer = { [name: string]: () => void };
const messageContainer: MessageContainer = {};

['success', 'error', 'warning', 'info', 'loading'].forEach((type) => {
    messageContainer[type] = (options = {}) => createComponent(options);
});

export default messageContainer;
