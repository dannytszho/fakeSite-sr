'use client'
import React, { useEffect, useState } from 'react'
import { getVideosData } from './getVideo'
import Image from 'next/image'
import { Video } from '../src/generated/graphql'

const url = 'http://localhost:5100/api/graphql'

export default function Videos() {
    const [videos, setVideos] = useState([])

    async function fetchVideo() {
        try {
            const videos = await getVideosData(url)
            return videos
        } catch (err: any) {
            throw new err()
        }
    }

    useEffect(() => {
        fetchVideo().then((video) => {
            setVideos(video.data.videos)
        })
    }, [])

    return (
        <>
            {videos?.map((video: Video) => (
                <div key={video.id}>
                    <div key={video.id}>{video.title}</div>
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
