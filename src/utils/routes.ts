import { blogPost, IBlogPost } from "./dataProcessor";
import type { Express, Request, Response } from "express";
interface IPathName {
  id: number;
  path: string;
  element: string;
  data?: (req: Request) => object
}

const pathName: IPathName[] = [
  {
    id: 1,
    path: "/",
    element: "pages/index.html",
    data: () => ({ posts: blogPost })
  },
  {
    id: 2,
    path: "/about",
    element: "pages/about.html"
  },
  {
    id: 3,
    path: "/contact",
    element: "pages/contact.html"
  },
  {
    id: 4,
    path: "/post/:slug",
    element: "pages/post.html",
    data: (req: Request) => {
            const slug = req.params.slug; 
            const post = blogPost.find((p: IBlogPost) => p.slug === slug);
            
            return { post: post }; 
        }
  }
]

export function renderRouter(app: Express) {
    return pathName.map(r => app.get(r.path, (req: Request, res: Response) => {
        let dataToRender: any = {};
        
        if (r.data) {
            dataToRender = r.data(req);
        }
      
        if (r.path.includes(':slug') && !dataToRender.post) {
             return res.status(404).render("pages/404.html", { title: "404 Not Found" });
        }
        res.render(r.element, dataToRender);
    }));
}