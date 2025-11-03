export interface IPathName {
  id: number;
  path: string;
  element: string
}


export const pathName: IPathName[] = [
  {
    id: 1,
    path: "/",
    element: "index.html"
  },
  {
    id: 2,
    path: "/about",
    element: "about.html"
  },
  {
    id: 3,
    path: "/contact",
    element: "contact.html"
  },
  {
    id: 4,
    path: "/post",
    element: "post.html"
  }
]
