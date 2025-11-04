import nunjucks from "nunjucks";
import { Express } from "express";

export const config = (viewsPath: string, app: Express) => {
    return nunjucks.configure(viewsPath, {
      autoescape: true,
      express: app,
      watch: true,
    });
}