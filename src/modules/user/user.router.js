const express = require("express");
const router = express.Router();
const userController = require("./user.controller");

router
  .post("/sync", userController.sync)
  .post("/", userController.create)
  .get("/", userController.findAll)
  .get("/:id", userController.findOne)
  .put("/:id", userController.update)
  .delete("/:id", userController.delete);

module.exports = router;
