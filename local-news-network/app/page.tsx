import { categories } from '@/constants'
import fetchNews from '../lib/fetchNews'
import NewsList from './NewsList';
import response from '../response.json'
import sortNewsByImage from '@/lib/sortNewsByImage';

async function Home() {
  // fetching news data 
  // const news: NewsResponse = await fetchNews(categories.join(','))
  const news : NewsResponse = response;

  return (
  <div>
    <NewsList news={news}/ >
  </div>
  );
}
export default Home;
