import express from "express";

const videoRouter = express.Router();

videoRouter.get("/", (req, res) => res.send("Videos"));
videoRouter.get("/upload", (req, res) => res.send("Upload"));
videoRouter.get("/:id", (req, res) => res.send("Video Detail"));
videoRouter.get("/:id/edit", (req, res) => res.send("Edit Video"));
videoRouter.get("/:id/delete", (req, res) => res.send("Delete Video"));

export default videoRouter;
