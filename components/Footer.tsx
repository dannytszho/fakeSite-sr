export default function Footer() {
    return (
        <>
            <div className="bg-gray-50 h-1/3 w-full flex md:flex-row flex-col items-start">
                <div className="p-5">
                    <ul>
                        <p className="text-gray-800 font-bold text-2xl pb-4">
                            Fakesite
                        </p>
                        <li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
                            About Us
                        </li>
                        <li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
                            Press
                        </li>
                        <li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
                            Policies
                        </li>
                        <li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
                            Help
                        </li>
                    </ul>
                </div>
                <div className="p-5">
                    <ul>
                        <p className="text-gray-800 font-bold text-2xl pb-4">
                            Account
                        </p>
                        <li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
                            Edit Profile
                        </li>
                        <li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
                            Friends
                        </li>
                        <li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
                            Social
                        </li>
                        <li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
                            Delete Profile
                        </li>
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
