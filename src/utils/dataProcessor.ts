import postData from "../utils/posts.json"

export interface IPost {
    title: string,
    image: string,
    author: string,
    createdAt: number,
    teaser: string,
    content: string
}

export interface IBlogPost extends IPost {
    date?: string; 
    slug?: string; 
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
            slug
        } as IPost
    })
}

export const blogPost: IBlogPost[] = dataProcessor(postData);