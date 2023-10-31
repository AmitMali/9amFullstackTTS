const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("messege from user router");
});
router.get("/profile", (req, res) => {
  res.send("userProfile");
});
router.post("/", (req, res) => {
  res.send("user creation will go here..");
});
module.exports = router;
