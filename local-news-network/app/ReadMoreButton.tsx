import { useRouter } from 'next/navigation';
import React from 'react'

type Props = { 
    placement: string;
    article: Article;
};


function ReadMoreButton({placement, article} : Props) {
    const router = useRouter();
  return (
    <button
    className='bg-orange-400 h-10 rounded-b-lg hover:bg-orange-500'>
     Read More   
    </button>
  )
}

export default ReadMoreButton
