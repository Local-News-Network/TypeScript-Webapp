import { useRouter } from 'next/navigation';
import React from 'react'

type Props = {
  placement: string;
  article: Article;
};

function generate(placement: string) {
  return (placement === "0") 
    ? 'flex text-center bg-orange-400 h-10 items-center rounded-lg hover:bg-orange-300 p-5' 
    : 'bg-orange-400 h-10 rounded-b-lg hover:bg-orange-500'
}

function ReadMoreButton({ placement, article }: Props) {
  const router = useRouter();
  const handleClick = () => {
    const queryString = Object.entries(article)
      .map(([key, value]) => `${key}=${value}`)
      .join("&");

    const url = `/article?${queryString}`;
    router.push(url)


  }
  return (
    <button
      onClick={handleClick}
      className={generate(placement)}>
      Read More
    </button>
  )
}

export default ReadMoreButton
