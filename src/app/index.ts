import express from "express";
import cors from "cors";
import path from "path";
import * as process from 'process';
import { renderRouter } from "./routes/routes";
import { config } from "../config/nunjucks";

const app = express();
const PORT = 4000;

const publicPath = path.join(process.cwd(), 'public');
const viewsPath = path.join(__dirname, 'view');

app.use(cors());
app.use(express.static(publicPath));

config(viewsPath, app);
renderRouter(app);

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server running on port ${PORT}`);
});
