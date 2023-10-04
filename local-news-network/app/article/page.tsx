'use client'

import React, { useState, useEffect } from 'react';
import { notFound } from 'next/navigation';
import axios from 'axios';
import Link from 'next/link'

const url = "https://img.freepik.com/free-photo/orange-background_23-2147674307.jpg?w=1800&t=st=1696369558~exp=1696370158~hmac=f6ef7830a4f88720593a21f736b976bc0c69a843c034299b0d4a363652208f42"

type Props = {
  searchParams?: Article;
};

function ArticlePage({ searchParams }: Props) {
  if (
    (searchParams && Object.entries(searchParams).length === 0) ||
    !searchParams
  ) {
    return notFound();
  }

  const article: Article = searchParams;
  // For summary 
  const [summary, setSummary] = useState<string | null>(null);
  // For loading indicator 
  const [loading, setLoading] = useState<boolean>(false);

  const fetchSummary = async () => {
    try {
      setLoading(true)
      const response = await axios.post('http://127.0.0.1:5000/summarize', {
        text: article.title + " " + article.description, // Use the article description as the input text
      }, {
        headers: {
          'Access-Control-Allow-Origin': '*'
        }
      });

      // Removing the unwanted items from summary 
      const cleanedSummary = response.data.summary
        .replace(/<pad>/g, ' ')
        .replace(/<n>/g, ' ')
        .replace(/<\/s>/g, ' ');

      setSummary(cleanedSummary);

    } catch (error) {
      console.error('Error:', error);
      setSummary('Summary not available'); // Handle the error
    } finally {
      setLoading(false);
    }

  };

  return (
    <article>
      <section className="flex flex-col w-fit pb-24 px-0 md:max-w-screen-xl mx-auto overflow-x-auto">
        {article.image && (
          <img
            className="h-50 max-w-md mx-auto md:max-w-lg lg:max-w-xl object-cover rounded-lg shadow-md p-2"
            src={article.image}
            alt={article.title}
            onError={(e) => {
              (e.currentTarget as HTMLImageElement).src = url;
              e.preventDefault()
            }}
          />
        )}
        <div className="p-4 md:px-10">
          <h1 className="headerTitle px-0 no-underline pb-2">
            {article.title}
          </h1>
          <div className='flex flex-col sm:flex-row'>
            <h2 className="font-bold pl-4"> By: {article.author || 'Unknown'}</h2>
            <h2 className="font-bold pl-4"> Source: {article.source}</h2>
            <p className="pl-4"> Date Published: {article.published_at}</p>
            {article.url && <p className="pl-4"><Link href={article.url}>  Link to post</Link></p>}
          </div>
          <p className="pt-4">{article.description}</p>
          <div className='flex items-center justify-center p-2'>
            <button className={`flex text-center h-10 items-center rounded-lg p-5 ${loading ? 'animate-pulse bg-gray-400' : 'bg-orange-400 hover:bg-orange-300'}`}
              onClick={fetchSummary}
              disabled={loading}>
              Get Summary</button>
          </div>
          {summary !== null && (
            <div className='fade-in'>
              <h2 className="headerTitle pl-4">Summary:</h2>
              <p className='p-4'>{summary}</p>
            </div>
          )}
        </div>
      </section>
    </article>
  );
}

export default ArticlePage;
