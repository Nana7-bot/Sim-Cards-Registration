module.exports = function (details) {
  details.get("/full_details", (req, res) => {
    res.render("full_details");
  });
};
