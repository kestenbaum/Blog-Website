import express from "express";
import nunjucks from "nunjucks";
import cors from "cors";
import path from "path";
import { renderRouter } from "./utils/routes";

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

renderRouter(app);

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server running on port ${PORT}`);
});
