import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import Message, { MessageProps, MessageType } from './message';
import raf from 'raf';

const className = '.ty-message-container';
const OFFSET = 15; // The gap between each message

type Options = { type: MessageType, offset?: number };
type CreateComponent = (content: string, duration: number, onClose: () => void, options: Options) => void;
type UnmountDom = (containerDiv: HTMLElement, top: number, height: number, onClose?: () => void) => void;

const unmountDom: UnmountDom = (containerDiv, top, height, onClose) => {
    unmountComponentAtNode(containerDiv);
    document.body.removeChild(containerDiv);
    raf(() => {
        const containers = document.querySelectorAll(className);
        const len = containers.length;
        for (let i = 0; i < len; i++) {
            const element = containers[i] as HTMLElement;
            const elementTop = parseInt((element as HTMLElement).style.top || '0', 10);
            elementTop > top && (element.style.top = `${elementTop - height - OFFSET}px`);
        }
    });
    onClose && onClose();
};

const createComponent: CreateComponent = (content, duration = 3000, onClose, options) => {
    const containers = document.querySelectorAll(className);
    const lastContainer = containers.length > 0 ? (containers[containers.length - 1] as HTMLElement) : null;

    const offset = options.offset || OFFSET;
    const top = lastContainer ? parseInt(lastContainer.style.top || '0', 10) +
        lastContainer.offsetHeight + offset : offset;

    const div = document.createElement('div');
    div.className = 'ty-message-container';
    document.body.appendChild(div);
    div.style.top = `${top}px`;

    const props: MessageProps = {
        ...options,
        type: options.type,
        content,
        duration,
        willUnmount: (height) => {
            const updatedTop = parseInt(div.style.top || '0', 10);
            unmountDom(div, updatedTop, height, onClose);
        },
    };
    const component = React.createElement(Message, props);
    render(component, div);
};

const messageContainer: any = {};

['success', 'error', 'warning', 'info', 'loading'].forEach((type) => {
    messageContainer[type] = (content: string, duration: number, onClose: () => void, options: Options) => {
        createComponent(content, duration, onClose, { ...options, type: (type as MessageType) });
    };
});

messageContainer.warn = messageContainer.warning;

export default messageContainer;
