import 'reflect-metadata'
import type { NextApiRequest, NextApiResponse } from 'next'
import { ApolloServer } from 'apollo-server-micro'
import Cors from 'cors'
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
    name?: string
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

// Initializing the cors middleware
// You can read here: https://github.com/expressjs/cors#configuration-options
const cors = Cors({
    methods: ['POST'],
})

// Helper method to wait for a middleware to execute before continuing
// And to throw an error when an error happens in a middleware
function runMiddleware(
    req: NextApiRequest,
    res: NextApiResponse,
    fn: Function
) {
    return new Promise((resolve, reject) => {
        fn(req, res, (result: any) => {
            if (result instanceof Error) {
                return reject(result)
            }

            return resolve(result)
        })
    })
}

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
    // Run cors middleware (to allow Apollo Studio access)
    await runMiddleware(req, res, cors)
    // run apollo server
    await startServer
    await server.createHandler({ path: '/api/graphql' })(req, res)
}
