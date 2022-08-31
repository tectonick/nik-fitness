const express = require("express");
const router = express.Router();

router.get("/", async (_req, res) => {
  res.render("index.hbs", {
    title: "TrainedByNik - Build A Head-Turning Physique And Live A More Powerful Life",
    description:
      "Meet coach Nik | Online fitness coaching | Client success stories | YouTube | Contact",
  });
});

router.get("/coaching", async (_req, res) => {
  res.render("coaching.hbs", {
    title: `The "No-Way-To-Fail" Online Fitness Coaching Program`,
    description:
      "Get 1 Week Of My “VIP” Coaching Experience And Life-Changing Results Totally FREE.",
  });
});

module.exports = router;
