import React, { useState } from 'react';
import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live';
import PropTypes from 'prop-types';
import theme from './editor-theme';

const CodeViewer = ({ scope, code, noInline }) => {
    const [showCode, setShowCode] = useState(false);

    return (
        <div className="code-viewer__container">
            <LiveProvider scope={scope} code={code} noInline={noInline} theme={theme}>
                <LivePreview className="code-viewer__previewer"/>
                <LiveError/>
                {showCode && (
                    <div className="code-viewer__editor">
                        <LiveEditor/>
                    </div>
                )}
                <div className="code-viewer__controller" onClick={() => setShowCode(!showCode)}>
                    {showCode ? 'Hide Code' : 'Show Code'}
                </div>
            </LiveProvider>
        </div>
    );
};

CodeViewer.propTypes = {
    scope: PropTypes.object,
    code: PropTypes.string,
};

CodeViewer.defaultProps = {
    noInline: true,
};

export default CodeViewer;
