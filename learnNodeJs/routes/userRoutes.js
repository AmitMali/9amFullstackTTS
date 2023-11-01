const express = require("express");
const {
  allUsers,
  userProfile,
  userCreate,
  showUser,
} = require("../controllers/userController");
const router = express.Router();

router.get("/", allUsers);
router.get("/:id", showUser);
router.get("/profile", userProfile);
router.post("/", userCreate);
module.exports = router;
