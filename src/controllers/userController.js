export const join = (req, res) => {
  if (req.method === "GET") {
    res.render("join", { pageTitle: "Join" });
  } else if (req.method === "POST") {
    const { password, password2 } = req.body;
    console.log(password, password2);
    if (password !== password2) {
      res.status(400); // 클라이언트 에러, 비번틀림
      res.render("join", { pageTitle: "Join" });
    } else {
      res.redirect("/"); // 로그인 시 home으로 감
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

export const logout = (req, res) =>
  res.render("logout", { pageTitle: "Logout" });
export const userDetail = (req, res) =>
  res.render("userDetail", { pageTitle: "User Detail" });
export const editProfile = (req, res) =>
  res.render("editProfile", { pageTitle: "Edit Profile" });
export const changePassword = (req, res) =>
  res.render("changePassword", { pageTitle: "Change Password" });
