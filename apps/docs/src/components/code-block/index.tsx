import React, { useRef, useState } from 'react';
import './code-block.scss';
import { Highlight, themes, Prism, type Language } from 'prism-react-renderer';

// Register bash/shell grammar (not included in prism-react-renderer's default bundle)
Prism.languages.bash = Prism.languages.shell = {
  comment: { pattern: /(^|[^"{\\$])#.*/, lookbehind: true },
  'shell-symbol': { pattern: /^\$(?=\s)/m, alias: 'punctuation' },
  string: [
    { pattern: /\$'(?:[^'\\]|\\[\s\S])*'/, greedy: true },
    { pattern: /(^|[^\\])"(?:[^"\\]|\\.)*"/, lookbehind: true, greedy: true },
    { pattern: /(^|[^\\])'[^']*'/, lookbehind: true, greedy: true },
  ],
  variable: [/\$\{[^}]+\}/, /\$\([^)]+\)/, /\$(?:\w+|[!#?*@_])/],
  keyword:
    /\b(?:if|then|else|elif|fi|for|do|done|case|esac|while|until|function|in|select|return|exit)\b/,
  function:
    /\b(?:npm|npx|node|yarn|pnpm|bun|git|curl|wget|mkdir|cp|mv|rm|ls|cat|grep|sed|awk|chmod|chown|sudo|apt|brew|pip|python|ruby|go|cargo|make|docker|cd|echo|export|source|touch)\b/,
  'flag': { pattern: /(^|\s)--?[\w-]+/, lookbehind: true, alias: 'keyword' },
  number: /\b\d+\b/,
  operator: /&&|\|\||[|;]/,
  punctuation: /[{}[\]()]/,
};
import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live';
import { LightCodeTheme, DarkCodeTheme } from './code-theme';
import * as Components from '@tiny-design/react';
import * as SvgIcons from '@tiny-design/icons';
import CollapseTransition from '@tiny-design/react/collapse-transition';
import { useTheme } from '@tiny-design/react';
import { useLocaleContext } from '../../context/locale-context';

type Props = {
  children: string;
  className?: string;
  live?: boolean;
};

export const CodeBlock = ({ children, className, live }: Props): React.ReactElement => {
  const [showCode, setShowCode] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);
  const { resolvedTheme } = useTheme();
  const { siteLocale: s } = useLocaleContext();
  const codeTheme = (resolvedTheme === 'dark' ? DarkCodeTheme : LightCodeTheme) as typeof themes.github;

  let language: Language = 'markup';
  if (className != null) {
    language = className.replace(/language-/, '') as Language;
  }

  if (live) {
    return (
      <div className="code-block__container" ref={ref}>
        <LiveProvider code={children.trim()} theme={codeTheme} scope={{ ...Components, ...SvgIcons }}>
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
            {showCode ? s.codeBlock.hideCode : s.codeBlock.showCode}
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
