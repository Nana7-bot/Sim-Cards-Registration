exports.login = function (login) {
  login.get("/login", (req, res) => {
    res.render("login");
  });
};
