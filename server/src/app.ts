import express, { ErrorRequestHandler } from "express";
import path from "path";
import { ConfigService } from "./services/config/config.interface";
import errorHandler from "./middlewares/handlers/error.handler";
import logger from "./utils/logger";
import router from "./routers/main.router";

const config = new ConfigService();
const app = express();

const PORT = Number(config.get("PORT") ?? 80);

app.use((req, res, next) => {
  if (req.url.includes(".")) {
    // if requests a file
    logger.info(`[s] > ${req.url}`);
  } else {
    logger.info(`[+] > ${req.url}`);
  }
  next();
});

app.use(
  express.static(
    path.join(
      __dirname + "./../" + (config.get("FRONTEND_FILES_DIR") ?? "../build/")
    )
  )
);
app.use(router);

app.use(errorHandler as ErrorRequestHandler);

app.listen(PORT, () =>
  logger.info(`server is running on port ${PORT}. http://localhost:${PORT}`)
);
