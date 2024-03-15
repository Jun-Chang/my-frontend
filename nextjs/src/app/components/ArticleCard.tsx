import Link from 'next/link';
import Image from 'next/image';
import React from 'react';
import Article from './types';

type ArticleCardProps = {
    article: Article;
};

const ArticleCard = ({article} : ArticleProps) => {
    return (
         <article className="shadow my-4 flex flex-col" key={article.id}>
            <Link href={`articles/${article.id}`} className="hover:opacity-75"> 
                 <Image
                     src="https://source.unsplash.com/collection/1346951/1000x500?sig=${article.id}"
                     alt=""
                     width={1280}
                     height={300}
                 />
            </Link>
            <div className="bg-white flex flex-col justify-start p-6">
                 <Link href={`articles/${article.id}`} className="text-blue-700 pb4 font-bold">Technology</Link>
                 <Link href={`/articles/${article.id}`} className="text-slate-900 text-3xl font-=bold hovber:text-gray-700 pb4">{article.title}</Link>
                 <p className="text-sm pb-3 text-slate-900">Published on {new Date(article.createdAt).toLocaleString()}</p>
                 <Link href={`/articles/${article.id}`} className='text-slate-900 pb-6'>
                     {article.content.length > 70 ? article.content.substring(0, 70) + '...' : article.content}
                 </Link>
                 <Link href={`/articles/${article.id}`} className="text-pink-800 hover:text-black">続きを読む</Link>
            </div>
         </article>
    );
}

export default ArticleCard;