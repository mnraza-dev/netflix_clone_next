import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Navbar() {
    return (
        <header>
            <nav className='flex space-x-2 md:space-x-10 items-center'>

                <Link
                    href={"/"}
                    className='text-lg text-white font-bold'>
                    <Image
                        src="/logo.png"
                        className='cursor-pointer object-contain'
                        alt="Netflix Logo "
                        width={100}
                        height={100} />
                </Link>
                {/* Mobile Menu */}
                <div className="md:hidden">
                    {/* Hamburger Icon */}
                </div>
                {/* Desktop Menu */}
                <ul className="hidden md:flex space-x-4">
                    <li className='text-sm text-gray-200 hover:underline'>
                        <Link href="/">Home</Link>
                    </li>
                    <li className='text-sm text-gray-200 hover:underline'>
                        <Link href="/">Movies</Link>
                    </li>
                    <li className='text-sm text-gray-200 hover:underline'>
                        <Link href="/">TV Shows</Link>
                    </li>

                    <li className='text-sm text-gray-200 hover:underline'>
                        <Link href="/">Latest</Link>
                    </li>

                </ul>
                <div className='font-light items-center space-x-4 text-sm md:space-x-6'>
                    <SearchIcon className='hidden h-6 w-6 md:inline' />
                </div>

            </nav>
        </header>
    )
}
