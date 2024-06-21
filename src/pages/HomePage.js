import axios from 'axios';
import React, { useEffect, useState } from 'react';
import ArticleList from '../components/ArticleList';
import CategoryFilter from '../components/CategoryFilter';
import Pagination from '../components/Pagination';

const HomePage = () => {
const [articles, setArticles] = useState([]);
const [category, setCategory] = useState('general');
const [page, setPage] = useState(1);

useEffect(() => {
    const fetchArticles = async () => {
    const response = await axios.get(`https://newsapi.org/v2/top-headlines`, {
        params: {
        category,
        page,
        pageSize: 10,
        apiKey: 'cfaf20a17c994f39856346353086e8a9',
        },
    });
    setArticles(response.data.articles);
    };
    fetchArticles();
}, [category, page]);

return (
    <div>
    <CategoryFilter category={category} setCategory={setCategory} />
    <ArticleList articles={articles} />
    <Pagination page={page} setPage={setPage} />
    </div>
);
};

export default HomePage;
