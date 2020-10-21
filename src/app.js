import cookieParser from "cookie-parser";
import express from "express";
import session from "express-session";
import path from "path";
import morgan from "morgan";
import helmet from "helmet";
import passport from "passport";
import "./passport"; // When we do app.use(passport) it will automatically look for any strategy on ./passport
import dotenv from "dotenv";
import globalRouter from "./routers/globalRouter";
import userRouter from "./routers/userRouter";
import videoRouter from "./routers/videoRouter";
import { localsMiddleware } from "./middlewares";

dotenv.config();

const app = express();

console.log(process.env.COOKIE_SECRET);

app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));
app.use("/static", express.static(path.join(__dirname, "static")));
app.use("/upload", express.static(path.join(__dirname, "upload")));
app.use(helmet());
app.use(morgan("dev"));
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  session({
    secret: process.env.COOKIE_SECRET,
    resave: false,
    saveUninitialized: false,
  })
);
// express-session은 passport로 로그인 후 유저 정보를 세션에 저장하기 위해 사용
// express-session은 사용자별로 req.session에 데이터 저장
// 클라리언트에게 쿠키를 보냄. 이 쿠키로 세션 관리.
// secret을 넣어주면 쿠키에 들어있는 sessionID를 암호화 해준다.

app.use(passport.initialize()); // passport 연결
app.use(passport.session()); // 세션 연결
app.use(localsMiddleware);

app.use("/", globalRouter);
app.use("/users", userRouter);
app.use("/videos", videoRouter);

export default app;
