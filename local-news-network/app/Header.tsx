import { Bars3Icon } from "@heroicons/react/20/solid"
import { EllipsisHorizontalCircleIcon } from "@heroicons/react/24/solid"
const Header = () => {
  return (
    <header>
        <div className="flex items-center justify-around text-center ps-8">
            <div className="flex-none">
                <Bars3Icon className="h-8 w-8 cursor-pointer"/>
            </div>
            <div className="flex-auto w-64">
                <a
                href="/"
                className="group rounded-lg border border-transparent px-5 py-4"
                >
                    <h1 className={`font-serif text-center mb-3 text-2xl font-semibold`}>Local News Network</h1>
                </a>
            </div>
            <div className="flex-none hidden md:inline px=4 lg:px-8 py-2 lg:py-4">
                <EllipsisHorizontalCircleIcon className="h-8 w-8 cursor-pointer"/>
            </div>

        </div>
    </header>
  )
}

export default Header