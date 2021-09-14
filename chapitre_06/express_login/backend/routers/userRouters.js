const express = require("express");
const userControllers = require("../controllers/userControllers");
const userMiddlewares = require("../middlewares/registerMiddlewares");

const router = express.Router();

// GET

router.get("/admin", userControllers.admin);

// POST
router.post(
  "/register",
  userMiddlewares.registerCheck(),
  userControllers.register
);

router.post("/login", userControllers.login);

module.exports = router;
