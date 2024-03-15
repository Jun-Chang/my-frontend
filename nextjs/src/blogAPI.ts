import { notFound } from 'next/navigation';
import { Article } from './types';

export const getAllArticles = async (): Promise<Article[]> => {
    // SSR or SSG or CSR or ISR cacheの設定で変わる (今回はSSR)
    const res = await fetch(`http://localhost:3001/posts`, {cache: "no-store"});
    if (!res.ok) {
        throw new Error('エラーが発生しました');
    }
    
    // ローディング表示用に意図的に遅延させる
    await new Promise((resolve) => setTimeout(resolve, 1000));

    const articles = await res.json();
    return articles
};

export const getDetailArticle = async (id: string): Promise<Article> => {
    // ISR
    const res = await fetch(`http://localhost:3001/posts/${id}`,{
        next: { revalidate: 60 },
    });
    if (res.status === 404) {
        notFound();
    }
    
    if (!res.ok) {
        throw new Error('エラーが発生しました');
    }
    
    await new Promise((resolve) => setTimeout(resolve, 1000));

    const article = await res.json();
    return article
};

export const createArticle = async (id: string, title: string, content: string): Promise<Article> => {
    const currentDatetime = new Date().toISOString();
    const res = await fetch(`http://localhost:3001/posts`, {
        method: 'POST',
        headers:{
            'Content-Type': 'application/json',
        }, 
         body: JSON.stringify({id, title, content, createdAt: currentDatetime}),
    });

    if (!res.ok) {
        throw new Error('エラーが発生しました');
    }
    
    await new Promise((resolve) => setTimeout(resolve, 1000));

    const newArticle = await res.json();
    return newArticle;
};

export const deleteArticle = async (id: string): Promise<Article> => {
    const res = await fetch(`http://localhost:3001/posts/${id}`, {
        method: 'DELETE',
    });
    
    if (!res.ok) {
        throw new Error('エラーが発生しました');
    }
    
    await new Promise((resolve) => setTimeout(resolve, 1000));

    const article = await res.json();
    return article
};