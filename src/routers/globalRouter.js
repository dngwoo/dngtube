import express from "express";

const globalRouter = express.Router();

globalRouter.get("/", (req, res) => res.send("Home"));
globalRouter.get("/join", (req, res) => res.send("Join"));
globalRouter.get("/login", (req, res) => res.send("Login"));
globalRouter.get("/logout", (req, res) => res.send("Logout"));
globalRouter.get("/search", (req, res) => res.send("Search"));

export default globalRouter;
