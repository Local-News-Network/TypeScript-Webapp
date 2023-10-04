import Article from "./Article";


type Props = {
    news: NewsResponse
};

export default function NewsList({news} : Props) {
  // Sometimes Media stack API returns duplicate values
  // Create a set to keep track of unique article titles
  const uniqueTitles = new Set();
  
  // Filter the news data to remove duplicates based on titles
  const uniqueNewsData = news.data.filter((article) => {
    if (!uniqueTitles.has(article.title)) {
      uniqueTitles.add(article.title);
      return true;
    }
    return false;
  });

  return (
    <main className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-4">
      {uniqueNewsData.map((article) => (
        <Article key={article.title} article={article} />
      ))}
    </main>
  );
}