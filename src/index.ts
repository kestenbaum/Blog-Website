import express from "express";
import nunjucks from "nunjucks";
import cors from "cors";
import path from "path";
import type { Request, Response } from "express";

const app = express();
const PORT = 4000;

const publicPath = path.join(__dirname, '..', 'public'); 
const viewsPath = path.join(__dirname, '..', 'src', 'view');

app.use(cors());
app.use(express.static(publicPath));

nunjucks.configure(viewsPath, {
  autoescape: true,
  express: app,
  watch: true,
});

app.get("/", (req: Request, res: Response) => {
  res.render("index.html", { test: "Test" });
});

app.get("/about", (req: Request, res: Response) => {
  res.render("about.html")
})

app.get("/contact", (req: Request, res: Response) => {
  res.render("contact.html")
})

app.get("/post", (req: Request, res: Response) => {
  res.render("post.html")
})


app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server running on port ${PORT}`);
});
