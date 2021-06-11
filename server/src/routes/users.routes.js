
const { Router } = require('express')
const router = Router();

const usersCtrl = require ('../controllers/users.controller.js')


// const express = require("express");
// const router = express.Router();


// create - read - update - delete
router.get("/", usersCtrl.getUsers);

router.post("/", usersCtrl.createUser);

router.get("/:id", usersCtrl.getUser);

router.put("/:id", usersCtrl.editUser);

router.delete("/:id", usersCtrl.deleteUser);

module.exports = router;