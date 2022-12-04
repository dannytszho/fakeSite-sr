import Link from 'next/link'
import { linksType } from './Nav'

const fakeSiteLinks = [
    { name: 'About us', link: 'about-us' },
    { name: 'Press', link: 'press' },
    { name: 'Policies', link: 'policies' },
    { name: 'Help', link: 'help' },
]
const accountLinks = [
    { name: 'Edit Profile', link: 'edit-profile' },
    { name: 'Friends', link: 'friends' },
    { name: 'Social', link: 'social' },
    { name: 'Delete Profile', link: 'delete-profile' },
]

export default function Footer() {
    return (
        <>
            <div className="bg-gray-50 h-1/3 w-full flex md:flex-row flex-col items-start mx-10 md:mx-20 lg:mx-36 gap-10 md:gap-20">
                <div className="p-5">
                    <ul>
                        <p className="text-redish font-bold text-2xl pb-4">
                            Fakesite
                        </p>
                        {fakeSiteLinks.map((link: linksType) => (
                            <li key={link.name}>
                                <Link
                                    href={link.link}
                                    className="text-blueish text-md pb-2 hover:text-blue-600 cursor-pointer"
                                >
                                    {link.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="p-5">
                    <ul>
                        <p className="text-redish font-bold text-2xl pb-4">
                            Account
                        </p>
                        {accountLinks.map((link: linksType) => (
                            <li key={link.name}>
                                <Link
                                    href={link.link}
                                    className="text-blueish text-md pb-2 hover:text-blue-600 cursor-pointer"
                                >
                                    {link.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            <hr className="m-8 h-px bg-[#E8E8E8] border-0 dark:bg-gray-700"></hr>
            <div className="flex flex-col justify-center items-center text-center p-20 bg-gray-50">
                <h1 className=" text-gray-800 font-semibold">
                    This is a footer |
                    <span className="hover:text-blue-600 font-semibold cursor-pointer">
                        fakesite-sr
                    </span>
                </h1>
            </div>
        </>
    )
}
