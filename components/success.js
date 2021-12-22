module.exports = function (success) {
  success.get("/success", (req, res) => {
    res.render("success");
  });
};
