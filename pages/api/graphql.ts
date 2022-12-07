import 'reflect-metadata'
import type { NextApiRequest, NextApiResponse } from 'next'
import { ApolloServer } from 'apollo-server-micro'
import Cors from 'cors'
import { buildSchema } from 'type-graphql'
import { VideosResolver } from '../../src/schema/videos.resolver'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type FnType = (req: NextApiRequest, res: NextApiResponse, result: any) => void

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
function runMiddleware(req: NextApiRequest, res: NextApiResponse, fn: FnType) {
    return new Promise((resolve, reject) => {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        fn(req, res, (result: any) => {
            if (result instanceof Error) {
                return reject(result)
            }

            return resolve(result)
        })
    })
}

const server = new ApolloServer({ schema, introspection: true })

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
