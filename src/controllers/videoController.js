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

export const upload = async (req, res) => {
  if (req.method === "GET") {
    res.render("upload", { pageTitle: "Upload" });
  } else if (req.method === "POST") {
    const {
      file: { path }, // multer가 req.file에 비디오 정보를 담아준다.
      body: { title, description },
    } = req;

    const newVideo = await Video.create({
      fileUrl: path,
      title,
      description,
    }); // 컬렉션에 다큐먼트 생성(e.g. mysql - row)

    res.redirect(`/${newVideo.id}`);
  }
};

export const videoDetail = async (req, res) => {
  const { id } = req.params;
  try {
    const video = await Video.findById(id);
    res.render("videoDetail", { pageTitle: "Video Detail", video });
  } catch (error) {
    console.error(error);
    res.redirect("/");
  }
};

export const editVideo = (req, res) =>
  res.render("editVideo", { pageTitle: "Edit Video" });

export const deleteVideo = (req, res) =>
  res.render("deleteVideo", { pageTitle: "Delete Video" });
