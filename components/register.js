module.exports = function (register) {
  register.get("/", (req, res) => {
    res.render("register");
  });

  register.post("/register", (req, res) => {
    res.redirect("success");
  });
};
