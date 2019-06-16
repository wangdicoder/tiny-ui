import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import Message, { MessageProps, MessageType } from './message';
import raf from 'raf';

const className = '.ty-message-container';
const OFFSET = 15; // The gap between each message

type Options = { offset?: number, icon?: React.ReactNode, className?: string };
type CreateComponent = (
    type: MessageType, content: string, duration: number, onClose: () => void, options: Options,
) => void;
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

const createComponent: CreateComponent = (type, content, duration = 3000, onClose, options) => {
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
        type,
        content,
        duration,
        icon: options.icon,
        className: options.className,
        willUnmount: (height) => {
            const updatedTop = parseInt(div.style.top || '0', 10);
            unmountDom(div, updatedTop, height, onClose);
        },
    };
    const component = React.createElement(Message, props);
    render(component, div);
};

const messageContainer: any = (content: string, duration: number, onClose: () => void, options: Options) => {
    createComponent(undefined, content, duration, onClose, options);
};

['success', 'error', 'warning', 'info', 'loading'].forEach((type) => {
    messageContainer[type] = (content: string, duration: number, onClose: () => void, options: Options) => {
        createComponent((type as MessageType), content, duration, onClose, options);
    };
});

messageContainer.warn = messageContainer.warning;

export default messageContainer;