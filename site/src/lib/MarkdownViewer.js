import React from 'react';
import ReactMarkdown from 'react-markdown';
import CodeBlock from './CodeBlock';

const HEADINGS = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'];
const renderingGenerator = (props, type, className) => React.createElement(type, { children: props.children, className });

const MarkdownViewer = ({ content }) => {
	return (
		<ReactMarkdown
			source={content}
			renderers={{
                link: props => <a className="code-link" href={props.href} target="_blank">{props.children}</a>,
				heading: props => renderingGenerator(props, HEADINGS[props.level - 1], `code-heading-${props.level}`),
				paragraph: props => renderingGenerator(props, 'p', 'code-p'),
				table: props => <div className="code-table-container">{renderingGenerator(props, 'table', 'code-table')}</div>,
				code: CodeBlock,
                inlineCode: props => renderingGenerator(props, 'code', 'code-inline-code'),
			}}
		/>
	);
};

export default MarkdownViewer;
