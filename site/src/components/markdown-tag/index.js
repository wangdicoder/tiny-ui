/**
 * @author Di Wang on 2019-11-11.
 */
import React from 'react';
import './md-tag.scss';
import { CodeBlock } from '../code-block';

const slugifyLink = (name) => {
  return name.toLowerCase().split(' ').join('-');
};

export const components = {
  wrapper: ({ history, location, match, ...props }) => <div {...props} className="markdown" />,
  h1: (props) => <h1 {...props} className="markdown__heading-1" />,
  h2: ({ children, ...props }) => (
    <h2 {...props} className="markdown__heading-2" id={slugifyLink(children)}>
      {children}
      <a href={`#${slugifyLink(children)}`}>#</a>
    </h2>
  ),
  h3: ({ children, ...props }) => (
    <h3 {...props} className="markdown__heading-3" id={slugifyLink(children)}>
      {children}
      <a href={`#${slugifyLink(children)}`}>#</a>
    </h3>
  ),
  h4: (props) => <h4 {...props} className="markdown__heading-4" />,
  h5: (props) => <h5 {...props} className="markdown__heading-5" />,
  h6: (props) => <h6 {...props} className="markdown__heading-6" />,
  table: (props) => <table {...props} className="markdown__table" />,
  p: (props) => <p {...props} className="markdown__p" />,
  ul: (props) => <ul {...props} className="markdown__list" />,
  li: (props) => <li {...props} className="markdown__list-item" />,
  blockquote: (props) => <blockquote {...props} className="markdown__blockquote" />,
  inlineCode: (props) => <code {...props} className="markdown__inline-code" />,
  pre: (props) => <div {...props} className="markdown__pre-container" />,
  code: (props) => <CodeBlock {...props} />,
  // Customised tags
  layout: (props) => <div {...props} className="markdown__layout" />,
  column: (props) => <div {...props} className="markdown__column" />,
  demo: (props) => <section {...props} className="markdown__demo" />,
};
