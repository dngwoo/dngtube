import express from "express";
import {
  deleteVideo,
  editVideo,
  upload,
  videoDetail,
} from "../controllers/videoController";
import { uploadVideo } from "../middlewares";

const videoRouter = express.Router();

videoRouter.route("/upload").get(upload).post(uploadVideo, upload);
videoRouter.get("/:id", videoDetail);
videoRouter.get("/:id/edit", editVideo);
videoRouter.get("/:id/delete", deleteVideo);

export default videoRouter;
