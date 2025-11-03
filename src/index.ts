import express from "express";
import nunjucks from "nunjucks";
import cors from "cors"

import type { Request, Response } from "express";

const app = express();
const PORT = 4000;

app.use(cors())

nunjucks.configure('src/view', {
  autoescape: true,
  express: app,
  watch: true
});

app.get("/", (req: Request, res: Response) => {
  res.render("index.html", {
    test: "Test "
  })
});

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server running on port ${PORT}`);
});