import React, { useEffect, useState } from 'react';
import CodeViewer from './CodeViewer';
import MarkdownViewer from './MarkdownViewer';

const matchCodeString = (text) => {
    const reg = /```js([\s\S]*?)```/;
    const res = reg.exec(text);
    return res && res[1];
};

const getHeaderString = (text) => {
    const results = text.split('<!--start-code-->');
    return results[0];
};

const LoadSourceCodeViewer = ({ componentName, example, scope }) => {
    const [code, setCode] = useState('');
    const [md, setMd] = useState('');

    useEffect(() => {
        const file = require(`../docs/component/${componentName}/${example}.md`);
        fetch(file).then(response => response.text()).then(text => {
            const codeString = matchCodeString(text);
            const mdString = getHeaderString(text);
            setCode(codeString.trim());
            setMd(mdString);
        }).catch(e => {
            console.log(e);
        });
    }, []);

    if (!code) return 'loading...';
    return (
        <div>
            <MarkdownViewer content={md}/>
            <CodeViewer code={code} scope={scope}/>
        </div>
    );
};

const composeCodeExamples = (componentName, examples, dependencies) => {
    const views = [];
    examples.forEach((example, idx) => {
        views.push(
            <LoadSourceCodeViewer key={idx} componentName={componentName} example={example} scope={dependencies}/>,
        );
    });

    return views;
};

export default composeCodeExamples;
