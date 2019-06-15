import React, { ReactNode } from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import Notification, { NotificationProps } from './notification';
import raf from 'raf';
import { camelCaseToDash } from '../_utils/general';

const className = '.ty-notification-container';
const OFFSET = 15;

type NotificationPlacement = 'topLeft' | 'topRight' | 'bottomLeft' | 'bottomRight';
type Options = {
    title?: ReactNode,
    description?: ReactNode,
    footer?: ReactNode,
    duration?: number,
    placement?: NotificationPlacement,
    onClose?: React.MouseEventHandler,
    onClick?: React.MouseEventHandler,
};
type UnmountDom = (containerDiv: HTMLElement, top: number, height: number) => void;

const unmountDom: UnmountDom = (containerDiv, top, height) => {
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
};

const createComponent = (options: Options) => {
    const containers = document.querySelectorAll(className);
    const lastContainer = containers.length > 0 ? (containers[containers.length - 1] as HTMLElement) : null;

    const offset = OFFSET;
    const top = lastContainer ? parseInt(lastContainer.style.top || '0', 10) +
        lastContainer.offsetHeight + offset : offset;

    const div = document.createElement('div');
    const placement = options.placement || 'topRight';
    div.className = `ty-notification-container ty-notification-container_${camelCaseToDash(placement)}`;
    document.body.appendChild(div);
    div.style.top = `${top}px`;

    const props: NotificationProps = {
        title: options.title,
        description: options.description,
        footer: options.footer,
        duration: options.duration,
        onClose: options.onClose,
        onClick: options.onClick,
        willUnmount: (height) => {
            const updatedTop = parseInt(div.style.top || '0', 10);
            unmountDom(div, updatedTop, height);
        },
    };
    const element = React.createElement(Notification, props);
    render(element, div);
};

const open = (options: Options = {}) => {
    createComponent(options);
};

export default {
    open,
};
