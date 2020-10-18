import Video from "../models/Video";

export const home = async (req, res) => {
  try {
    const videos = await Video.find({}).sort({ _id: -1 }); // videos라는 컬렉션에서 모든 비디오를 찾음.
    res.render("home", { pageTitle: "Home", videos });
  } catch (error) {
    console.error(error);
    res.render("home", { pageTitle: "Home", videos: [] });
  }
};

export const search = async (req, res) => {
  const { term } = req.query;
  let videos;

  try {
    videos = await Video.find({
      title: { $regx: term, $options: "i" }, // title이 term인애를 찾음. 대소문자 구분x
    });
  } catch (error) {
    console.error(error);
  } finally {
    res.render("search", { pageTitle: "Search", term, videos });
  }
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
    res.render("videoDetail", { pageTitle: video.title, video });
  } catch (error) {
    console.error(error);
    res.redirect("/");
  }
};

export const editVideo = async (req, res) => {
  const { id } = req.params;
  if (req.method === "GET") {
    try {
      const video = await Video.findById(id);
      res.render("editVideo", { pageTitle: "Edit Video", video });
    } catch (error) {
      res.redirect("/");
    }
  } else if (req.method === "POST") {
    const { title, description } = req.body;
    try {
      await Video.findByIdAndUpdate(id, { title, description });
      res.redirect(`/${id}`);
    } catch (error) {
      console.error(error);
      res.redirect("/");
    }
  }
};

export const deleteVideo = async (req, res) => {
  const { id } = req.params;
  try {
    await Video.findByIdAndRemove(id);
  } catch (error) {
    console.error(error);
  } finally {
    res.redirect("/");
  }
};
