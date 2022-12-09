import { ObjectType, Field, ID } from 'type-graphql'

@ObjectType()
export class Video {
    @Field(() => ID)
    id!: number

    @Field(() => String)
    title!: string

    @Field(() => String)
    description!: string

    @Field(() => String)
    url!: string

    @Field(() => String)
    thumbnail_small!: string

    @Field(() => String)
    thumbnail_medium!: string

    @Field(() => String)
    thumbnail_large!: string

    @Field(() => Number)
    user_id!: number

    @Field(() => String)
    user_name!: string

    @Field(() => String)
    user_url!: string

    @Field(() => String)
    user_portrait_small!: string

    @Field(() => String)
    user_portrait_medium!: string

    @Field(() => String)
    user_portrait_large!: string

    @Field(() => String)
    user_portrait_huge!: string

    @Field(() => Number)
    stats_number_of_likes?: number

    @Field(() => Number)
    stats_number_of_plays?: number

    @Field(() => Number)
    stats_number_of_comments?: number

    @Field(() => Number)
    duration!: number

    @Field(() => Number)
    width!: number

    @Field(() => Number)
    height!: number

    @Field(() => String)
    tags!: string

    @Field(() => String)
    embed_privacy!: string
}
