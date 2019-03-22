import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Container from '../container';
import classNames from 'classnames';

const messageContainer = {};
const messageDOM = {};

const createMessage = (content: string, placement: string = 'top-center') => {
    if (placement && !messageContainer[placement]) {
        const div = document.createElement('div');
        document.body.appendChild(div);
        div.className = classNames('w-notify-warpper', placement);
        messageDOM[placement] = div;
        messageContainer[placement] = ReactDOM.render(<Container/>, div);
    }

};

const Message: any = {
    open: createMessage,

};

export default Message;
