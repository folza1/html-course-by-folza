import React from 'react';
import './article.css';

const Article = ({children}) => {

    return (
        <div className="article">
            {children}
        </div>
    );
};
export default Article;
