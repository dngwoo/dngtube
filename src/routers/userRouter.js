import express from "express";

const userRouter = express.Router();

userRouter.get("/", (req, res) => res.send("Users"));
userRouter.get("/:id", (req, res) => res.send("User Detail"));
userRouter.get("/:id/edit", (req, res) => res.send("Edit Profile"));
userRouter.get("/change-password", (req, res) => res.send("Change Password"));

export default userRouter;
