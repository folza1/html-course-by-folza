import React, { useState } from 'react';
import './codedisplay.css';

const CodeDisplay = ({ code }) => {
    const [copied, setCopied] = useState(false);

    const handleCopyClick = () => {
        navigator.clipboard.writeText(code);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000); // Reset copied state after 2 seconds
    };

    return (
        <div className="code-display">
            <button className="copy-button" onClick={handleCopyClick}>{copied ? 'Copied!' : 'Copy code'}</button>
            <pre className="background-color">
                {code}
            </pre>
        </div>
    );
};

export default CodeDisplay;
