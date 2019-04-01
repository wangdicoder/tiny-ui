import React, { useEffect, useState } from 'react';
import MarkdownViewer from './MarkdownViewer';

export default (file) => {
    return () => {
        const [content, setContent] = useState('');

        useEffect(() => {
            fetch(file).then(response => response.text()).then(text => {
                setContent(text);
            }).catch(e => {
                console.log(e);
            });
        }, []);

        return (
            <MarkdownViewer content={content}/>
        );
    };
};
