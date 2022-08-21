const express = require("express");
const router = express.Router();

router.get("/", async (_req, res) => {
  res.render("index.hbs", {
    title: "TrainedByNik - Your #1 Fitness And Peak Performance Mentor",
    description:
      "To Help You Build Your Dream Body And Obtain The Highest Level Of Execution And Happiness In All Areas Of Life.",
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
