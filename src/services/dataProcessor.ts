import data from "../services/data/posts.json";
import { IPost, IBlogPost } from "../models";

const dataProcessor = (posts: IPost[]) => {
    return posts.map(post => {
        const date = new Date(post.createdAt * 1000);
        const humanReadableDate = date.toLocaleDateString("en-US", {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
        const slug = post.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-*|-*$/g, '');

        return {
            ...post,
            date: humanReadableDate,
            slug
        } as IPost
    })
}

export const blogPost: IBlogPost[] = dataProcessor(data);