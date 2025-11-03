export interface IPathName {
  id: number;
  path: string;
  element: string
}


export const pathName: IPathName[] = [
  {
    id: 1,
    path: "/",
    element: "pages/index.html"
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
