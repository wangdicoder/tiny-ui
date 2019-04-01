import React, { useEffect, useState } from 'react';
import MarkdownViewer from './MarkdownViewer';
import composeCodeExamples from './composeCodeExamples';

export default ({ componentName, examples, dependencies }) => {
    const file = require(`../docs/component/${componentName}/index.md`);
    const renderCoderViews = composeCodeExamples(componentName, examples, dependencies);

    return () => {
        const [contents, setContents] = useState(['', '']);
        useEffect(() => {
            fetch(file).then(response => response.text()).then(text => {
                const res = text.split('<!--{demo}-->');
                setContents(res);
            }).catch(e => {
                console.log(e);
            });
        }, []);

        return (
            <>
                <MarkdownViewer content={contents[0]}/>
                {renderCoderViews}
                <MarkdownViewer content={contents[1]}/>
            </>
        );
    };

};
