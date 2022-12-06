'use client'
import React, { useEffect, useState } from 'react'
import { getVideosData } from './getVideo'
import Image from 'next/image'
import { Video } from '../src/generated/graphql'

const url = 'http://localhost:5100/api/graphql'

export default function VideosCard() {
    const [videos, setVideos] = useState([])

    async function fetchVideo() {
        try {
            const res = await fetch(url, {
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

            const videos = await res.json()
            return videos
        } catch (err: any) {
            throw new err()
        }
    }

    useEffect(() => {
        let isMounted = true
        fetchVideo().then((video) => {
            setVideos(video.data.videos)
        })
        return () => {
            isMounted = false
        }
    }, [])

    return (
        <>
            {videos?.map((video: Video) => (
                <div key={video.id}>
                    <div>{video.title}</div>
                    <div>{video.description}</div>
                    <Image
                        src={video.thumbnail_medium}
                        width={400}
                        height={300}
                        alt="thumbnail"
                    />
                </div>
            ))}
        </>
    )
}
