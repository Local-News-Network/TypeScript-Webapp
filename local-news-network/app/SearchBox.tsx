'use client'
import { useRouter } from "next/navigation"
import { FormEvent, useState } from "react"


const SearchBox = () => {
    const [input, setInput] = useState('')
    const router = useRouter();

    const handleSearch = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!input) return;

        router.push(`/search?term=${input}`)

    }

  return (
    <form className='max-w-6xl mx-auto flex justify-between items-center px-5' onSubmit={handleSearch}>
        <input 
            type="text" 
            value={input}
            onChange={(it) => setInput(it.target.value)}
            placeholder="Search keywords" 
            className='w-full h-14 rounded-sm placeholder-grey-500 text-grey-500 flex-1 bg-transparent'
            />
        <button type='submit' 
        disabled={!input}
        className="text-orange-400 disabled:text-gray-400"
        >Search</button>

    </form>
  )
}

export default SearchBox
