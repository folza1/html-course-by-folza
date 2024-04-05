import React from 'react';
import './article.css';

const Article = ({children, className}) => {

    return (
        <div className={className + " article"}>
            {children}
        </div>
    );
};
export default Article;
