'use client'
import Link from 'next/link'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'
import { useState } from 'react'
import Image from 'next/image'
import LogoImage from '../public/assets/logo.png'
import ProfileImage from '../public/assets/profile.png'

type linksType = {
    name: string
    link: string
}

const links = [
    { name: 'Account', link: '/account' },
    { name: 'Help', link: '/help' },
]

export default function Nav() {
    const [isOpen, setIsOpen] = useState(true)
    return (
        <div className="mt-2 md:mt-4 md:mx-24 lg:mx-32">
            <div className="absolute m-4">
                <Image src={LogoImage} alt="A happy fox" />
            </div>
            <nav className="shawdow-md z-[2] w-full top-0 left-0">
                <div className="md:flex md:py-4 py-10 justify-end">
                    <div
                        onClick={() => setIsOpen(!isOpen)}
                        className="text-3xl absolute right-8 top-6 cursor-pointer md:hidden"
                    >
                        {isOpen ? (
                            <AiOutlineClose color="white" />
                        ) : (
                            <AiOutlineMenu color="white" />
                        )}
                    </div>
                    <ul
                        className={`md:flex md:items-center md:pb-0 pb-10 md:static md:z-auto z-[3] left-0 w-full md:w-auto md:pl-0 pl-9 absolute transition-all duration-500 ease-in ${
                            isOpen ? 'top-20' : 'top-[-490px]'
                        }`}
                    >
                        {links.map((link: linksType) => (
                            <li
                                key={link.name}
                                className="md:ml-8 text-xl md:my-0 my-7"
                            >
                                <Link
                                    href={link.link}
                                    className="text-white hover:text-gray-800 duration-500 mr-10"
                                >
                                    {link.name}
                                </Link>
                            </li>
                        ))}
                        <li style={{ borderRadius: '50%', overflow: 'hidden' }}>
                            <Image
                                src={ProfileImage}
                                height={50}
                                width={50}
                                alt="A smiley face of myself"
                            />
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}
