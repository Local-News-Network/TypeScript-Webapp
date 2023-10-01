'use client'

import React, { useState } from 'react';
import { notFound } from 'next/navigation';
import axios from 'axios';

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

  const [summary, setSummary] = useState<string | null>(null);

  const fetchSummary = async () => {
    try {
      const response = await axios.post('http://localhost:5000/summarize', {
        text: article.description, // Use the article description as the input text
      });

      setSummary(response.data.summary);
    } catch (error) {
      console.error('Error:', error);
      setSummary('Summary not available'); // Handle the error
    }
  };

  return (
    <article>
      <section className="flex flex-col lg:flex-row pb-24 px-0 lg:max-w-xl">
        {article.image && (
          <img
            className="h-50 max-w-md mx-auto md:max-w-lg lg:max-w-xl object-cover rounded-lg shadow-md"
            src={article.image}
            alt={article.title}
          />
        )}
        <div className="px-10">
          <h1 className="headerTitle px-0 no-underline pb-2">
            {article.title}
          </h1>
          <div>
            <h2 className="font-bold"> By: {article.author || 'Unknown'}</h2>
            <h2 className="font-bold pl-4"> Source {article.source}</h2>
            <p className="pl-4">{article.published_at}</p>
          </div>
          <p>Summary</p>
          <p className="pt-4">{article.description}</p>
          <div>
            {/* <button onClick={fetchSummary}>Get Summary</button> */}
          </div>
          {summary !== null && (
            <div>
              <h2>Summary:</h2>
              <p>{summary}</p>
            </div>
          )}
        </div>
      </section>
    </article>
  );
}

export default ArticlePage;
