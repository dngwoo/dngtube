import passport from "passport";
import User from "../models/User";

export const join = async (req, res, next) => {
  if (req.method === "GET") {
    res.render("join", { pageTitle: "Join" });
  } else if (req.method === "POST") {
    const { name, email, password, password2 } = req.body;
    if (password !== password2) {
      res.status(400); // 클라이언트 에러, 비번틀림
      res.render("join", { pageTitle: "Join" });
    } else {
      try {
        const user = await User({
          name,
          email,
        });
        await User.register(user, password); // passport-local-mongoose
        next(); // postLogin으로 가게 된다. 회원가입되면 바로 로그인 시킨다.
      } catch (error) {
        console.error(error);
        res.redirect("/");
      }
    }
  }
};

export const login = (req, res) => {
  if (req.method === "GET") {
    res.render("login", { pageTitle: "Login" });
  } else if (req.method === "POST") {
    console.log(req.body.password);
    // postJoin에서 정보를 그대로 받아와서 로그인 시킴.
    // 그 정보들이 없으면 authenticate 사용 불가.
    passport.authenticate("local", {
      failureRedirect: "/login",
      successRedirect: "/",
    });

    console.log("왜안되지 미치겠네 ㅋㅋ");
  }
};

export const logout = (req, res) => res.redirect("/");

export const userDetail = (req, res) =>
  res.render("userDetail", { pageTitle: "User Detail" });
export const editProfile = (req, res) =>
  res.render("editProfile", { pageTitle: "Edit Profile" });
export const changePassword = (req, res) =>
  res.render("changePassword", { pageTitle: "Change Password" });
