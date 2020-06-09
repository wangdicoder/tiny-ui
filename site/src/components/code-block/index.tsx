import React, { useRef, useState } from 'react';
import './code-block.scss';
import Highlight, { defaultProps, Language, PrismTheme } from 'prism-react-renderer';
import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live';
import { CodeTheme } from './code-theme';
import * as Components from '../../../../components';
import CollapseTransition from '../../../../components/collapse-transition';

type Props = {
  children: string;
  className?: string;
  live?: boolean;
};

export const CodeBlock = ({ children, className, live }: Props): React.ReactElement => {
  const [showCode, setShowCode] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);
  let language: Language = 'markup';
  if (className != null) {
    language = className.replace(/language-/, '') as Language;
  }

  if (live) {
    return (
      <div className="code-block__container" ref={ref}>
        <LiveProvider code={children.trim()} theme={CodeTheme as PrismTheme} scope={Components}>
          <LivePreview className="code-block__previewer" />
          <LiveError />
          <CollapseTransition isShow={showCode}>
            <div
              className="code-block__editor-container"
              style={{
                maxWidth: ref.current ? (ref.current as HTMLDivElement).offsetWidth : 0,
              }}>
              <div className="code-block__editor-wrapper">
                <LiveEditor />
              </div>
            </div>
          </CollapseTransition>
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
      theme={CodeTheme as PrismTheme}>
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <pre className={className} style={{ ...style, padding: '10px 12px' }}>
          <code>
            {tokens.map((line, i) => (
              <div key={i} {...getLineProps({ line, key: i })}>
                {line.map((token, key) => (
                  <span key={key} {...getTokenProps({ token, key })} />
                ))}
              </div>
            ))}
          </code>
        </pre>
      )}
    </Highlight>
  );
};
