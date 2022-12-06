# Fake Site

Thank you for taking the time to take part in this coding assessment. Instructions are listed below, and if you have any questions, please email dan@firststreet.org directly. Please remember to be mindful of attention to detail with your build and the mockup provided.

1. Build a fake website using `mockup.png` as your guide. The style guide is located in `StyleGuide.png`.
2. Use NextJS and ensure components are created where relevant
3. No mobile mockup is provided, how do you think this mobile site should look and function like?
4. Imagine the different pages where mockups arent provided but are branched from the homepage mockup (such as a user account page, login, logout). How does these pages work across the app? How do you manage the state across your application? Use whichever state management methodologies you are familiar with
5. Please integrate Jest as a unit testing framework across the components that you built.
6. Upload code to GitHub. Please hook up a CI/CD workflow that: A) Lints project, 2) Tests project, 3) Deploys somewhere
7. When you are done, please email the repository/app link to dan@firststreet.org

Every other assets are located in the `assets` folder and fonts are located in `fonts`.

## Video Section

For the video section of the site, use this API source as your video. You do not have to build a video player, but you can open the link to Vimeo itself.

For every item in this json file, render the video section. Use the thumbnail that is provided in the API response if you can.

Vimeo Videos api (or use videos.json in the zip):

```
https://vimeo.com/api/v2/channel/staffpicks/videos.json
```

### Videos API Requirements

(Please be ensure to build out your API as an API route)[https://nextjs.org/docs/api-routes/introduction]. This API route must be a GraphQL backend that supports the mockup. An example schema is provided below, feel free to modify as needed.

```graphql
schema {
    query: Root
}

type Root {
    videos: [Video]
}

type Video {
    id: integer
    title: string
    description: string
    thumbnail: string
}
```
