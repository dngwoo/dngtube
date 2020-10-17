import express from "express";
import path from "path";
import morgan from "morgan";
import helmet from "helmet";
import globalRouter from "./routers/globalRouter";
import userRouter from "./routers/userRouter";
import videoRouter from "./routers/videoRouter";

const app = express();

app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));
app.use(helmet());
app.use(morgan("dev"));

app.use("/", globalRouter);
app.use("/users", userRouter);
app.use("/video", videoRouter);

export default app;
