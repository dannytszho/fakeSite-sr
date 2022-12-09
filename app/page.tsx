import React from 'react'

import VideosCard from '../components/VideosCard'

export default function HomePage() {
    return (
        <div className="flex flex-col">
            {/*  Hero section    */}
            <section className="place-items-center mt-28 text-center">
                <h1 className="text-lg">The world&apos;s greatest fake site</h1>
                <p className="text-sm text-[#FFF]">
                    Create the world&apos;s greatest fake site and enjoy
                    <br />
                    the breeze of fresh air when you complete it
                </p>
                <button
                    type="button"
                    className="text-[#FFF] text-sm mt-6 bg-redish min-h-[55px] px-8 rounded-full"
                >
                    Do something awesome
                </button>
            </section>

            <VideosCard />
            {/*  Content section    */}
            <div className="text-center mt-6">
                <h2 className="text-md">
                    Ready to have your cake and eat it too?
                </h2>
                <p className="text-sm">
                    Start by designing the experience you have in mind.
                    We&apos;ll guide you through each step. If
                    <br />
                    your experience meets the quality standards, you&apos;ll
                    hear more about what&apos;s next.
                </p>
            </div>
        </div>
    )
}
