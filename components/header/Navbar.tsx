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

            </nav>
        </header>
    )
}
