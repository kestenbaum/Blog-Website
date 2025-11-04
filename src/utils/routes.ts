import { blogPost } from "./dataProcessor";
import type { Express, Request, Response } from "express";
export interface IPathName {
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
    path: "/post",
    element: "pages/post.html"
  }
]

export function renderRouter(app: Express) { 
    return pathName.map(r => app.get(r.path, (req: Request, res: Response) => {
        let dataToRender = {};
        if (r.data) {
            dataToRender = r.data(req);
        }
        res.render(r.element, dataToRender);
    }));
}