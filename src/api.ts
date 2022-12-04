import { GraphQLClient } from 'graphql-request'
import { QueryClient } from '@tanstack/react-query'

import { getSdk } from '../src/generated/graphql'

const gqlClient = new GraphQLClient('http://localhost:5100/api/graphql')

export const { getVideos } = getSdk(gqlClient)

export const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            refetchOnMount: false,
            refetchOnWindowFocus: false,
            refetchOnReconnect: false,
        },
    },
})
