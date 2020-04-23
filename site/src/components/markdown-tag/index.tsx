/**
 * @author Di Wang on 2019-11-11.
 */
import React from 'react';
import './md-tag.scss';
import { Components } from '@mdx-js/react';
import { CodeBlock } from '../code-block';

const components: Components = {
  h1: (props: any) => <h1 {...props} className="md__heading-1" />,
  h2: (props: any) => <h2 {...props} className="md__heading-2" />,
  h3: (props: any) => <h3 {...props} className="md__heading-3" />,
  h4: (props: any) => <h4 {...props} className="md__heading-4" />,
  h5: (props: any) => <h5 {...props} className="md__heading-5" />,
  h6: (props: any) => <h6 {...props} className="md__heading-6" />,
  table: (props: any) => <table {...props} className="md__table" />,
  p: (props: any) => <p {...props} className="md__p" />,
  a: (props: any) => (
    <a {...props} className="md__link" target="_blank" rel="noopener noreferrer" />
  ),
  li: (props: any) => <li {...props} className="md__list-item" />,
  blockquote: (props: any) => <blockquote {...props} className="md__blockquote" />,
  inlineCode: (props: any) => <code {...props} className="md__inline-code" />,
  pre: (props: any) => <div {...props} className="md__pre-container" />,
  code: (props: any) => <CodeBlock {...props} />,
  // Customised tags
  layout: (props: any) => <div {...props} className="md__layout" />,
  column: (props: any) => <div {...props} className="md__column" />,
  demo: (props: any) => <section {...props} className="md__demo" />,
};

export { components };
