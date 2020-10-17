import express from "express";
import path from "path";
import morgan from "morgan";
import helmet from "helmet";

const app = express();

app.use(morgan("dev"));
app.use(helmet());

app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));

export default app;
