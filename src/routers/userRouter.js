import express from "express";
import {
  changePassword,
  editProfile,
  userDetail,
} from "../controllers/userController";

const userRouter = express.Router();

userRouter.get("/:id", userDetail);
userRouter.get("/:id/edit", editProfile);
userRouter.get("/change-password", changePassword);

export default userRouter;
