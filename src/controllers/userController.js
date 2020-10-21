import User from "../models/User";

export const join = async (req, res) => {
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
      } catch (error) {
        console.error(error);
      } finally {
        res.redirect("/");
      }
    }
  }
};

export const login = (req, res) => {
  if (req.method === "GET") {
    res.render("login", { pageTitle: "Login" });
  } else if (req.method === "POST") {
    res.redirect("/");
  }
};

export const logout = (req, res) => res.redirect("/");

export const userDetail = (req, res) =>
  res.render("userDetail", { pageTitle: "User Detail" });
export const editProfile = (req, res) =>
  res.render("editProfile", { pageTitle: "Edit Profile" });
export const changePassword = (req, res) =>
  res.render("changePassword", { pageTitle: "Change Password" });
