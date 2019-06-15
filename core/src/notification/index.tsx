import React, { ReactNode } from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import Notification, { NotificationProps, NotificationPlacement } from './notification';

type Options = {
    title?: ReactNode,
    description?: ReactNode,
    footer?: ReactNode,
    duration?: number,
    placement?: NotificationPlacement,
};

const createComponent = (options: Options) => {
    const div = document.createElement('div');
    document.body.appendChild(div);

    const props: NotificationProps = {
        title: options.title,
        description: options.description,
        footer: options.footer,
        placement: options.placement || 'topRight',
        duration: options.duration,
        willUnmount: () => {
            unmountComponentAtNode(div);
            document.body.removeChild(div);
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
