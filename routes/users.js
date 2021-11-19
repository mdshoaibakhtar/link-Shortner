var express = require("express");
var router = express.Router();
// const shortid = require("shortid");
const config = require("config");
const Url = require("../model/url");

// router
router.get("/", async (req, res) => {
  const allUrl = await Url.find();
  res.render("index", { allUrl: allUrl });
});

router.post("/shorten", async (req, res) => {
  await Url.create(req.body);
  res.redirect("/");
});

router.get("/:shortUrl", async (req, res) => {
  const allUrl = await Url.findOne({ shortUrl: req.params.shortUrl });
  console.log("Before If", allUrl);
  if (allUrl == null) return res.status(401).send("ERROROROROROROROROR");
  allUrl.clicks++;
  allUrl.save();
  res.redirect(allUrl.longUrl);
});
module.exports = router;
