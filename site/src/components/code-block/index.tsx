import React, { useState, useRef, useEffect } from 'react';
import './code-block.scss';
import Highlight, { defaultProps, Language, PrismTheme } from 'prism-react-renderer';
import MarkdownTheme from 'prism-react-renderer/themes/github';
import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live';
import EditorTheme from './editor-theme';
import * as Components from '../../../../components';

export type CodeBlockProps = {
  children: string;
  className: string;
  live?: boolean;
};

const CodeBlock = ({ children, className, live }: CodeBlockProps) => {
  const [showCode, setShowCode] = useState(false);
  const [editorContainerHeight, setEditorContainerHeight] = useState(0);
  const language: Language = className.replace(/language-/, '') as Language;
  const el = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    el.current && setEditorContainerHeight((el.current as HTMLDivElement).offsetHeight + 30); // padding 15px
  }, [el]);

  if (live) {
    return (
      <div className="code-block__container">
        <LiveProvider code={children.trim()} theme={EditorTheme as PrismTheme} scope={Components}>
          <LivePreview className="code-block__previewer" />
          <LiveError />
          {showCode && (
            <div className="code-block__editor-container" style={{ height: editorContainerHeight }}>
              <div className="code-block__editor-wrapper" ref={el}>
                <LiveEditor />
              </div>
            </div>
          )}
          <div className="code-block__controller" onClick={() => setShowCode(!showCode)}>
            {showCode ? 'Hide Code' : 'Show Code'}
          </div>
        </LiveProvider>
      </div>
    );
  }
  return (
    <Highlight
      {...defaultProps}
      code={children.trim()}
      language={language}
      theme={MarkdownTheme as PrismTheme}>
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <pre className={className} style={{ ...style, padding: '10px 12px' }}>
          {tokens.map((line, i) => (
            <div key={i} {...getLineProps({ line, key: i })} style={{ lineHeight: 1.3 }}>
              {line.map((token, key) => (
                <span key={key} {...getTokenProps({ token, key })} />
              ))}
            </div>
          ))}
        </pre>
      )}
    </Highlight>
  );
};

export default CodeBlock;
