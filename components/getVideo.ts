export const getVideosData = async (url: string) => {
    const response = await fetch(url, {
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

    if (!response.ok) throw new Error('Error!')

    const data = await response.json()
    // console.log(data.videos)
    // const videosData = await Promise.all(
    //     data.videos.map(async (obj: any) => {
    //         return { ...obj }
    //     })
    // )
    // console.log(videosData)

    return data
}
