import Video from "../models/Video";

export const home = async (req, res) => {
  try {
    const videos = await Video.find({}); // videos라는 컬렉션에서 모든 비디오를 찾음.
    res.render("home", { pageTitle: "Home", videos });
  } catch (error) {
    console.error(error);
    res.render("home", { pageTitle: "Home", videos: [] });
  }
};

export const search = (req, res) => {
  const { term } = req.query;
  res.render("search", { pageTitle: "Search", term });
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
