'use client'

import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import StockImage from '../public/assets/stockimage.png'

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
const url = process.env.NEXT_PUBLIC_API_URL!

type VProps = {
    id: string
    title: string
    description: string
    thumbnail_medium: string
    url?: string
}

export default function VideosCard() {
    const [video, setVideo] = useState<VProps>()

    useEffect(() => {
        let isMounted = true

        const queryParam = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                query: `
                query videoByTitle($title: String!) {
                    video(title: $title) {
                        id
                        title
                        description
                        thumbnail_medium
                        url
                    }
                }
                `,
                variables: {
                    title: 'Manila is Full of Men Named Boy',
                },
            }),
        }

        fetch(url, queryParam)
            .then((res) => res.json())
            .then((v) => {
                if (isMounted) {
                    setVideo(v.data.video)
                }
                return null
            })
            .catch((e) => {
                throw e
            })

        return () => {
            isMounted = false
        }
    }, [])

    return (
        <div className="mt-[250px] md:mt-[300px] lg:mt-[400px] flex mx-3 gap-10 md:mx-10 flex-col-reverse md:flex-row">
            <div className="basis-2/3">
                <h1 className="text-lg text-blackish">{video?.title}</h1>
                <p className="whitespace-pre-line text-blueish">
                    {video?.description.replaceAll('<br />', '')}
                </p>
            </div>
            <div className="px-auto mx-auto w-full h-[250px] md:w-[463px] md:h-[257px]">
                <button type="button" className="overlay z-10 basis-1/3">
                    <a href={video?.url}>
                        <Image
                            src={StockImage}
                            className="mix-blend-overlay z-0"
                            alt="pic of a man cooking"
                        />
                    </a>
                </button>
            </div>
        </div>
    )
}
