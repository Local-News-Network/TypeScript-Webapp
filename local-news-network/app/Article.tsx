'use client'
import React, { useState } from 'react';
import ReadMoreButton from './ReadMoreButton';

type Props = {
  article: Article;
};

function Article({ article }: Props) {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

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
            className={`h-56 w-full object-cover rounded-t-lg shadow-md transition-opacity align-center ${
              isHovered ? 'opacity-70' : 'opacity-100'
            }`}
          />
          {isHovered && (
            <div className="absolute top-0 left-0 right-0 bottom-0 flex flex-col justify-center items-center text-center bg-black bg-opacity-60 p-4">
              <h2 className="text-md font-serif font-semibold overflow-hidden overflow-ellipsis">{article.title}</h2>
              <p className="text-xs line-clamp-2 overflow-hidden overflow-ellipsis">{article.description}</p>
              <ReadMoreButton placement={"0"} article={article}/>
            </div>
          )}
        </>
      ) :
      <div className='flex-1 flex flex-col'>
        <div className='flex-1 flex flex-col p-4'>
          <h2 className="text-lg font-serif font-semibold overflow-hidden overflow-ellipsis">{article.title}</h2>
          <section className='mt-2 flex-1'>
            <p className="text-xs line-clamp-6 overflow-hidden overflow-ellipsis">{article.description}</p>
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