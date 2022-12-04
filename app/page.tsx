import Image from 'next/image'
import { Video } from '../src/generated/graphql'
import { getVideosData } from './Video'

const url = 'http://localhost:5100/api/graphql'

export default async function HomePage() {
    const videos = await getVideosData(url)
    console.log(videos.data)
    return (
        <div className="mt-96 h-full">
            {videos.data.videos.map((video: Video) => (
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
            <h1>The world&apos;s greatest fake site</h1>
            <span>
                Create the world&apos;s greatest fake site and enjoy the breeze
                of fresh air when you complete it
            </span>
            <button>Do something awesome</button>
            <h2>Video Title (from videos.json)</h2>
            <span>Video Description (from videos.json)</span>
            <h3>Ready to have your cake and eat it too?</h3>
            <span>
                Start by designing the experience you have in mind. We&apos;ll
                guide you through each step. If your experience meets the
                quality standards, you&apos;ll hear more about what&apos;s next.
            </span>
        </div>
    )
}
