import React from 'react'
import { render, screen, waitFor } from '@testing-library/react'
import { setupServer } from 'msw/node'
import { graphql } from 'msw'
import VideosCard from '../../../components/VideosCard'
import 'whatwg-fetch'

const server = setupServer(
    graphql.query('getVideos', (req, res, ctx) =>
        res(
            ctx.data({
                videos: [
                    {
                        id: 1,
                        title: 'Cute dogs video',
                        description:
                            'A group of dogs playing around in a dog park',
                        thumbnail_medium:
                            'https://i.vimeocdn.com/video/1105089922_200x150.jpg',
                    },
                ],
            })
        )
    )
)

beforeAll(() => server.listen())
afterEach(() => server.resetHandlers())
afterAll(() => server.close())

test('gets the videos data', async () => {
    render(<VideosCard />)

    const out = await waitFor(() => screen.getByTestId('titleInfo').innerHTML)

    expect(out).toContain('Cute dogs video')
})
