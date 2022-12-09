import { Resolver, Query, Arg, ID } from 'type-graphql'

import { Video } from './videos'
import videos from './videos.json'

@Resolver(Video)
export class VideosResolver {
    @Query(() => Video, { nullable: true })
    video(@Arg('title', () => String) title: string): Video | undefined {
        const video = videos.find((video) => video.title === title)
        if (video === undefined) {
            throw new Error('Video not found')
        }
        return video
    }

    @Query(() => [Video])
    videos(): Video[] {
        return videos
    }
}
