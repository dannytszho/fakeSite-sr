'use client'

import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { Video } from '../src/generated/graphql'

const url = 'https://fake-site-sr.vercel.app/api/graphql'

export default function VideosCard() {
    const [videos, setVideos] = useState([])

    useEffect(() => {
        let isMounted = true

        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                query: `
                query getVideos {
                    videos {
                        id
                        title
                        description
                        thumbnail_medium
                    }
                }            
                `,
            }),
        })
            .then((res) => res.json())
            .then((video) => {
                if (isMounted) {
                    setVideos(video.data.videos)
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
        <div>
            {videos?.map((video: Video) => (
                <div key={video.id}>
                    <div data-testid="titleInfo">{video.title}</div>
                    <p>{video.description}</p>
                    <Image
                        src={video.thumbnail_medium}
                        width={400}
                        height={300}
                        alt="thumbnail"
                    />
                </div>
            ))}
        </div>
    )
}
