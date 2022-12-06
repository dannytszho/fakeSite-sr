'use client'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { Video } from '../src/generated/graphql'

const url = 'http://localhost:5100/api/graphql'

export default function VideosCard() {
    const [videos, setVideos] = useState([])

    useEffect(() => {
        let isMounted = true
        try {
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
                })
        } catch (err) {
            console.log(err)
        }

        return () => {
            isMounted = false
        }
    }, [])

    return (
        <div>
            {videos?.map((video: Video) => (
                <div key={video.id}>
                    <div data-testid="titleInfo">{video.title}</div>
                    <div>{video.description}</div>
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
