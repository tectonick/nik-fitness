const express = require("express");
const router = express.Router();

router.get("/", async (_req, res) => {
  res.render("index.hbs", { title: "Express", description: "Express" });
});

module.exports = router;
