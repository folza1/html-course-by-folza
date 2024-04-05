import React from 'react';
import './paragraph.css';
const Paragraph = ({children}) => {
    return (
        <div className="paragraph">
            {children}
        </div>
    );
};
export default Paragraph;
