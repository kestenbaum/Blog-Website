import { Request } from "express";

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

export interface IDataPayload {
    posts?: IBlogPost[];
    post?: IBlogPost;
}

export interface IPath<T extends IDataPayload = IDataPayload> {
    id: number;
    path: string;
    element: string;
    data?: (req: Request) => T;
}
