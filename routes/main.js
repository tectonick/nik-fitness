const express = require("express");
const router = express.Router();

router.get("/", async (_req, res) => {
  res.render("index.hbs", {
    title: "TrainedByNik - Build A Head-Turning Physique And Live A More Powerful Life",
    description:
      "Meet coach Nik | Online fitness coaching | Client success stories | YouTube | Contact",
      canonical: "https://trainedbynik.fit",
  });
});

router.get("/coaching", async (_req, res) => {
  res.render("coaching.hbs", {
    title: `TrainedByNik's Online Fitness Coaching Program`,
    description:
      "Build A Head-Turning Physique, Become A High-Performance Machine, And Start Living A More Powerful Life",
      canonical: "https://trainedbynik.fit/coaching",
  });
});

module.exports = router;
