const express = require("express");
const router = express.Router();

router.get("/", async (_req, res) => {
  res.render("index.hbs", {
    title: "TrainedByNik - Your #1 Fitness And Peak Performance Mentor",
    description:
      "To Help You Build Your Dream Body And Obtain The Highest Level Of Execution And Happiness In All Areas Of Life.",
  });
});

module.exports = router;
