import Link from 'next/link'
import { linksType } from './Nav'
import Image from 'next/image'
import LogoImage from '../public/assets/logo.png'

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

const footerNavLinks = [
    { name: 'Terms', link: 'terms' },
    { name: 'Privacy', link: 'privacy' },
    { name: 'Site Map', link: 'site-map' },
]

export default function Footer() {
    return (
        <div className="space-y-10 flex flex-col mx-10 md:mx-20 lg:mx-36 text-sm">
            <div className="bg-gray-50 h-1/3 w-full flex md:flex-row flex-col items-start gap-10 md:gap-20">
                <div className="py-5">
                    <ul>
                        <p className="text-redish font-bold pb-4">Fakesite</p>
                        {fakeSiteLinks.map((link: linksType) => (
                            <li key={link.name}>
                                <Link
                                    href={link.link}
                                    className="text-blueish pb-2 hover:text-blackish cursor-pointer"
                                >
                                    {link.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="py-5">
                    <ul>
                        <p className="text-redish font-bold pb-4">Account</p>
                        {accountLinks.map((link: linksType) => (
                            <li key={link.name}>
                                <Link
                                    href={link.link}
                                    className="text-blueish pb-2 hover:text-blackish cursor-pointer"
                                >
                                    {link.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            <div>
                <hr className="h-px bg-[#E8E8E8] border-0"></hr>
            </div>
            <div>
                <div className="fox-icon absolute">
                    <Image src={LogoImage} alt="A happy fox" />
                </div>
                <div className="footer-nav w-full bottom-0 left-0">
                    <div className="md:flex md:py-4 py-10 justify-end">
                        <ul className="md:flex md:items-center md:pb-0 pb-10 md:static md:z-auto z-[3] left-0 w-full md:w-auto md:pl-0 pl-9 absolute transition-all duration-500 ease-in">
                            {footerNavLinks.map((link: linksType) => (
                                <li
                                    key={link.name}
                                    className="md:ml-8 md:my-0 my-7"
                                >
                                    <Link
                                        href={link.link}
                                        className="text-blueish hover:text-blackish duration-500 mr-10"
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}
