import cookieParser from "cookie-parser";
import express from "express";
import path from "path";
import morgan from "morgan";
import helmet from "helmet";
import passport from "passport";
import "./passport"; // When we do app.use(passport) it will automatically look for any strategy on ./passport
import globalRouter from "./routers/globalRouter";
import userRouter from "./routers/userRouter";
import videoRouter from "./routers/videoRouter";
import { localsMiddleware } from "./middlewares";

const app = express();

app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));
app.use("/static", express.static(path.join(__dirname, "static")));
app.use("/upload", express.static(path.join(__dirname, "upload")));
app.use(helmet());
app.use(morgan("dev"));
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(passport.initialize()); // 쿠키에 정보에 해당하는 사용자를 찾는다.
app.use(passport.session()); // 사용자 object를 req.user에 담아준다.
app.use(localsMiddleware);

app.use("/", globalRouter);
app.use("/users", userRouter);
app.use("/videos", videoRouter);

export default app;
