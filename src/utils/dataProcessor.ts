import postData from "../utils/posts.json"

interface IPost {
    title: string,
    image: string,
    author: string,
    createdAt: number,
    teaser: string,
    content: string
}

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
            slug: slug
        } as IPost
    })
}

export const blogPost: IPost[] = dataProcessor(postData);