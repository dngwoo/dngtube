import mongoose from "mongoose";

const VideoSchema = new mongoose.Schema({
  fileUrl: {
    type: String,
    required: "File URL is required",
  },
  title: {
    type: String,
    required: "Title is required",
  },
  description: String,
  views: {
    type: Number,
    default: 0,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  // 필드(e.g. mysql - column)
  comments: [
    {
      // Commnent 스키마의 ObjectId값이 들어감.
      type: mongoose.Schema.Types.ObjectId, //
      ref: "Comment",
    },
  ],
});

const model = mongoose.model("Video", VideoSchema); // videos라는 컬렉션(e.g. mysql- 테이블) 생성
export default model;
