import React, { useRef, useState } from 'react';
import './code-block.scss';
import { Highlight, themes, type Language } from 'prism-react-renderer';
import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live';
import { LightCodeTheme, DarkCodeTheme } from './code-theme';
import * as Components from '../../../../components';
import CollapseTransition from '../../../../components/collapse-transition';
import { useTheme } from '../../../../components';

type Props = {
  children: string;
  className?: string;
  live?: boolean;
};

export const CodeBlock = ({ children, className, live }: Props): React.ReactElement => {
  const [showCode, setShowCode] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);
  const { resolvedTheme } = useTheme();
  const codeTheme = (resolvedTheme === 'dark' ? DarkCodeTheme : LightCodeTheme) as typeof themes.github;

  let language: Language = 'markup';
  if (className != null) {
    language = className.replace(/language-/, '') as Language;
  }

  if (live) {
    return (
      <div className="code-block__container" ref={ref}>
        <LiveProvider code={children.trim()} theme={codeTheme} scope={Components}>
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
      code={children.trim()}
      language={language}
      theme={codeTheme}>
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <pre className={className} style={{ ...style, padding: '10px 12px' }}>
          <code>
            {tokens.map((line, i) => {
              const { key: _lk, ...lineProps } = getLineProps({ line });
              return (
                <div key={i} {...lineProps}>
                  {line.map((token, j) => {
                    const { key: _tk, ...tokenProps } = getTokenProps({ token });
                    return <span key={j} {...tokenProps} />;
                  })}
                </div>
              );
            })}
          </code>
        </pre>
      )}
    </Highlight>
  );
};
