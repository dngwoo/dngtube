import multer from "multer";

export const localsMiddleware = (req, res, next) => {
  res.locals.siteTitle = "dngtube";
  res.locals.user = req.user || {}; // passport가 user가 담긴 오브젝트를 req.user에 담아줌.
  next();
};

// 파일 업로드 시 사용되는 미들웨어
const multerVideo = multer({ dest: "uploads/videos/" }); // 로컬에서 uploads/videos 파일내 저장, 나중에 s3에 저장 시킬 예정
export const uploadVideo = multerVideo.single("videoFile"); // 비디오 파일 한개만 받음, input의 name과 videoFile은 같아야 함.
