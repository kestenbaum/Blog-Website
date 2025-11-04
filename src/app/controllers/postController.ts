import { IBlogPost } from "../../models";
import { blogPost } from "../../services/dataProcessor";

import { Request } from "express";

export const postController = (req: Request) => {
    const slug = req.params.slug; 
    const post = blogPost.find((p: IBlogPost) => p.slug === slug);
                
    return { post: post }; 
}