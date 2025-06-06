import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { BellIcon, ChevronDown, SearchIcon, UserIcon } from 'lucide-react'
import { UserButton } from '@clerk/nextjs'
import MobileMenu from './mobile-menu'

export default function Navbar() {
    return (
        <header className=' fixed top-0 z-50 w-full bg-black/70 flex justify-between items-center px-8 backdrop-blur-sm'>
            <div className='flex space-x-2 md:space-x-10 items-center'>
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
                    <MobileMenu />
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
            </div>
            <div className='font-light flex items-center space-x-4 text-sm md:space-x-6'>
                <SearchIcon className='hidden h-6 w-6 md:inline' />
                <p className='hidden lg:inline'>Kids</p>
                <BellIcon className='h-6 w-6 cursor-pointer' />
                <Link href="/account">
                    <div className='flex items-center space-x-2 gap-2'>
                        <UserButton />
                        <ChevronDown className='h-6 w-6 cursor-pointer' />
                    </div>
                </Link>
            </div>
        </header>
    )
}
