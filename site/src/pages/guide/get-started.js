import React from 'react';
import './code-view.scss';
import MdFile from '../../docs/guide/get-started.md';
import CodeView from 'react-code-view';

import { Button } from 'tiny-ui/src';

const GetStarted = () => {

    return (
        <div>
            <CodeView dependencies={{ Button }}>
                {require('./button.md')}
            </CodeView>
        </div>
    );
};

export default GetStarted;
