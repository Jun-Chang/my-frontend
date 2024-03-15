import { Article } from '@/types';
import Link from 'next/link';
import Image from 'next/image';
import React from 'react';
import ArticleCard from './ArticleCard';

type ArticleListProps = {
    articles: Article[];
};
const ArticleList: React.FC<ArticleListProps> = ({ articles }) => {
    return (
        <div>
            {articles.map((article) => (
                <ArticleCard article={article} />
            ))}
        </div>
    );
};

export default ArticleList;