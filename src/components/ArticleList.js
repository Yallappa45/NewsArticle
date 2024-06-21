import React from 'react';

const ArticleList = ({ articles }) => {
return (
    <div>
    {articles.map((article) => (
        <div key={article.url} className="article">
        <h2>{article.title}</h2>
        <p>{article.description}</p>
        <a href={article.url} target="_blank" rel="noopener noreferrer">
            Read more
        </a>
        </div>
    ))}
    </div>
);
};

export default ArticleList;
