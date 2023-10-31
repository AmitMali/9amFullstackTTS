const express = require("express");
const {
  allUsers,
  userProfile,
  userCreate,
} = require("../controllers/userController");
const router = express.Router();

router.get("/", allUsers);
router.get("/profile", userProfile);
router.post("/", userCreate);
module.exports = router;
