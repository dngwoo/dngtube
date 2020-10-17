import express from "express";
import {
  deleteVideo,
  editVideo,
  upload,
  videoDetail,
} from "../controllers/videoController";

const videoRouter = express.Router();

videoRouter.get("/upload", upload);
videoRouter.get("/:id", videoDetail);
videoRouter.get("/:id/edit", editVideo);
videoRouter.get("/:id/delete", deleteVideo);

export default videoRouter;
