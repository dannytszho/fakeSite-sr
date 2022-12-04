import 'reflect-metadata'
import type { NextApiRequest, NextApiResponse } from 'next'
import { ApolloServer } from 'apollo-server-micro'
import {
    buildSchema,
    Resolver,
    Query,
    Arg,
    ObjectType,
    Field,
    ID,
} from 'type-graphql'

@ObjectType()
export class Video {
    @Field(() => ID)
    name!: string
}

@Resolver(Video)
export class VideosResolver {
    @Query(() => [Video])
    videos(): Video[] {
        return [{ name: 'Video1' }, { name: 'Video2' }, { name: 'Video3' }]
    }
}

const schema = await buildSchema({
    resolvers: [VideosResolver],
})

const server = new ApolloServer({ schema })

export const config = {
    api: {
        bodyParser: false,
    },
}

const startServer = server.start()

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    await startServer
    await server.createHandler({ path: '/api/graphql' })(req, res)
}
