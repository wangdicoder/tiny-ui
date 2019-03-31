import React from 'react';
import ReactMarkdown from 'react-markdown';

const HEADINGS = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'];
const renderingGenerator = (props, type, className) => React.createElement(type, { ...props, className });

const MarkdownViewer = ({ content }) => {
    return (
        <ReactMarkdown
            source={content}
            renderers={{
                link: props => renderingGenerator(props, 'a', 'code-link'),
                heading: props => renderingGenerator(props, HEADINGS[props.level - 1], `code-heading-${props.level}`),
                paragraph: props => renderingGenerator(props, 'p', 'code-p'),
                table: props => <div
                    className="code-table-container">{renderingGenerator(props, 'table', 'code-table')}</div>,
            }}
        />
    );
};

export default MarkdownViewer;
