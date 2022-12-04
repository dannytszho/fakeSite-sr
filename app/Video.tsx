export const getVideosData = async () => {
    const response = await fetch('http://localhost:5100/api/graphql', {
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
    console.log(data)

    return data
}
