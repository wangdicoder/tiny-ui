import React, { useRef, useEffect } from 'react';
import hljs from 'highlight.js';
import './github.scss';

const CodeBlock = ({ value, language }) => {
    const codeEl = useRef(null);

    useEffect(() => {
        codeEl && hljs.highlightBlock(codeEl.current);
    });

    return (
        <pre className="code-pre">
            <code ref={codeEl} className={`language-${language}`}>
            {value}
            </code>
        </pre>
    );
};

CodeBlock.defaultProps = {
    language: 'js'
};

export default CodeBlock;
