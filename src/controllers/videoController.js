import { videos } from "../db";

export const home = (req, res) =>
  res.render("home", { pageTitle: "Home", videos });

export const search = (req, res) => {
  const { term } = req.query;
  res.render("search", { pageTitle: "Search", term, videos });
};

export const upload = (req, res) => {
  if (req.method === "GET") {
    res.render("upload", { pageTitle: "Upload" });
  } else if (req.method === "POST") {
    const { file, title, description } = req.body;
    res.redirect("/333333");
  }
};

export const videoDetail = (req, res) =>
  res.render("videoDetail", { pageTitle: "Video Detail" });

export const editVideo = (req, res) =>
  res.render("editVideo", { pageTitle: "Edit Video" });

export const deleteVideo = (req, res) =>
  res.render("deleteVideo", { pageTitle: "Delete Video" });
