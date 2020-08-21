const express = require("express");

const router = express();

router.get("/", (req, res) => {
  req.session.destroy();
  res.redirect("/login");
});

module.exports.routes = router;
