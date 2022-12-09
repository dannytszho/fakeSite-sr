import { GraphQLClient } from 'graphql-request'
import * as Dom from 'graphql-request/dist/types.dom'
import gql from 'graphql-tag'
export type Maybe<T> = T | null
export type InputMaybe<T> = Maybe<T>
export type Exact<T extends { [key: string]: unknown }> = {
    [K in keyof T]: T[K]
}
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
    [SubKey in K]?: Maybe<T[SubKey]>
}
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
    [SubKey in K]: Maybe<T[SubKey]>
}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
    ID: string
    String: string
    Boolean: boolean
    Int: number
    Float: number
}

export type Query = {
    __typename?: 'Query'
    video?: Maybe<Video>
    videos: Array<Video>
}

export type QueryVideoArgs = {
    title: Scalars['String']
}

export type Video = {
    __typename?: 'Video'
    description: Scalars['String']
    duration: Scalars['Float']
    embed_privacy: Scalars['String']
    height: Scalars['Float']
    id: Scalars['ID']
    stats_number_of_comments: Scalars['Float']
    stats_number_of_likes: Scalars['Float']
    stats_number_of_plays: Scalars['Float']
    tags: Scalars['String']
    thumbnail_large: Scalars['String']
    thumbnail_medium: Scalars['String']
    thumbnail_small: Scalars['String']
    title: Scalars['String']
    url: Scalars['String']
    user_id: Scalars['Float']
    user_name: Scalars['String']
    user_portrait_huge: Scalars['String']
    user_portrait_large: Scalars['String']
    user_portrait_medium: Scalars['String']
    user_portrait_small: Scalars['String']
    user_url: Scalars['String']
    width: Scalars['Float']
}

export type VideoByTitleQueryVariables = Exact<{
    title: Scalars['String']
}>

export type VideoByTitleQuery = {
    __typename?: 'Query'
    video?: {
        __typename?: 'Video'
        id: string
        title: string
        description: string
        thumbnail_medium: string
        url: string
    } | null
}

export type GetVideosQueryVariables = Exact<{ [key: string]: never }>

export type GetVideosQuery = {
    __typename?: 'Query'
    videos: Array<{
        __typename?: 'Video'
        id: string
        title: string
        description: string
        thumbnail_medium: string
    }>
}

export const VideoByTitleDocument = gql`
    query videoByTitle($title: String!) {
        video(title: $title) {
            id
            title
            description
            thumbnail_medium
            url
        }
    }
`
export const GetVideosDocument = gql`
    query getVideos {
        videos {
            id
            title
            description
            thumbnail_medium
        }
    }
`

export type SdkFunctionWrapper = <T>(
    action: (requestHeaders?: Record<string, string>) => Promise<T>,
    operationName: string,
    operationType?: string
) => Promise<T>

const defaultWrapper: SdkFunctionWrapper = (
    action,
    _operationName,
    _operationType
) => action()

export function getSdk(
    client: GraphQLClient,
    withWrapper: SdkFunctionWrapper = defaultWrapper
) {
    return {
        videoByTitle(
            variables: VideoByTitleQueryVariables,
            requestHeaders?: Dom.RequestInit['headers']
        ): Promise<VideoByTitleQuery> {
            return withWrapper(
                (wrappedRequestHeaders) =>
                    client.request<VideoByTitleQuery>(
                        VideoByTitleDocument,
                        variables,
                        { ...requestHeaders, ...wrappedRequestHeaders }
                    ),
                'videoByTitle',
                'query'
            )
        },
        getVideos(
            variables?: GetVideosQueryVariables,
            requestHeaders?: Dom.RequestInit['headers']
        ): Promise<GetVideosQuery> {
            return withWrapper(
                (wrappedRequestHeaders) =>
                    client.request<GetVideosQuery>(
                        GetVideosDocument,
                        variables,
                        { ...requestHeaders, ...wrappedRequestHeaders }
                    ),
                'getVideos',
                'query'
            )
        },
    }
}
export type Sdk = ReturnType<typeof getSdk>
