import express from "express";
import { join, login, logout } from "../controllers/userController";
import { home, search } from "../controllers/videoController";

const globalRouter = express.Router();

globalRouter.get("/", home);
globalRouter.route("/join").get(join).post(join, login);
globalRouter.route("/login").get(login).post(login);
globalRouter.get("/logout", logout);
globalRouter.get("/search", search);

export default globalRouter;
