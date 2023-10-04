'use client'
import React, { useState } from 'react';
import ReadMoreButton from './ReadMoreButton';

type Props = {
  article: Article;
};
const url = "https://img.freepik.com/free-photo/orange-background_23-2147674307.jpg?w=1800&t=st=1696369558~exp=1696370158~hmac=f6ef7830a4f88720593a21f736b976bc0c69a843c034299b0d4a363652208f42"

function Article({ article }: Props) {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  // regex
  let description = article.description.replace(/&#(8230|8211|8217);/g, match => ({
    '8230': '...',
    '8211': '-',
    '8217': '’',
  }[match.slice(2, -1)] || match));

  return (
    <article
      className="relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div>
      {article.image ? (
        <>
          <img
            src={article.image}
            alt={article.title}
            className={`h-56 w-full object-cover rounded-lg shadow-md transition-opacity align-center ${
              isHovered ? 'opacity-70' : 'opacity-100'
            }`}
            onError={(e) => {
              (e.currentTarget as HTMLImageElement).src = url;
              e.preventDefault()
            }}
          />
          {isHovered && (
            <div className="absolute top-0 left-0 right-0 bottom-0 flex flex-col justify-center items-center text-center bg-black bg-opacity-60 p-4">
              <h2 className="text-md font-serif font-semibold overflow-hidden overflow-ellipsis">{article.title}</h2>
              <p className="text-xs line-clamp-2 overflow-hidden overflow-ellipsis">{description}</p>
              <hr className="p-2 border-t-0 bg-transparent bg-gradient-to-r from-transparent via-neutral-500 to-transparent opacity-25 dark:opacity-100" />
              <ReadMoreButton placement={"0"} article={article}/>
            </div>
          )}
        </>
      ) :
      <div className='flex-1 flex flex-col h-56'>
        <div className='flex-1 flex flex-col p-4'>
          <h2 className="text-lg font-serif font-semibold overflow-hidden overflow-ellipsis">{article.title}</h2>
          <section className='mt-2 flex-1'>
            <p className="text-xs line-clamp-2 overflow-hidden overflow-ellipsis">{description}</p>
          </section>
        </div>
        <ReadMoreButton placement={"1"} article={article}/>
      </div>
      }
      </div>
    </article>
  );
}

export default Article;