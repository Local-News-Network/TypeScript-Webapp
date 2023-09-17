import { useRouter } from 'next/navigation';
import React from 'react'

type Props = { 
    placement: string;
    article: Article;
};

function generate(placement) : string {
    ()
    return 'bg-orange-400 h-10 rounded-b-lg hover:bg-orange-500'

}

function ReadMoreButton({placement, article} : Props) {
    const router = useRouter();
  return (
    <button
    className={generate(placement)}
    >
     Read More   
    </button>
  )
}

export default ReadMoreButton
