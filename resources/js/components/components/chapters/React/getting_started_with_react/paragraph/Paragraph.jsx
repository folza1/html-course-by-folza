import React from 'react';
import './paragraph.css';

const Paragraph = ({children}) => {

    return (
        <p className="paragraph">
            {children}
        </p>
    );
};
export default Paragraph;
