import Link from 'next/link';
import React from 'react'

type Props = {
    category: string,
    isActive: boolean
}
const NavLink = ({category, isActive} : Props) => {
  return <Link href={`/news/${category}`} 
    className={`navLink ${isActive && 'underline underline-offset-4 font-bold text-lg'}`}
  
  >{category}</Link>;
}

export default NavLink
