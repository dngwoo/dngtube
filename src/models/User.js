import mongoose from "mongoose";
import passportLocalMongoose from "passport-local-mongoose";

const UserSchema = new mongoose.Schema({
  name: String,
  email: String,
  avatarUrl: String,
  facebookId: Number,
  githubId: Number,
});

UserSchema.plugin(passportLocalMongoose, {
  usernameField: "email",
}); // 패스워드 설정, 패스워등 확인 등등 그런것들을 자동으로 해준다.

const model = mongoose.model("User", UserSchema);

export default model;
