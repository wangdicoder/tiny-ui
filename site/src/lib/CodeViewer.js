import React, { useState } from 'react';
import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live';
import PropTypes from 'prop-types';

const CodeViewer = ({ scope, code }) => {
    const [showCode, setShowCode] = useState(false);

    return (
        <div className="code-viewer__container">
            <LiveProvider scope={scope} code={code} noInline={true}>
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

export default CodeViewer;
